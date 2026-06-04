import { Box, IconButton, Modal, Tooltip, Typography } from "@mui/material"
import Section from "../../../../Components/Section/Section"
import AnimBox from "../../../../Components/AnimBox/AnimBox"
import PhotoCard from "./Components/PhotoCard/PhotoCard"
import MeuBotao from "../../../../Components/Button/Button"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { journeyYears } from "./journeyData"
import { useState } from "react"


const Journey = () => {
    type SelectedPhoto = {
        image: string;
        title: string;
        fullDescription: string;
    }

    const [openModal, setOpenModal] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState<SelectedPhoto | null>(null)
    const [currentPage, setCurrentPage] = useState(0)
    const yearsPerPage = 2
    const startIndex = currentPage * yearsPerPage
    const endIndex = startIndex + yearsPerPage
    const visibleYears = journeyYears.slice(startIndex, endIndex)
    const maxPage = Math.ceil(journeyYears.length / yearsPerPage) - 1
    const goNext = () => {
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const goPrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (

        <Section id="journey"
            sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                minHeight: "250vh",
                border: "3px solid black"


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
                    href="#About"
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
                    href="#contact"
                    variant="outlined"
                    startIcon={<ContactPageIcon />}
                    sx={{
                        textAlign: 'center',
                        fontSize: {
                            xs: "0.5rem",
                            md: "0.8rem",
                        },
                    }}
                >
                    Contact Me!
                </MeuBotao>
            </Box>

            <AnimBox
                sx={{
                    mt: 10,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6

                }}
            >
                <Typography variant="h1" sx={{ textAlign: "center", }}>
                    Minha trajetória
                </Typography>
                <Typography variant="h2">
                    Nessa parte, pretendo apresentar um pouco da minha jornada no mundo da luta, mostrando minhas principais conquistas no jiu jitsu desde o início da minha jornada até esse ano!
                </Typography>
            </AnimBox>
            <Box>
                <Box sx={{ position: "relative", width: "100%" }}>

                    <Tooltip title="Próxima página">
                        <IconButton onClick={goNext} sx={{ position: "absolute", right: 0, transform: "translateY(20px)" }}>
                            <ArrowCircleRightIcon fontSize="large" />
                        </IconButton>

                    </Tooltip>
                    <Tooltip title="Página anterior">
                        <IconButton onClick={goPrevious} sx={{ position: "absolute", left: 0, transform: "translateY(20px)" }}>
                            <ArrowCircleLeftIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>

                    {visibleYears.map((yearGroup) => (
                        <Box sx={{
                            display: "flex",
                            gap: 6,
                            flexDirection: "column",
                            mt: 4,
                            //border: "3px solid white",
                            alignItems: "center",
                            justifyContent: "center",

                        }}
                        >

                            <Typography variant="h1">{yearGroup.year}</Typography>
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: {
                                        xs: "repeat(2, 1fr)",
                                        md: "repeat(4, 1fr)"
                                    },
                                    gap: { xs: 2, md: 6 },
                                    justifyContent: "center",

                                    maxWidth: { xs: "100%", md: "1120px" },
                                    //border: "3px solid white",
                                    alignItems: "flex-start"
                                }}
                            >

                                {yearGroup.photos.map((photo) => (
                                    <PhotoCard
                                        onOpen={() => {
                                            setSelectedPhoto(photo)
                                            setOpenModal(true)
                                        }}
                                        image={photo.image}
                                        title={photo.title}
                                        shortDescription={photo.shortDescription}
                                        fullDescription={photo.fullDescription}
                                    />
                                ))}
                            </Box>
                        </Box>
                    ))}

                </Box>
            </Box>

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        p: 3,
                        maxWidth: "100%",
                        maxHeight: "90vh",
                        objectFit: "contain",
                        display: "flex",
                        border: "3px solid white",
                        borderRadius: 1,
                        flexDirection: "column",
                        gap: 3,
                        overflow: "auto",
                        "&::-webkit-scrollbar": {
                            width: "6px",
                        },
                        "&::-webkit-scrollbar-track": {
                            backgroundColor: "#14005c",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#ffffff",
                            borderRadius: "8px",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                            backgroundColor: "#cfcfcf",
                        },
                    }}
                >
                    {selectedPhoto && (
                        <>

                            <Box
                                component="img" sx={{ maxHeight: "560px", maxWidth: "800px", display: "flex", border: "3px solid white", borderRadius: 20 }}
                                src={selectedPhoto.image}
                            />
                            <Typography sx={{ textAlign: "center" }}>{selectedPhoto.title}</Typography>
                            <Typography>{selectedPhoto.fullDescription}</Typography>
                        </>
                    )}

                </Box>
            </Modal>
        </Section>
    )



}

export default Journey
