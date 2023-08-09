import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/entertainment.module.css";
import profileAvatar from "../assets/profileAvatar.png";
import MovieRow from "../components/MovieRow";

const Entertainment = () => {
  const navigate = useNavigate();
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || {};

  const handleProfile = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className={styles.navbar}>
        <p className={styles.navHeader}>Super App</p>
        <img alt="icon" src={profileAvatar} onClick={handleProfile} />
      </div>
      <p className={styles.caption}>Entertainment according to your choice</p>

      {userDetails.selectedCategories.map((category) => {
        return <MovieRow category={category} />;
      })}
    </>
  );
};

export default Entertainment;
