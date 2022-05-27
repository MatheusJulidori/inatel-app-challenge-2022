import { Card, CardHeader, CardActions, CardContent,Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


const InstallersCard = ({ name, rating, price_per_km, item }) => {

  const navigate = useNavigate();

  const handleInstallerClick = (paramItem) => {
    const id = paramItem.id
    navigate(`/installer/${id}`, { state:paramItem })
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
        title={`${name}`}
        subheader={`Price: $${price_per_km} per Km`}
      />
      <CardContent>
        <Typography>Rating: {rating}/10</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="text" onClick={()=>{handleInstallerClick(item)}}>More info</Button>
      </CardActions>
    </Card>
  );
}

export default InstallersCard