import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({newInfo}){
  let[city ,setCity]=useState("");
  let[error,setError]=useState("");

    let API_URL="https://api.openweathermap.org/data/2.5/weather"
  let API_KEY="b375e58bb30a48544f2d9938d38f8187"

  let getWeatherInfo= async()=>{
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let getresult= await response.json();
      
try {
         let result={
           city:city,
           temp:getresult.main.temp,
           humidity:getresult.main.humidity,
           maxTemp: getresult.main.temp_max,
           minTemp: getresult.main.temp_min,
           feelsLike:getresult.main.feels_like,
           Weather:getresult.weather[0].description,
       }
       return result;
} catch (error) {
  throw error
}
       
  }

  let handleInp=(evt)=>{
      setCity(evt.target.value);
  }

  let handleSubmit =async(evt)=>{
try {
      evt.preventDefault();
    console.log(city);
    setCity("");
   let info= await getWeatherInfo();
    newInfo(info);
    setError("")
} catch (error) {
  setError(error);
}
  }

    return(
        <div>
        <h2>Search for the weather!</h2>
        <form onSubmit={handleSubmit}>
              <TextField id="City" label="City"value={city}  variant="outlined" onChange={handleInp} required />
              <br></br> 
              <Button variant="outlined"  type='submit'>Search</Button>
              <br></br>
              <p style={{color:"red"}}>{error && "No such place exist in our API"}</p> 
        </form>
        </div>
    )

}