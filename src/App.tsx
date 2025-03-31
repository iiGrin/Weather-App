import { useState } from "react";
import { useGetWeatherByCityQuery } from "./api/weatherApi";
import { ITransformedWeather } from "./interfaces/ITransformedWeather";
import { transformWeather } from "./utils/transformWeather/transformWeather";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";
import styles from './App.module.scss';
import { useDebounce } from "./hooks/useDebounce";

export const App = () => {
  const [city, setCity] = useState('London');
  const debouncedCity = useDebounce(city, 1500);
  const { data, error, isLoading } = useGetWeatherByCityQuery(debouncedCity);

  const transformedWeatherData: ITransformedWeather | null = data ? transformWeather(data) : null;

  console.log('Weather Data:', data);
  console.log('Error:', error);

  return (
    <div className={styles.app}>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading weather data</p>}
      {transformedWeatherData && <WeatherCard data={transformedWeatherData} />}
    </div>
  );
};