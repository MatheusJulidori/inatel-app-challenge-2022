import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import { Box, Container, Typography, Grid } from '@mui/material';
import axios from 'axios'
import PlansCard from '../components/PlansCard'


const Installer = () => {

    const location = useLocation()
    console.log(location.state)
    const [plans, setPlans] = useState([])

    useEffect(() => {
        axios.get(`https://app-challenge-api.herokuapp.com/plans?installer=${location.state.id}`)
            .then((response) => {
                setPlans(response.data)
            })
    }, [location.state.id])

    return (
            <Container maxWidth='xl'>
                <Typography variant='h2'>{location.state.name}</Typography>
                <Typography variant='h5'>Price per km: ${location.state.price_per_km}</Typography>
                <Typography variant='h5'>Rating: {location.state.rating}/10</Typography>
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
                        plans.map(item =>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <PlansCard
                                    isp={item.isp}
                                    data_capacity={item.data_capacity}
                                    price_per_month={item.price_per_month}
                                    download_speed={item.download_speed}
                                    upload_speed={item.upload_speed}
                                    type_of_internet={item.type_of_internet}
                                    item={item}
                                />
                            </Grid>
                        )
                    }
                </Grid>


            </Container>
    )
}

export default Installer