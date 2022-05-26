import React, { useState, useEffect } from "react";
import axios from 'axios'
import Loading from '../components/Loading';
import { Grid } from "@mui/material";
import InstallersCard from '../components/InstallersCard'

const Installers = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [installers, setInstallers] = useState([])

    useEffect(() => {
        axios.get('https://app-challenge-api.herokuapp.com/installers')
            .then((response) => {
                setInstallers(response.data)
                setIsLoading(false)
            })
    }, [])

    return (

        <>
            <Loading visible={isLoading}/>
            <Grid container spacing={2} direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                sx={{
                    marginTop:'20px'
                }}>
            {
                installers.map(item =>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <InstallersCard
                            name={item.name}
                            rating={item.rating}
                            price_per_km={item.price_per_km}
                            id={item.id}
                        />
                    </Grid>
                )
            }
        </Grid>
        </>

    )
}

export default Installers