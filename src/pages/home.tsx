import { useList } from "@refinedev/core";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import {
    PieChart,
    PropertyReferrals,
    TotalRevenue,
    TourCard,
} from "components";

const Home = () => {
    const { data, isLoading, isError } = useList({
        resource: "tours",
        config: {
            pagination: {
                pageSize: 4,
            },
        },
    });

    const latestTours = data?.data ?? [];

    if (isLoading) return <Typography>Carregando...</Typography>;
    if (isError) return <Typography>Algo deu errado!</Typography>;

    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#FFFFFF">
                Dashboard
            </Typography>

            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart
                    title="Tours ativos"
                    value={684}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Tours programados"
                    value={550}
                    series={[60, 40]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Total Clientes"
                    value={5684}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Tours por Localização"
                    value={555}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
            </Box>

            <Stack
                mt="25px"
                width="100%"
                direction={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <TotalRevenue />
                <PropertyReferrals />
            </Stack>

            <Box
                flex={1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
            >
                <Typography fontSize="18px" fontWeight={600} color="#11142d">
                    Últimos Passeios
                </Typography>

                <Box
                    mt={2.5}
                    sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
                >
                    {latestTours.map((tour) => (
                        <TourCard
                            key={tour._id}
                            id={tour._id}
                            title={tour.title}
                            location={tour.location}
                            price={tour.price}
                            photo={tour.photo}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
