import { Card, CardHeader, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';



const InstallersCard = ({ name, rating, price_per_km, id }) => {


  return (
    <Card sx={
      {
        maxWidth: 345,
        marginBottom: 10,
        backgroundColor: '#9ccd50'
      }
    }>
      <CardHeader
        title={`${name}`}
        subheader={`Price: $${price_per_km} per Km`}
      />
      <CardActions disableSpacing>
        <Typography>Rating: {rating}/10</Typography>
      </CardActions>
    </Card>
  );
}

export default InstallersCard