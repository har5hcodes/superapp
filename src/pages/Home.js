import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/home.module.css";
import NewsCard from "../components/NewsCard";
import NotesCard from "../components/NotesCard";
import TimerCard from "../components/TimerCard";
import ProfileCard from "../components/ProfileCard";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  const navigate = useNavigate();
  const handleBrowse = () => {
    navigate("/entertainment");
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.leftGrid}>
          <div className={styles.subContainer}>
            <div className={styles.wrapper}>
              <ProfileCard />
              <WeatherCard />
            </div>
            <NotesCard />
          </div>
          <TimerCard />
        </div>
        <NewsCard />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "4rem",
          marginBottom: "1rem",
          cursor: "pointer",
        }}
      >
        <button
          onClick={handleBrowse}
          style={{
            bottom: "1rem",
            right: "1rem",
            padding: " 0.5rem 1.5rem",
            borderRadius: "1rem",
            border: "none",
            color: "white",
            fontWeight: "500",
            fontSize: "1.2rem",
            backgroundColor: "#148A08",
          }}
        >
          Browse
        </button>
      </div>
    </div>
  );
};

export default Home;
