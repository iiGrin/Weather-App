import { ITransformedWeather } from "@/interfaces/ITransformedWeather";
import { IWeatherResponse } from "@/interfaces/IWeatherResponse";

export const transformWeather = (data: IWeatherResponse): ITransformedWeather => {
  return {
    city: data.name,
    temperature: data.main.temp,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  };
};
