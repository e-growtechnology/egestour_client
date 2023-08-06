import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

import { FormTypeProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const ReservationForm = ({
    type,
    handleSubmit,
    formLoading,
    onFinishHandler,
}: FormTypeProps) => {
    const {
        register
    } = useForm();

    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#FFFFFF">
                Criar uma Reserva
            </Typography>

            <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
                <form
                    style={{
                        marginTop: "20px",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                    onSubmit={handleSubmit(onFinishHandler)}
                >
                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Atividade Reservada
                        </FormHelperText>
                        <Select
                            variant="outlined"
                            color="info"
                            style={{
                                width: "100%",
                                background: "transparent",
                                fontSize: "16px",
                                borderColor: "rgba(0,0,0,0.23)",
                                borderRadius: 6,
                                padding: 10,
                                color: "#919191",
                            }}
                            displayEmpty
                            required
                            inputProps={{ "aria-label": "Without label" }}
                            defaultValue=""
                            {...register("activity", {
                                required: "Este campo é obrigatório",
                            })}
                        >
                            <MenuItem value="barco">Barco</MenuItem>
                            <MenuItem value="bugre">Bugre</MenuItem>
                            <MenuItem value="jetski">Jetski</MenuItem>
                            <MenuItem value="lancha">Lancha</MenuItem>
                            <MenuItem value="quadriciclo">Quadriciclo</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Data da Reserva
                        </FormHelperText>
                        <input
                            type="date"
                            style={{
                                width: "100%",
                                background: "transparent",
                                fontSize: "16px",
                                borderColor: "rgba(0,0,0,0.23)",
                                borderRadius: 6,
                                padding: 10,
                                color: "#919191",
                            }}
                            {...register("date", {
                                required: "Este campo é obrigatório",
                            })}
                        />
                    </FormControl>

                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Hora da Reserva
                        </FormHelperText>
                        <input
                            type="time"
                            style={{
                                width: "100%",
                                background: "transparent",
                                fontSize: "16px",
                                borderColor: "rgba(0,0,0,0.23)",
                                borderRadius: 6,
                                padding: 10,
                                color: "#919191",
                            }}
                            {...register("time", {
                                required: "Este campo é obrigatório",
                            })}
                        />
                    </FormControl>

                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Confirmação
                        </FormHelperText>
                        <Select
                            variant="outlined"
                            color="info"
                            style={{
                                width: "100%",
                                background: "transparent",
                                fontSize: "16px",
                                borderColor: "rgba(0,0,0,0.23)",
                                borderRadius: 6,
                                padding: 10,
                                color: "#919191",
                            }}
                            displayEmpty
                            required
                            inputProps={{ "aria-label": "Without label" }}
                            defaultValue=""
                            {...register("confirmed", {
                                required: "Este campo é obrigatório",
                            })}
                        >
                            <MenuItem>Confirmado</MenuItem>
                            <MenuItem>Pendente</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Participantes (comprados)
                        </FormHelperText>
                        <input
                            type="number"
                            min={0}
                            style={{
                                width: "100%",
                                background: "transparent",
                                fontSize: "16px",
                                borderColor: "rgba(0,0,0,0.23)",
                                borderRadius: 6,
                                padding: 10,
                                color: "#919191",
                            }}
                            {...register("participants.purchased", {
                                required: "Este campo é obrigatório",
                                min: {
                                    value: 1,
                                    message: "O valor mínimo é 1",
                                },
                            })}
                        />
                    </FormControl>

                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Participantes (acompanhantes)
                        </FormHelperText>
                        <input
                            type="number"
                            min={0}
                            style={{
                                width: "100%",
                                background: "transparent",
                                fontSize: "16px",
                                borderColor: "rgba(0,0,0,0.23)",
                                borderRadius: 6,
                                padding: 10,
                                color: "#919191",
                            }}
                            {...register("participants.companions", {
                                required: "Este campo é obrigatório",
                                min: {
                                    value: 0,
                                    message: "O valor mínimo é 0",
                                },
                            })}
                        />
                    </FormControl>

                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Número total de assentos comprados
                        </FormHelperText>
                        <input
                            type="number"
                            min={0}
                            style={{
                                width: "100%",
                                background: "transparent",
                                fontSize: "16px",
                                borderColor: "rgba(0,0,0,0.23)",
                                borderRadius: 6,
                                padding: 10,
                                color: "#919191",
                            }}
                            {...register("participants.totalSeats", {
                                required: "Este campo é obrigatório",
                                min: {
                                    value: 0,
                                    message: "O valor mínimo é 0",
                                },
                            })}
                        />
                    </FormControl>

                    <CustomButton
                        type="submit"
                        title={formLoading ? "Enviando..." : "Enviar"}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                    />
                </form>
            </Box>
        </Box>
    );
};

export default ReservationForm;