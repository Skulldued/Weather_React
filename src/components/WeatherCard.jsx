import { weatherIconsUrl } from "../services/api";
import { getFormatedData } from "../utils";
function WeatherCard({ data }) {
  const { name, main, sys,wind, weather } = data;
  return (
    <div className="mb-8 text-center">
      <div>
        <h2 className="text-xl font-semibold mb-2 ">
          {name}, {sys.country}
        </h2>
        <h3 className="text-sm">{getFormatedData()}</h3>

        <h3 className="mt-2 font-semibold text-3xl">Current Weather</h3>
        <div className="flex items-center justify-center">
          <img
            src={`${weatherIconsUrl}${weather[0].icon}@2x.png`}
            alt={weather[0].description}
          />
          <span>
            {Math.round(main.temp)} <sup>&deg;C</sup>{" "}
          </span>
          <div>
            <span className="block font-semibold">{weather[0].main}</span>
            <span className="block text-sm">
              Fells like {Math.round(main.feels_like)}
              <sup>&deg;C</sup>
            </span>
          </div>
          <div className="flex ">
            <div>
                Wind <br/>
                {Math.round(wind.speed)}
            </div>
            <div>
                Humidity <br/>
                {Math.round(main.humidity)}
            </div>
            <div>
                Pressure <br/>
                {Math.round(main.pressure)}mb
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
