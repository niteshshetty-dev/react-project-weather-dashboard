import { useState } from "react";
import "./App.css";
import Spinner from "./components/Spinner";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import ErrorBlock from "./components/ErrorBlock";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = "b556f831be2d51e258b8d19a8e569f82";

  function handleCityName(e) {
    setCityName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setWeatherData(null);
    setError(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error("File Not Found: 404");
      }

      setTimeout(() => {
        setLoading(false);
        setWeatherData((prev) => ({
          ...prev,
          name: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        }));
      }, 500);
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
        setError({
          message: "City not found, please try again!",
          details: error.message,
        });
      }, 500);
    }
    setCityName("");
  }

  return (
    <>
      <div className="container">
        <SearchForm
          cityName={cityName}
          handleCityName={handleCityName}
          handleSubmit={handleSubmit}
        />
        {error && <ErrorBlock error={error} />}
        {loading ? (
          <Spinner />
        ) : (
          weatherData && <WeatherCard weatherData={weatherData} />
        )}
      </div>
    </>
  );
}

export default App;
