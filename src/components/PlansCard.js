import { Card, CardHeader, CardActions, CardContent,Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom'

const PlansCard = ({ isp, data_capacity, download_speed, upload_speed, price_per_month, type_of_internet, item }) => {

    const navigate = useNavigate();

    const handlePlanClick = (paramItem) => {
      const id = paramItem.id
      navigate(`/plan/${id}`, { state:paramItem })
    }
  

    return (
        <Card sx={
            {
                maxWidth: 345,
                marginBottom: 10,
                backgroundColor: '#62AD3C'
            }
        }>
            <CardHeader
                title={`${isp}`}
                subheader={`Price: $${price_per_month} per month`}
            />
            <CardContent>
                <Typography>Data Capacity: {data_capacity}</Typography>
                <Typography>Download Speed: {download_speed}</Typography>
                <Typography>Upload Speed: {upload_speed}</Typography>
                <Typography>Internet Type: {type_of_internet}</Typography>
            </CardContent>
            <CardActions disableSpacing>
        <Button variant="text" onClick={()=>{handlePlanClick(item)}}>More info</Button>
      </CardActions>
        </Card>
    );
}

export default PlansCard