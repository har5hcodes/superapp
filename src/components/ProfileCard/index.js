import React from "react";
import styles from "./profileCard.module.css";
import profileImg from "../../assets/profileImg.png";

const ProfileCard = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || {};
  return (
    <div className={styles.profileContainer}>
      <img src={profileImg} />
      <div className={styles.detailsContainer}>
        <div className={styles.userInfo}>
          <p>{userDetails.name}</p>
          <p>{userDetails.email}</p>
          <p style={{ fontSize: "1.8rem", fontWeight: "500" }}>
            {userDetails.username}
          </p>
        </div>
        <div className={styles.categoryContainer}>
          {userDetails.selectedCategories.map((category) => {
            return <button>{category}</button>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
