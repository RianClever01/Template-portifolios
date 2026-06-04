import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material";

const Section = ({children, sx, ...props}: BoxProps) => {

    return(
        <Box
            component="section"
            sx={[
                {
                minHeight: "100vh",
                position: "relative",
                display: "flex",
                alignItems: "center",
                color: "text.primary",
                px: {xs: 2, md: 8 },
                py: {xs: 6, md: 0},
                overflow: "hidden",
                },
                ...(Array.isArray(sx)? sx : [sx]),

            ]}
            {...props}
        >
            {children}
        </Box>
    );
};

export default Section;