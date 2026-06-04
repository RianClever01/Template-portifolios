import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";

type MeuBotaoprops = ButtonProps & {
    children: React.ReactNode;
};

const MeuBotao = ({children, ...props}: MeuBotaoprops) => {

    return(
        <Button 
            variant="contained"
            sx={{
                px: 3,
                py: 1.4,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 700,
                alignText: 'center',
                
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default MeuBotao