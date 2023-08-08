import React, { useEffect, useState } from "react";
import styles from "./weatherCard.module.css";

const WeatherCard = () => {
  const [date, setDate] = useState("");

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
  });
  return (
    <div className={styles.weatherContainer}>
      <div className={styles.dateContainer}>{date}</div>
      <div className={styles.weather}>
        <div>
          <p>Heavy rain</p>
        </div>
        <div>
          <p>Temp</p>
          <p>Pressure</p>
        </div>
        <div>
          <p>Wind</p>
          <p>Humidity</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
