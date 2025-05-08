import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  return (
    <>
      <div className="weather-card">
        <h3>{weatherData.name}</h3>
        <p>{weatherData.temperature}°C</p>
        <p>{weatherData.description}</p>
        <i>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          ></img>
        </i>
      </div>
    </>
  );
}

export default WeatherCard;
