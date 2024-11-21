import axios from "axios";

const weatherURL = "https://api.openweathermap.org/data/2.5";
const currentWeatherUrl = `${weatherURL}/weather`;
const forecastWeatherUrl = `${weatherURL}/forecast`;

export const weatherIconsUrl = "https://openweathermap.org/img/wn/";

const apiKey = import.meta.env.VITE_SUNNY_WEATHER_API;

export const fetchWeatherByCoords = async (geoData) => {
  if (!geoData?.latitude || !geoData?.longitude) return;
  const params = {
    appid: apiKey,
    lat: geoData.latitude,
    lon: geoData.longitude,
    units: "metric",
  };

  const [current, forecast] = await Promise.all([
    axios.get(currentWeatherUrl, { params }),
    axios.get(forecastWeatherUrl, { params }),
  ]);
  return { currentWeather: current.data, forecast: forecast.data };
};

/**Search By City Name */
export const fetchWeatherByCity = async (searchQuery) => {
  if (!searchQuery) return;
  const params = {
    appid: apiKey,
    q: searchQuery,
    units: "metric",
  };
  const [current, forecast] = await Promise.all([
    axios.get(currentWeatherUrl, { params }),
    axios.get(forecastWeatherUrl, { params }),
  ]);
  return { currentWeather: current.data, forecast: forecast.data };
};
