import { Card, CardHeader, CardActions, CardContent, Icon } from '@mui/material';
import Typography from '@mui/material/Typography';


const PlansCard = ({ isp, data_capacity, download_speed, upload_speed, price_per_month, type_of_internet, id }) => {


    return (
        <Card sx={
            {
                maxWidth: 345,
                marginBottom: 10,
                backgroundColor: '#9ccd50'
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
            </CardContent>
            <CardActions disableSpacing>
                <Typography>Internet Type: {type_of_internet}</Typography>
            </CardActions>
        </Card>
    );
}

export default PlansCard