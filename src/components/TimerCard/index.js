import React, { useState, useRef } from "react";
import styles from "./timerCard.module.css";
import upArrow from "../../assets/upArrow.png";
import downArrow from "../../assets/downArrow.png";

const audio = new Audio(
  "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
);

const TimerCard = () => {
  const circleRef = useRef(null);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const formatTimeUnit = (unit) => {
    return unit.toString().padStart(2, "0");
  };

  const handleIncrement = (unit) => {
    if (unit === "hours") {
      if (hours === 23) {
        setHours(0);
      } else {
        setHours(hours + 1);
      }
    } else if (unit === "minutes") {
      if (minutes === 59) {
        setMinutes(0);
      } else {
        setMinutes(minutes + 1);
      }
    } else if (unit === "seconds") {
      if (seconds === 59) {
        setSeconds(0);
      } else {
        setSeconds(seconds + 1);
      }
    }
  };

  const handleDecrement = (unit) => {
    if (hours === 0 && minutes === 0 && seconds === 0) return;
    if (unit === "hours") {
      if (hours === 0) {
        setHours(23);
      } else {
        setHours(hours - 1);
      }
    } else if (unit === "minutes") {
      if (minutes === 0) {
        setMinutes(59);
      } else {
        setMinutes(minutes - 1);
      }
    } else if (unit === "seconds") {
      if (seconds === 0) {
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    }
  };

  const handleStart = () => {
    let timer;

    if (hours === 0 && minutes === 0 && seconds === 0) return;

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const circle = circleRef.current; // Access the SVG circle element via the ref

    if (circle) {
      const circumference = 2 * Math.PI * 45; // Circumference of the circle (r = 45)
      const intervalDuration = 1000; // Interval duration in milliseconds
      const strokeChangeRate = circumference / totalSeconds; // Amount to change the stroke-dashoffset per second

      // Set animation properties
      circle.style.transition = `stroke-dashoffset ${intervalDuration}ms linear`; // Set transition

      timer = setInterval(() => {
        if (totalSeconds <= 0) {
          audio.play();
          clearInterval(timer);
        } else {
          totalSeconds--;
          const newHours = Math.floor(totalSeconds / 3600);
          const newMinutes = Math.floor((totalSeconds % 3600) / 60);
          const newSeconds = totalSeconds % 60;
          setHours(newHours);
          setMinutes(newMinutes);
          setSeconds(newSeconds);

          const remainingStroke = totalSeconds * strokeChangeRate; // Calculate remaining stroke-dashoffset
          circle.style.strokeDasharray = `${remainingStroke} ${circumference}`; // Update dasharray
        }
      }, intervalDuration);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.circleContainer}>
        <div className={styles.circle}>
          <p className={styles.circleTimer}>{`${formatTimeUnit(
            hours
          )}:${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)}`}</p>
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke="#FF6A6A"
              strokeWidth="5"
              strokeDasharray="0 283" // Initial dasharray with 0% progress
              ref={circleRef}
            />
          </svg>
        </div>
      </div>
      <div className={styles.timeContainer}>
        <div className={styles.timer}>
          <div className={styles.valueContainer}>
            <p>Hours</p>
            <img
              alt="icon"
              src={upArrow}
              onClick={() => handleIncrement("hours")}
            />
            <h1>{formatTimeUnit(hours)}</h1>
            <img
              alt="icon"
              src={downArrow}
              onClick={() => handleDecrement("hours")}
            />
          </div>
          <div className={styles.valueContainer}>
            <p>Minutes</p>
            <img
              alt="icon"
              src={upArrow}
              onClick={() => handleIncrement("minutes")}
            />
            <h1>{formatTimeUnit(minutes)}</h1>
            <img
              alt="icon"
              src={downArrow}
              onClick={() => handleDecrement("minutes")}
            />
          </div>
          <div className={styles.valueContainer}>
            <p>Seconds</p>
            <img
              alt="icon"
              src={upArrow}
              onClick={() => handleIncrement("seconds")}
            />
            <h1>{formatTimeUnit(seconds)}</h1>
            <img
              alt="icon"
              src={downArrow}
              onClick={() => handleDecrement("seconds")}
            />
          </div>
        </div>
        <button onClick={handleStart}> Start </button>
      </div>
    </div>
  );
};

export default TimerCard;
