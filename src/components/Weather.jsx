import React, { useState } from "react";
import useGeolocation from "../hooks/useGeolocation";
import { useFetchWeather } from "../hooks/useFetchWeather";
import WeatherCard from "./WeatherCard";
import { Forecast } from "./Forecast";

export default function Weather() {
  const { loading, error, data: geoData } = useGeolocation(); //Fetching data from here
  const [city, setCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data,
    error: apiError,
    isloading: apiLoading,
  } = useFetchWeather(geoData, searchQuery);

  if (loading) {
    return (
      <p className="text-blue-500 text-lg text-center font-bold">Loading...</p>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 text-lg text-center font-bold">
        Error : {error.message}
      </p>
    );
  }

  const { currentWeather, forecast } = data || {};

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      setSearchQuery(city.trim());
    }
  };

  return (
    <div className="w-full p-4 md:p-16">
      {error && <p>{error.message}</p>}
      {apiError && <p>{apiError.message}</p>}

      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          name=""
          id=""
          value={city}
          className="p-2  w-full border-gray bg-transparent outline-none border-2 border-gray-700 rounded"
          placeholder="Enter City Name"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="ml-2 py-2 px-10 bg-blue-500 text-white rounded"
          type="submit"
        >
          Search
        </button>
      </form>

      {currentWeather && <WeatherCard data={currentWeather}/>}

      {forecast && <Forecast forecast={forecast} /> }
    </div>
  );
}
