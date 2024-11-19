import { useQuery } from "@tanstack/react-query";
export function useFetchWeather(geoData) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['weather', geoData],
    queryFn: () => fetchWeatherByCoords(geoData),
      
  });

}
