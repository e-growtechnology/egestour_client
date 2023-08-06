import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { FormTypeProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form2 = ({
    type,
    register,
    handleSubmit,
    formLoading,
    onFinishHandler,
}: FormTypeProps) => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#FFFFFF">
                {type} um Cliente
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
                            Nome
                        </FormHelperText>
                        <TextareaAutosize
                            minRows={1}
                            required
                            placeholder="Escreva o nome do cliente"
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
                            {...register("name", { required: true })}
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
                            Telefone
                        </FormHelperText>
                        <TextareaAutosize
                            minRows={1}
                            required
                            placeholder="Escreva a telefone do cliente"
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
                            {...register("phone", { required: true })}
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
                            Email
                        </FormHelperText>
                        <TextareaAutosize
                            minRows={1}
                            required
                            placeholder="Escreva o email do cliente"
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
                            {...register("email", { required: true })}
                        />
                    </FormControl>

                    <FormControl sx={{ flex: 1 }}>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Selecione a origem do cliente
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
                            defaultValue="whatsapp"
                            {...register("origin", {
                                required: true,
                            })}
                            >
                            <MenuItem value="whatsapp">Whatsapp</MenuItem>
                            <MenuItem value="facebook">Facebook</MenuItem>
                            <MenuItem value="instagram">Instagram</MenuItem>
                            <MenuItem value="prospect">Prospect</MenuItem>
                            <MenuItem value="agencia">Agencia</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ flex: 1 }}>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Selecione as preferencias do cliente
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
                                defaultValue="barco"
                                {...register("extras", {
                                    required: false,
                                })}
                            >
                                <MenuItem value="barco">Barco</MenuItem>
                                <MenuItem value="bugre">Bugre</MenuItem>
                                <MenuItem value="jetski">Jetski</MenuItem>
                                <MenuItem value="lancha">Lancha</MenuItem>
                                <MenuItem value="quadriciclo">Quadriciclo</MenuItem>
                            </Select>
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

export default Form2;
