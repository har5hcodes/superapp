import React from "react";
import styles from "./timerCard.module.css";
const TimerCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circleContainer}>
        <div className={styles.circle}>Circle</div>
      </div>
      <div className={styles.timeContainer}>
        <div>Time</div>
        <button>Start</button>
      </div>
    </div>
  );
};

export default TimerCard;
