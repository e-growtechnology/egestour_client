import React from "react";
import Add from "@mui/icons-material/Add";
import { useTable } from "@refinedev/core";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { CustomButton, ReservationCard } from "components";

const AllReservations = () => {
    const navigate = useNavigate();

    const {
        tableQueryResult: { data, isLoading, isError },
        current,
        setCurrent,
        setPageSize,
        pageCount,
        filters,
        setFilters,
    } = useTable();

    const allReservations = data?.data ?? [];

    const currentFilterValues = useMemo(() => {
        const logicalFilters = filters.flatMap((item) =>
            "field" in item ? item : [],
        );

        return {
            title:
                logicalFilters.find((item) => item.field === "title")?.value ||
                "",
            tourType:
                logicalFilters.find((item) => item.field === "tourType")
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
                        {!allReservations.length
                            ? "Não há reservas"
                            : "Todas as reservas"}
                    </Typography>
                    <Box mb={2} mt={3} display="flex" width="84%">
                        <TextField
                            variant="outlined"
                            color="info"
                            placeholder="Buscar por nome"
                            value={currentFilterValues.title}
                            onChange={(e) => {
                                setFilters([
                                    {
                                        field: "title",
                                        operator: "contains",
                                        value: e.currentTarget.value
                                            ? e.currentTarget.value
                                            : undefined,
                                    },
                                ]);
                            }}
                        />
                    </Box>
                </Stack>
            </Box>

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <CustomButton
                    title="Adicionar Reserva"
                    handleClick={() => navigate("/reservations/create")}
                    backgroundColor="#475be8"
                    color="#fcfcfc"
                    icon={<Add />}
                />
            </Stack>

            <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                {allReservations.map((reservation) => (
                    <ReservationCard
                        key={reservation._id}
                        id={reservation._id}
                        title={reservation.title}
                        location={reservation.location}
                        price={reservation.price}
                        photo={reservation.photo}
                    />
                ))}
            </Box>

            {allReservations.length > 0 && (
                <Box display="flex" gap={2} mt={3} flexWrap="wrap">
                    {/* Pagination and page size controls go here */}
                </Box>
            )}
        </Box>
    );
};

export default AllReservations;