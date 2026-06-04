import { Box, Typography} from "@mui/material";
import Grid from "@mui/material/Grid"
import quelCostas from "../../../../assets/images/quelCostas.jpg";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Face4Icon from '@mui/icons-material/Face4';
import Section from "../../../../Components/Section/Section";
import TimelineIcon from '@mui/icons-material/Timeline';
import MeuBotao from "../../../../Components/Button/Button";




const Hero = () => {


    return (
            <Section
                id="home"
                sx={{
                   background: (theme) => 
                    `linear-gradient(180deg, ${theme.palette.background.paper}, ${theme.palette.primary.main})`
                }}
            >

                <Grid container spacing={{xs: 4, md: 6}} sx={{alignItems:"center"}}>

                    <Grid size={{ xs: 12, md: 4 }}>


                        <Box
                            component="img"
                            src={quelCostas}
                            alt="Raquel Laís"
                            sx={{
                                width: '100%',
                                maxWidth: 420,
                                border: "2px solid black",
                                borderRadius: 160,
                                mx: 'auto',
                                display: 'block',
                                transform: {
                                    xs: "translateX(0)",
                                    md: "translateX(80px)",
                                    lg: "translateX(150px)",
                                },
                            
                            }} />
                    </Grid>


                    <Grid size={{ xs: 12, md: 4, lg: 8 }}

                        sx={{
                            display: 'flex',
                            alignItems: "center",
                            flexDirection: "column",
                            justifyContent: 'center',
                            mt: 2,
                        
                        }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                transform: {
                                    xs: "translateX(0) translateY(-30px)",
                                    md: "translateX(80px)",
                                    lg: "translateX(150px)",
                                    
                                },
                                alignItems: 'center',

                            }}>
                            <Typography variant="h1" sx={{ mb: 1,  xs: "2rem", md: "4rem" }}>
                                Raquel Laís
                            </Typography>
                            <Typography variant="h2">
                                Atleta multicampeã de Jiu Jitsu
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                mb: 2,
                                gap: 2,
                                flexWrap: "wrap",
                                justifyContent: "center",
                                transform: {
                                    xs: "translateY(35px)",

                                    lg: "translateY(60px)"
                                }
                            }}>
                                <MeuBotao href="#about" variant="outlined" startIcon={<Face4Icon />}> Sobre mim  </MeuBotao>
                                <MeuBotao href="#journey" variant="outlined" startIcon={<TimelineIcon />}> Minha trajetória </MeuBotao>
                                <MeuBotao href="#contact" variant="outlined" startIcon={<ContactPageIcon />}> Contact Me </MeuBotao>
                            </Box>
                        </Box>
                        <Typography variant="body1"
                            sx={{
                                position: 'absolute',
                                textAlign: 'center',
                                fontSize: {
                                    xs: "0.9rem", 
                                    md: "1rem",
                                },
                                bottom: 15,
                                transform: {
                                    xs: "translateX(0px)",
                                    md: "translateX(80px)",
                                    lg: "translateX(150px)",
                                },
                                maxWidth: '95%'
                            }}>
                            "Guarda-me como à menina dos teus olhos. Esconde-me, à sombra das tuas asas"
                        </Typography>
                    </Grid>







                </Grid>


            </Section>
    )
}

export default Hero
