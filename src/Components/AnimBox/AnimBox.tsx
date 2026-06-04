import {Box} from "@mui/material";
import type { BoxProps } from "@mui/material";
import { motion } from "framer-motion";



const fadeUp = {
   
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0
    }

    
};


const AnimBox = ({children, sx, ...props}: BoxProps)=> {

    return(
        <Box
            component={motion.div}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.3}}
            transition={{duration:0.9}}
            
            sx={[
                {
                   width: "100%"
                    
                },
                ...(Array.isArray(sx)? sx: [sx]),
            ]}
        
            {...props}
        >
            {children}
            
        </Box>

    )
}

export default AnimBox;