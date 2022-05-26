import Header from "../partials/Header"
import FullHeight from "react-full-height";

import { Container } from "@mui/system"

//JSS -> CSS no JavaScript
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import Footer from "../partials/Footer";


const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#00819d',
      },
      secondary: {
        main: '#202e39',
      },
    },
  });

const Default = ({children}) =>{

    return(
        <ThemeProvider theme={theme}>
            <FullHeight>
            <Header/>
            <Container maxWidth="xl" sx={{height:'90%'}}>
                {children}
            </Container>
            </FullHeight>
            
        </ThemeProvider>
    )
}

export default Default