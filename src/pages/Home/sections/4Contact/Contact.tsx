import { Typography, Box, Tooltip, IconButton } from "@mui/material"
import Section from "../../../../Components/Section/Section"
import MeuBotao from "../../../../Components/Button/Button"
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AnimBox from "../../../../Components/AnimBox/AnimBox";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { portifolioData } from "c:/Users/priscilia/Desktop/Projetos/Portifolios/Portifolio-template/src/data/portifolioData";



const Contact = () => (

    <Section id="contact"
        sx={{
            display: "flex",
            flexDirection: "column",
            border: "3px solid black",
            minHeight: "110vh",
            gap: { xs: 3, md: 1 }
        }}
    >
        <Box
            sx={{

                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 2,

            }}
        >
            <MeuBotao
                href="#journey"
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                sx={{
                    textAlign: 'center',
                    fontSize: {
                        xs: "0.5rem",
                        md: "0.8rem",
                    },

                }}
            >
                Voltar
            </MeuBotao>
            <MeuBotao
                href="#home"
                variant="outlined"
                startIcon={<RestartAltIcon />}
                sx={{
                    textAlign: 'center',
                    fontSize: {
                        xs: "0.5rem",
                        md: "0.8rem",
                    },
                }}
            >
                Home
            </MeuBotao>
        </Box>
        <Box
            sx={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                gap: 8
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    maxWidth: { xs: "520px", md: "100%" },
                    justifyContent: "center"
                }}
            >
                <Typography variant="h1"> Fale comigo!</Typography>
            </Box>
            <Box
                sx={{
                    flexDirection: "column",
                    flex: 1,
                    p: { xs: 3, md: 6 },
                    gap: 10,
                    display: "flex",
                    //border: "3px solid white",
                    width: "100%",
                    maxWidth: { xs: "520px", md: "100%" },
                    alignSelf: "flex-start"
                }}
            >
                <Box>
                    <AnimBox
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 9,
                            width: "100%"
                        }}
                    >
                        <Typography variant="h2" sx={{ alignText: "left" }}> Estou disponível para aulas particulares, seminários, parcerias, patrocínios e oportunidades no jiu-jitsu. Se você quer treinar comigo, apoiar minha trajetória ou conversar sobre um projeto, entre em contato pelo WhatsApp ou Instagram. </Typography>
                    </AnimBox>
                </Box>
                <Box
                    sx={{
                        transform: "translateY(-40px)",
                        gap: 4
                    }}
                >
                    <AnimBox
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <Typography sx={{ "&:hover": { color: "text.secondary", textDecorationLine: "underline" } }}>
                            Minhas redes sociais:
                        </Typography>
                        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }} >
                            <Tooltip title={portifolioData.contact.socialMedia[0].shortMsg}>
                                <IconButton href={portifolioData.contact.socialMedia[0].link} sx={{
                                    background: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <InstagramIcon sx={{ "&:hover": { color: "text.secondary" } }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="meu Whatsapp">
                                <IconButton href="https://wa.me/5583998108774?text=Oi,%20vim%20pelo%20seu%20portfólio!" sx={{
                                    background: "linear-gradient(to right, #00ff40, #2caa12, #00000071)",
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <WhatsAppIcon sx={{ "&:hover": { color: "text.secondary" } }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Meu E-mail">
                                <IconButton href="mailto: Laisraquel650@gmail.com" sx={{
                                    background: "linear-gradient(to right, #ffffff, #f03939, #ff0202)",
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MarkEmailReadIcon sx={{ "&:hover": { color: "text.secondary" } }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Typography sx={{ "&:hover": { color: "text.secondary", textDecorationLine: "underline" }, transform: "translateY(10px)" }} >
                            Minha empresária
                        </Typography>
                        <Box sx={{ display: "flex", gap: 3, alignItems: "center", transform: "translateY(10px)" }}>
                            <Tooltip title="@ana_priscilia_">
                                <IconButton href="https://www.instagram.com/ana_priscilia_/" sx={{
                                    background: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <InstagramIcon sx={{ "&:hover": { color: "text.secondary" } }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Fone/Whatsapp">
                                <IconButton href="https://wa.me/5583998147443?text=Oi,%20vim%20pelo%20portfólio%20da%20sua%20atleta%20Raquel" sx={{
                                    background: "linear-gradient(to right, #00ff40, #2caa12, #00000071)",
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <WhatsAppIcon sx={{ "&:hover": { color: "text.secondary" } }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="E-mail para minha empresária">
                                <IconButton href="mailto: prisciliashalom5@gmail.com" sx={{
                                    background: "linear-gradient(to right, #ffffff, #f03939, #ff0202)",
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MarkEmailReadIcon sx={{ "&:hover": { color: "text.secondary" } }} />
                                </IconButton>
                            </Tooltip>
                        </Box>

                    </AnimBox>
                </Box>
            </Box>
        </Box>
    </Section>
)

export default Contact
