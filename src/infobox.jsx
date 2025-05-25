
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function infoBox({info}){
    let Cold_URL = "https://images.unsplash.com/photo-1508843286231-c86bcf866a8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENvbGR8ZW58MHx8MHx8fDA%3D";
    let Rain_URL="https://images.unsplash.com/photo-1434118489318-42a0e62c6235?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbml8ZW58MHx8MHx8fDA%3D"
    let Hot_URL="https://media.istockphoto.com/id/2163514261/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.jpg?s=2048x2048&w=is&k=20&c=cn5lJgGTT1jTIy4Z38EAfxoJevgnZ0IJ-NsFEAscYnE="
    return( 
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? Rain_URL:info.temp <20 ?Cold_URL:Hot_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity >80 ? <ThunderstormIcon/>:info.temp <20 ?<AcUnitIcon/> :<SunnyIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp={info.minTemp}&deg;C</p>
         <p>Max Temp={info.maxTemp}&deg;C</p>
          <p>Weather is {info.Weather} and feesLike {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>

    </Card>
    )
}