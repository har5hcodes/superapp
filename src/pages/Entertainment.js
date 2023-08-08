import React from "react";
import styles from "../styles/entertainment.module.css";
import profileAvatar from "../assets/profileAvatar.png";
import movie from "../assets/movie.png";
const Entertainment = () => {
  return (
    <>
      <div className={styles.navbar}>
        <p className={styles.navHeader}>Super App</p>
        <img src={profileAvatar} />
      </div>
      <p className={styles.caption}>Entertainment according to your choice</p>
      <div className={styles.movieRow}>
        <div className={styles.genre}>Action</div>
        <div className={styles.movieCards}>
          <img src={movie} />
          <img src={movie} />
          <img src={movie} />
          <img src={movie} />
        </div>
      </div>
    </>
  );
};

export default Entertainment;
