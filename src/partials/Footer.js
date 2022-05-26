
import { Typography } from '@mui/material';
import  Container  from '@mui/material/Container';

const Footer = () =>{
    return(
        <Container maxWidth = 'false' sx={{backgroundColor:"black"}}>
            <Typography sx={{color:'white'}}>
                Developed by Matheus Julidori. All Rights Reserved 2022.
            </Typography>
        </Container>
    )
}

export default Footer