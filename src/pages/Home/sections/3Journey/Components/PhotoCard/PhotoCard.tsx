
import { Box, Typography, type BoxProps } from "@mui/material";






type PhotoCardprops = BoxProps & {
    image?: string;
    title?: string;
    shortDescription?: string;
    fullDescription?: string;
    onOpen?: () => void;
}

const PhotoCard = ({ image, title, shortDescription, fullDescription, onOpen, children, sx, ...props }: PhotoCardprops) => {

    return (


        <Box
            sx={[
                {
                    border: "3px solid black",
                    backgroundColor: "background.paper",
                    borderRadius: 2,
                    height: "auto",
                    width: "100%",
                    maxWidth: { xs: "170px", sm: "180px", md: "260px" },
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    transition: "0.2s ease",
                    "&:hover": {
                        transform: "scale(1.3)"
                    }
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
            {...props}
            onClick={() => {
                console.log("cliquei")
                onOpen?.()
            }}
        >

            <img width={"auto"} src={image} />

            <Box sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                flexDirection: "column",
                "&:hover": {
                    color: "text.secondary"
                }
            }}>
                <Typography
                    variant="body1"

                    sx={{

                        width: "100%",
                        textAlign: { xs: "center", md: "justified" },
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        lineHeight: 1.7,
                        mt: 0.5,
                        mb: 0.4,
                        ml: 0.7
                    }}

                >
                    <Box sx={{
                        display: "flex",
                        width: "100%",
                    }}>
                        {title}
                    </Box>

                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",

                    }}>
                    <Typography sx={{
                        textAlign: "justified",
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        ml: 0.7

                    }}
                    >
                        {shortDescription}
                    </Typography>


                </Box>
                {children}
            </Box>

        </Box >
    )

}

export default PhotoCard;