import { Box, type BoxProps } from "@mui/material"







const BoxModel = ({ children, sx, ...props }: BoxProps) => {

    return (
        <Box sx={[
            {
                width: "80%",
                height: "30vh",
                
                border: "3px solid white"
            },
            ...(Array.isArray(sx) ? sx : [sx]),

        ]}
        {...props}
        >
        {children}
        </Box>
    )
}



export default BoxModel