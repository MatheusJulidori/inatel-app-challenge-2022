import Header from "../partials/Header"

import { Container } from "@mui/system"

//JSS -> CSS no JavaScript


const Default = ({children}) =>{

    return(
        <>
            <Header />
            <Container maxWidth="xl">
                {children}
            </Container>
        </>
    )
}

export default Default