import { weatherIconsUrl } from "../services/api";
import { getShortDate } from "../utils";

export function Forecast({ forecast }) {
  return (
    <div className="bg-blue-400 shadow-lg p-4 rounded-lg ">
      <h2 className="text-lg font-bold mb-4 ">Forecast Weather</h2>
      <ul className="space-y-3">
        {forecast.list.slice(0, 5).map((forecastItem, index) => {
          const { dt, weather, main, wind } = forecastItem;
          return (
            <li className="p-4 bg-white rounded-lg" key={index}>
              <p className="text-lg font-bold">{getShortDate(dt)}</p>
              <div>
                <img
                  src={`${weatherIconsUrl}${weather[0].icon}@2x.png`}
                  alt={weather[0].description}
                />
              </div>
              Temp: <p>{Math.round(main.temp)}&deg;C</p>
              <p>Weather: {weather[0].main} </p>
              <div>
               windSpeed: {Math.round(wind.speed)}m/s
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
