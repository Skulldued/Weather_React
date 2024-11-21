import { weatherIconsUrl } from "../services/api";
import { getShortDate } from "../utils";

export function Forecast({ forecast }) {
  return (
    <div className="bg-[#202B3C] shadow-slate-700 text-black shadow-lg p-4 rounded-lg ">
      <h2 className="text-lg font-bold mb-4 text-slate-400 border-b-2 border-slate-600 pb-3 rounded-md">
        Forecast Weather
      </h2>
      <ul className="space-y-3 flex flex-wrap md:flex-nowrap justify-center lg:justify-between gap-4">
        {forecast.list.slice(0, 5).map((forecastItem, index) => {
          const { dt, weather, main, wind } = forecastItem;
          return (
            <li
              className="p-4 group  border-[1px] min-h-[280px] shadow-lg shadow-slate-700 hover:shadow-none duration-300   hover:bg-blue-700 w-full md:min-w-[250px] rounded-lg"
              key={index}
            >
              <p className="text-lg text-white  font-bold">
                {getShortDate(dt)}
              </p>
              <div>
                <img
                  src={`${weatherIconsUrl}${weather[0].icon}@2x.png`}
                  alt={weather[0].description}
                />
              </div>
              <span className="text-slate-400 group-hover:text-white flex gap-3 text-xl font-extrabold pb-3">
                Temp: <p>{Math.round(main.temp)}&deg;C</p>
              </span>
              <p className="text-slate-400 pb-3 group-hover:text-white">
                Weather: {weather[0].main}{" "}
              </p>
              <div>
                <span className="text-slate-400 group-hover:text-white pb-3">
                  windSpeed: {Math.round(wind.speed)}m/s
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
