import React, { useEffect, useState } from "react";
import styles from "./notesCard.module.css";

const NotesCard = () => {
  const [notes, setNotes] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    const storedUserDetails =
      JSON.parse(localStorage.getItem("userDetails")) || {};
    setNotes(storedUserDetails.notes || "");
  }, []);

  const handleChange = (event) => {
    setNotes(event.target.value);
    if (isEditing) {
      const storedUserDetails =
        JSON.parse(localStorage.getItem("userDetails")) || {};
      if (!storedUserDetails.notes) {
        storedUserDetails.notes = "";
      }
      storedUserDetails.notes = event.target.value;
      localStorage.setItem("userDetails", JSON.stringify(storedUserDetails));
    }
  };

  return (
    <div className={styles.notes}>
      <p>All notes</p>
      <textarea
        style={{
          backgroundColor: isEditing ? "white" : "#f1c75b",
        }}
        readOnly={!isEditing}
        value={notes}
        onChange={handleChange}
      />
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
};

export default NotesCard;
