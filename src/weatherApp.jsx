import { useState } from "react";
import SearchBox from "./Searchbox";
import InfoBox from "./infobox";
export default function WeatherApp(){
    let[weatherInfo, setWeatherInfo]=useState({
        city:"Pune",
        Weather:"overcast clouds",
        feelsLike:22.58,
        humidity:86,
        maxTemp:22.07,
        minTemp:22.07,
        temp:22.07
    })

    let updateInfo =(result)=>{
        setWeatherInfo(result);
    }
return(
 <div>
    <SearchBox  newInfo={updateInfo}/>
    <br></br>
    <InfoBox info={weatherInfo}/>
 </div>   
)
}