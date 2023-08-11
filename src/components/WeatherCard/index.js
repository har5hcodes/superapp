import React, { useEffect, useState } from "react";
import styles from "./weatherCard.module.css";
import weatherIcon from "../../assets/weatherIcon.png";
import pressure from "../../assets/pressure.png";
import wind from "../../assets/wind.png";
import humidity from "../../assets/humidity.png";

const url =
  "https://foreca-weather.p.rapidapi.com/current/102643743?alt=0&tempunit=C&windunit=MS&tz=Europe%2FLondon&lang=en";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ca43fb4f8bmsh46d9be1e04ce582p1e5058jsn29a7c32373fe",
    "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
  },
};

const WeatherCard = () => {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState({
    condition: { text: "" },
  });

  useEffect(() => {
    const fetchWeather = async () => {
      await fetch(url, options)
        .then(async (data) => await data.json())
        .then((data) => setWeather(data.current));
    };
    fetchWeather();
  }, []);

  useEffect(() => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const currentDate = new Date().toLocaleString("en-US", options);
    setDate(currentDate);
  }, []);
  return (
    <div className={styles.weatherContainer}>
      <div className={styles.dateContainer}>{date}</div>
      <div className={styles.weather}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            fontSize: "1.2rem",
          }}
        >
          <img alt="icon" src={weatherIcon} />
          <p> {weather.symbolPhrase} </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "2.2em",
              fontWeight: "500",
            }}
          >
            {weather.temperature}°C
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <img alt="icon" src={pressure} />
            <p>{weather.pressure} mbar </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              fontSize: "1rem",
            }}
          >
            <img
              alt="icon"
              src={wind}
              style={{
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.1rem",
              }}
            >
              <p>{weather.windSpeed} km/h </p>
              <p>Wind</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              fontSize: "1rem",
            }}
          >
            <img
              alt="icon"
              src={humidity}
              style={{
                width: "1.5rem",
                height: "auto",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.1rem",
              }}
            >
              <p>{weather.relHumidity} %</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
