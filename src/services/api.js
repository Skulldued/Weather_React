
const weatherURL = "https://api.openweathermap.org/data/2.5"


export const fetchWeatherByCoords = async(geoData)=>{
    if(!geoData?.latitude || !geoData?.longitude) return;
}