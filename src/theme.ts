import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: '#2008fc',
    },
    secondary: {
      main: "#0000",
    },
    background: {
      default: '#2600ff',
      paper: "#000000",  
    },
    text: {
      primary: "#fff",
      secondary: "#d8c8d6"
    },
    
  },

  typography: {
    fontFamily: "'Montserrat', Arial, sans-serif",

    h1:{
      fontSize: "4rem",
      fontWeight: 200,
      lineHeight: 1.05,
    
    },
    
    h2: {
      fontSize: "1.4",
      fontWeight: 200,
      lineHeight: 1.4,
      
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.2
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined",
      },

    styleOverrides: {
      root: {
        color: "#ffffff",
        borderColor: "#ffffff",
        backgroundColor: "transparent",
        textTransform: "none",
        fontWeight: 700,
        borderRadius: 8,
        padding: "12px 24px",

        "&:hover": {
          borderColor: "#ffffff",
          backgroundColor: "rgb(26, 37, 182)",
        },

        "&:active": {
          backgroundColor: "rgba(0, 26, 255, 0.75)",
          borderColor: "#000000",
          },
        },
      },
    },
  }


});

theme = responsiveFontSizes(theme)
export default theme