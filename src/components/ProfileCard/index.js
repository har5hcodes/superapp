import React from "react";
import styles from "./profileCard.module.css";
import profileImg from "../../assets/profileImg.png";

const ProfileCard = () => {
  return (
    <div className={styles.profileContainer}>
      <img src={profileImg} />
      <div className={styles.detailsContainer}>
        <div className={styles.userInfo}>
          <p>Name</p>
          <p>Email</p>
          <p style={{ fontSize: "1.8rem", fontWeight: "500" }}>Username</p>
        </div>
        <div className={styles.categoryContainer}>
          <button>Action</button>
          <button>Action</button>
          <button>Action</button>
          <button>Action</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
