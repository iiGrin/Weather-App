import { useState } from "react";
import { useGetWeatherByCityQuery } from "./api/weatherApi";

const App: React.FC = () => {
  const [city, setCity] = useState('London');
  const { data, error, isLoading } = useGetWeatherByCityQuery(city);

  console.log('Weather Data:', data);
  console.log('Error:', error);

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading weather data</p>}
      {data && <p>Check console for weather data!</p>}
    </div>
  );
};

export default App;