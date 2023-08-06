import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useDelete, useGetIdentity, useShow } from "@refinedev/core";
import { useParams, useNavigate } from "react-router-dom";
import ChatBubble from "@mui/icons-material/ChatBubble";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import Star from "@mui/icons-material/Star";

import { CustomButton } from "components";

function checkImage(url: any) {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}

const ReservationDetails = () => {
    const navigate = useNavigate();
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });
    const { queryResult } = useShow();
    const { mutate } = useDelete();
    const { id } = useParams();

    const { data, isLoading, isError } = queryResult;

    const reservationDetails = data?.data ?? {};

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if (isError) {
        return <div>Algo deu errado!</div>;
    }

    const isCurrentUser = user.email === reservationDetails.creator.email;

    const handleDeleteReservation = () => {
        const response = confirm(
            "Tem certeza que deseja deletar essa reserva?",
        );
        if (response) {
            mutate(
                {
                    resource: "reservations",
                    id: id as string,
                },
                {
                    onSuccess: () => {
                        navigate("/reservations");
                    },
                },
            );
        }
    };

    return (
        <Box
            borderRadius="15px"
            padding="20px"
            bgcolor="#FCFCFC"
            width="fit-content"
        >
            <Typography fontSize={25} fontWeight={700} color="#11142D">
                Detalhes da Reserva
            </Typography>

            <Box mt="20px">
                <Stack direction="column" gap="10px">
                    <Typography fontSize={18} fontWeight={600} color="#11142D">
                        Atividade Reservada
                    </Typography>
                    <Typography fontSize={14} color="#808191">
                        {reservationDetails.activity}
                    </Typography>
                </Stack>
            </Box>

            <Box mt="20px">
                <Stack direction="column" gap="10px">
                    <Typography fontSize={18} fontWeight={600} color="#11142D">
                        Data e Hora reservadas
                    </Typography>
                    <Typography fontSize={14} color="#808191">
                        {reservationDetails.date} às {reservationDetails.time}
                    </Typography>
                </Stack>
            </Box>

            <Box mt="20px">
                <Stack direction="column" gap="10px">
                    <Typography fontSize={18} fontWeight={600} color="#11142D">
                        Confirmação
                    </Typography>
                    <Typography fontSize={14} color="#808191">
                        {reservationDetails.confirmed ? "Confirmado" : "Pendente"}
                    </Typography>
                </Stack>
            </Box>

            <Box mt="20px">
                <Stack direction="column" gap="10px">
                    <Typography fontSize={18} fontWeight={600} color="#11142D">
                        Participantes
                    </Typography>
                    <Typography fontSize={14} color="#808191">
                        Compradores: {reservationDetails.participants?.purchased}
                    </Typography>
                    <Typography fontSize={14} color="#808191">
                        Acompanhantes: {reservationDetails.participants?.companions}
                    </Typography>
                    <Typography fontSize={14} color="#808191">
                        Total de assentos comprados: {reservationDetails.participants?.totalSeats}
                    </Typography>
                </Stack>
            </Box>


                        <Stack
                            width="100%"
                            mt="25px"
                            direction="row"
                            flexWrap="wrap"
                            gap={2}
                        >
                            <CustomButton
                                title={!isCurrentUser ? "Message" : "Edit"}
                                backgroundColor="#475BE8"
                                color="#FCFCFC"
                                fullWidth
                                icon={
                                    !isCurrentUser ? <ChatBubble /> : <Edit />
                                }
                                handleClick={() => {
                                    if (isCurrentUser) {
                                        navigate(
                                            `/reservations/edit/${reservationDetails._id}`,
                                        );
                                    }
                                }}
                            />
                            <CustomButton
                                title={!isCurrentUser ? "Call" : "Delete"}
                                backgroundColor={
                                    !isCurrentUser ? "#2ED480" : "#d42e2e"
                                }
                                color="#FCFCFC"
                                fullWidth
                                icon={!isCurrentUser ? <Phone /> : <Delete />}
                                handleClick={() => {
                                    if (isCurrentUser) handleDeleteReservation();
                                }}
                            />
                        </Stack>

                </Box>
    );
};

export default ReservationDetails;