
import { Typography } from "@mui/material"


const Page = ({title,Component}) =>{

    return(
        <>
            <Typography variant='h3' gutterBottom>{title}</Typography>
           <Component/>
        </>
    )
}

export default Page