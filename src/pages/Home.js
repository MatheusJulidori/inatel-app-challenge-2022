import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const Home = () => {

    let navigate = useNavigate();

    return (
        <Container maxWidth='xl' sx={{
            display:'flex',alignItems:'center',justifyContent:'center', height:'90%'
        }}>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{display:"flex",alignItems:"center",justifyContent:'center'}}>
                    <Box>
                        <Button
                        sx={{
                            width: '600px',
                            height:'120px',
                            backgroundColor:'#00819d',
                            color:'white',
                            '&:hover':{
                                backgroundColor:'#202e39',
                            }
                        }}
                        onClick={()=>{
                            navigate(`/installers`);
                        }}>
                            Installers
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{display:"flex",alignItems:"center",justifyContent:'center'}}>
                    <Box>
                        <Button
                        sx={{
                            width: '600px',
                            height:'120px',
                            backgroundColor:'#00819d',
                            color:'white',
                            '&:hover':{
                                backgroundColor:'#202e39',
                            }
                        }}
                        onClick={()=>{
                            navigate(`/plans`);
                        }}>
                            Plans
                        </Button>
                    </Box>
                </Grid>

            </Grid>


        </Container>
    )
}

export default Home