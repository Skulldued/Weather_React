import { weatherIconsUrl } from "../services/api";
import { getFormatedData } from "../utils";
function WeatherCard({ data }) {
  const { name, main, sys, wind, weather } = data;
  return (
    <div className="">
      <div className="flex pt-8 flex-col md:flex-row gap-8 md:gap-0 md:justify-between  px-10">
        <div className="flex flex-col items-center md:flex-none">
          <h2 className="text-xl font-semibold mb-2 ">
            {name}, {sys.country}
          </h2>
          <h3 className="text-sm">{getFormatedData()}</h3>
        </div>
        <div className="flex justify-center gap-8 px-10">
          <div>
            <h2 className="text-5xl font-bold">
              {Math.round(main.temp)} <sup className="text-yellow-400">&deg;C</sup>{" "}
            </h2>
          </div>
          <div>
            <span className="block font-semibold">{weather[0].main}</span>
            <span className="block text-sm ">
              Fells like &nbsp; {Math.round(main.feels_like)}
              <sup>&deg;C</sup>
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={`${weatherIconsUrl}${weather[0].icon}@2x.png`}
            alt={weather[0].description}
          />
        </div>
      </div>

      <div className="flex items-center justify-evenly py-4">
       
          <div>
            Wind <br />
            {Math.round(wind.speed)} km/h
          </div>
          <div>
            Humidity <br />
            {Math.round(main.humidity)} %
          </div>
          <div>
            Pressure <br />
            {Math.round(main.pressure)} mb
          </div>
      
      </div>
    </div>
  );
}

export default WeatherCard;
