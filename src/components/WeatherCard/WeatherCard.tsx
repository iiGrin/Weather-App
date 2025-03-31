import { ITransformedWeather } from "@/interfaces/ITransformedWeather";
import { getWeatherIconUrl } from "@/utils/getWeatherIconUrl/getWeatherIconUrl";
import styles from './WeatherCard.module.scss';

export interface WeatherCardProps {
  data: ITransformedWeather;
}


export const WeatherCard = ({ data }: WeatherCardProps) => {
  const { city, icon, temperature, description } = data;
  return (
    <div className={styles.weather__card}>
      <h2 className={styles.weather__card_title}>{city}</h2>
      <img className={styles.weather__card_icon} src={getWeatherIconUrl(icon)} alt={city} />
      <div>{temperature}°C</div>
      <p className={styles.weather__card_descr}>{description}</p>
    </div>
  )
}