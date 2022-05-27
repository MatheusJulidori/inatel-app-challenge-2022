import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import { Box, Container, Typography, Grid } from '@mui/material';
import axios from 'axios'
import InstallersCard from '../components/InstallersCard'


const Plan = () => {

    const location = useLocation()
    console.log(location.state)
    const [installers, setInstallers] = useState([])

    useEffect(() => {
        axios.get(`https://app-challenge-api.herokuapp.com/installers?plan=${location.state.id}`)
            .then((response) => {
                setInstallers(response.data)
            })
    }, [location.state.id])

    return (
        <Container maxWidth='xl'>
            <Typography variant='h2'>{location.state.isp}</Typography>
            <Typography variant='h5'>Price per month: ${location.state.price_per_month}</Typography>
            <Typography variant='h5'>Data Capacity: {location.state.data_capacity} Gb</Typography>
            <Typography variant='h5'>Download Speed: {location.state.download_speed} Mb/s</Typography>
            <Typography variant='h5'>Upload Speed: {location.state.upload_speed} Mb/s</Typography>
            <Typography variant='h5'>Internet type: {location.state.internet_type}</Typography>
            <Box sx={{
                border: '1px solid black',
                width: '100%',
                height: 'auto',
            }}>
            </Box>
            <Typography variant='h4'>Plans: </Typography>

            <Grid container spacing={2} direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                sx={{
                    marginTop: '20px'
                }}>
                {
                    installers.map(item =>
                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                            <InstallersCard
                                name={item.name}
                                rating={item.rating}
                                price_per_km={item.price_per_km}
                                item={item}
                            />
                        </Grid>
                    )
                }
            </Grid>


        </Container>
    )
}

export default Plan