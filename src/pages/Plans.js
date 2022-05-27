import React, { useState, useEffect } from "react";
import axios from 'axios'
import Loading from '../components/Loading';
import { Grid } from "@mui/material";
import PlansCard from '../components/PlansCard'


const Plans = () =>{

    const [isLoading,setIsLoading] = useState(true)
    const [plans,setPlans] = useState([])
    

    useEffect(() => {
        axios.get('https://app-challenge-api.herokuapp.com/plans')
            .then((response) => {
                setPlans(response.data)
                setIsLoading(false)
            })
    }, [])

    return(
        <>
        <Loading visible={isLoading}/>
        <Grid container spacing={2} direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            sx={{
                marginTop:'20px'
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
    </>
    )
}

export default Plans