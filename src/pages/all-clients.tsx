import Add from "@mui/icons-material/Add";
import { useTable } from "@refinedev/core";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

import { ClientCard, CustomButton } from "components";

const AllClients = () => {
    const navigate = useNavigate();

    const {
        tableQueryResult: { data, isLoading, isError },
        current,
        setCurrent,
        setPageSize,
        pageCount,
        sorter,
        setSorter,
        filters,
        setFilters,
    } = useTable();

    const allClients = data?.data ?? [];

    const currentName = sorter.find((item) => item.field === "name")?.order;

    const toggleSort = (field: string) => {
        setSorter([{ field, order: currentName === "asc" ? "desc" : "asc" }]);
    };

    const currentFilterValues = useMemo(() => {
        const logicalFilters = filters.flatMap((item) =>
            "field" in item ? item : [],
        );

        return {
            name:
                logicalFilters.find((item) => item.field === "name")?.value ||
                "",
            email:
                logicalFilters.find((item) => item.field === "email")
                    ?.value || "",
        };
    }, [filters]);

    if (isLoading) return <Typography>Carregando...</Typography>;
    if (isError) return <Typography>Erro...</Typography>;

    return (
        <Box>
            <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                <Stack direction="column" width="100%">
                    <Typography fontSize={25} fontWeight={700} color="#FFFFFF">
                        {!allClients.length
                            ? "Não há clientes"
                            : "Todos os clientes"}
                    </Typography>
                    <Box
                        mb={2}
                        mt={3}
                        display="flex"
                        width="84%"
                        justifyContent="space-between"
                        flexWrap="wrap"
                    >
                        <Box
                            display="flex"
                            gap={2}
                            flexWrap="wrap"
                            mb={{ xs: "20px", sm: 0 }}
                        >
                            <CustomButton
                                title={`Ordenar valor ${
                                    currentName === "asc" ? "↑" : "↓"
                                }`}
                                handleClick={() => toggleSort("name")}
                                backgroundColor="#475be8"
                                color="#fcfcfc"
                            />
                            <TextField
                                variant="outlined"
                                color="info"
                                placeholder="Buscar por nome"
                                value={currentFilterValues.name}
                                onChange={(e) => {
                                    setFilters([
                                        {
                                            field: "name",
                                            operator: "contains",
                                            value: e.currentTarget.value
                                                ? e.currentTarget.value
                                                : undefined,
                                        },
                                    ]);
                                }}
                            />
                            <Select
                                variant="outlined"
                                color="info"
                                displayEmpty
                                required
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue=""
                                value={currentFilterValues.email}
                                onChange={(e) => {
                                    setFilters(
                                        [
                                            {
                                                field: "email",
                                                operator: "eq",
                                                value: e.target.value,
                                            },
                                        ],
                                        "replace",
                                    );
                                }}
                            >
                                <MenuItem value="">Todos</MenuItem>
                                {[
                                    "Facebook",
                                    "Instagram",
                                    "Whatsapp",
                                    "Prospect",
                                ].map((origin) => (
                                    <MenuItem
                                        key={origin}
                                        value={origin.toLowerCase()}
                                    >
                                        {origin}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Box>
                    </Box>
                </Stack>
            </Box>

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <CustomButton
                    title="Adicionar Cliente"
                    handleClick={() => navigate("/clients/create")}
                    backgroundColor="#475be8"
                    color="#fcfcfc"
                    icon={<Add />}
                />
            </Stack>

            <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                {allClients?.map((client) => (
                    <ClientCard
                        key={client._id}
                        id={client._id}
                        name={client.name}
                        email={client.email}
                        origin={client.origin}
                        phone={client.phone}
                        preferences={client.preferences}
                    />
                ))}
            </Box>

            {allClients.length > 0 && (
                <Box display="flex" gap={2} mt={3} flexWrap="wrap">
                    <CustomButton
                        title="Previous"
                        handleClick={() => setCurrent((prev) => prev - 1)}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                        disabled={!(current > 1)}
                    />
                    <Box
                        display={{ xs: "hidden", sm: "flex" }}
                        alignItems="center"
                        gap="5px"
                    >
                        Page{" "}
                        <strong>
                            {current} of {pageCount}
                        </strong>
                    </Box>
                    <CustomButton
                        title="Next"
                        handleClick={() => setCurrent((prev) => prev + 1)}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                        disabled={current === pageCount}
                    />
                    <Select
                        variant="outlined"
                        color="info"
                        displayEmpty
                        required
                        inputProps={{ "aria-label": "Without label" }}
                        defaultValue={10}
                        onChange={(e) =>
                            setPageSize(
                                e.target.value ? Number(e.target.value) : 10,
                            )
                        }
                    >
                        {[10, 20, 30, 40, 50].map((size) => (
                            <MenuItem key={size} value={size}>
                                Mostrar {size}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
            )}
        </Box>
    );
};

export default AllClients;
