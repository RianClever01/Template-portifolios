import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TimelineIcon from '@mui/icons-material/Timeline';
import sulamerican from "../../../../assets/images/sulamerican.jpg";
import Section from "../../../../Components/Section/Section";
import AnimBox from "../../../../Components/AnimBox/AnimBox";
import MeuBotao from "../../../../Components/Button/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const About = () => {
  return (
    <Section
      id="about"
      sx={{
        background: (theme) =>
          `linear-gradient(180deg, ${theme.palette.background.paper}, ${theme.palette.primary.main})`,
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 8, md: 10 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 5, md: 8 }}
        sx={{
          width: "100%",
          maxWidth: 1100,
          mx: "auto",
          alignItems: "center",
        }}
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <AnimBox
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={sulamerican}
              alt="Raquel Laís"
              sx={{
                width: { xs: "65%", sm: "45%", md: "100%" },
                maxWidth: 420,
                border: "2px solid black",
                borderRadius: "50%",
                display: "block",
              }}
            />
          </AnimBox>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            id="about-content"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              gap: 3,
            }}
          >
            <AnimBox>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.6rem", md: "4rem" },
                }}
              >
                Sobre mim
              </Typography>
            </AnimBox>

            <AnimBox>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: 620,
                  width: "100%",
                  textAlign: { xs: "justify", md: "justify" },
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.7,
                }}
              >
                Sou Raquel Laís, atleta de Jiu-Jitsu apaixonada pelo esporte,
                pela disciplina e por tudo aquilo que o universo das artes
                marciais representa. Minha trajetória começou através da vontade
                de superar limites, desenvolver confiança e encontrar no esporte
                uma forma de crescimento pessoal e profissional.
                <br />
                <br />
                Desde então, o Jiu-Jitsu passou a fazer parte da minha vida de
                maneira intensa, moldando não apenas a atleta que sou hoje, mas
                também a pessoa que venho me tornando diariamente. Ao longo da
                minha caminhada, participei de campeonatos, desafios e
                experiências que contribuíram para minha evolução dentro e fora
                dos tatames.
                <br />
                <br />
                Mais do que medalhas e títulos, acredito que o esporte ensina
                valores fundamentais como respeito, humildade, foco, disciplina
                e resiliência, princípios que levo comigo em todas as áreas da
                minha vida.
              </Typography>
            </AnimBox>
            
              <MeuBotao
                href="#journey"
                variant="outlined"
                startIcon={<TimelineIcon />}
                sx={{
                  position: 'absolute',
                  textAlign: 'center',
                  fontSize: {
                    xs: "0.5rem",
                    md: "0.8rem",
                  },
                  top: 15,
                  transform: "translateX(440px)",
                  maxWidth: '95%'
                }}
              >

                Minha trajetória
              </MeuBotao>
              <MeuBotao
                href="#home"
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                sx={{
                  position: 'absolute',
                  textAlign: 'center',
                  fontSize: {
                    xs: "0.5rem",
                    md: "0.8rem",
                  },
                  top: 15,
                  transform: "translateX(-550px)",
                  maxWidth: '95%'
                }}
              >

                Voltar
              </MeuBotao>
            
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

export default About;