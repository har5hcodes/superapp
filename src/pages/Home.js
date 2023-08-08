import React from "react";
import styles from "../styles/home.module.css";
import NewsCard from "../components/NewsCard";
import NotesCard from "../components/NotesCard";
import TimerCard from "../components/TimerCard";
import ProfileCard from "../components/ProfileCard";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
