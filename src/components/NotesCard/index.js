import React from "react";
import styles from "./notesCard.module.css";
const NotesCard = () => {
  return (
    <div className={styles.notes}>
      <p>All notes</p>
      <textarea />
    </div>
  );
};

export default NotesCard;
