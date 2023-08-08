import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/selectCategory.module.css";
import errorTriangle from "../assets/errorTriangle.png";

const categoriesData = [
  {
    category: "Action",
    img: require("../assets/action.png"),
    bgColor: "#FF5209",
  },
  {
    category: "Drama",
    img: require("../assets/drama.png"),
    bgColor: "#D7A4FF",
  },
  {
    category: "Romance",
    img: require("../assets/romance.png"),
    bgColor: "#148A08",
  },
  {
    category: "Thriller",
    img: require("../assets/thriller.png"),
    bgColor: "#84C2FF",
  },
  {
    category: "Western",
    img: require("../assets/western.png"),
    bgColor: "#902500",
  },
  {
    category: "Horror",
    img: require("../assets/horror.png"),
    bgColor: "#7358FF",
  },
  {
    category: "Fantasy",
    img: require("../assets/fantasy.png"),
    bgColor: "#FF4ADE",
  },
  {
    category: "Music",
    img: require("../assets/music.png"),
    bgColor: "#E61E32",
  },
  {
    category: "Fiction",
    img: require("../assets/fiction.png"),
    bgColor: "#6CD061",
  },
];

const SelectCategory = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSelectCategory = (e) => {
    if (selectedCategories.includes(e)) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== e)
      );
    } else {
      setSelectedCategories([...selectedCategories, e]);
    }
  };

  const handleNextBtn = () => {
    if (selectedCategories.length >= 3) {
      const storedUserDetails =
        JSON.parse(localStorage.getItem("userDetails")) || {};

      if (!storedUserDetails.selectedCategories) {
        storedUserDetails.selectedCategories = [];
      }

      selectedCategories.forEach((category) => {
        if (!storedUserDetails.selectedCategories.includes(category)) {
          storedUserDetails.selectedCategories.push(category);
        }
      });

      localStorage.setItem("userDetails", JSON.stringify(storedUserDetails));
      navigate("/");
    }
  };
  return (
    <div className={styles.container}>
      <button onClick={handleNextBtn} className={styles.nextBtn}>
        Next Page
      </button>
      <div className={styles.leftGrid}>
        <div>
          <p className={styles.header}>Super App</p>
          <p className={styles.subHeader}>Choose your entertainment category</p>
          <div className={styles.selectedCategoryContainer}>
            {selectedCategories.map((category) => {
              return (
                <div className={styles.closeBtn}>
                  <span className={styles.closeText}>{category}</span>
                  <span
                    onClick={() => handleSelectCategory(category)}
                    className={styles.closeIcon}
                  >
                    X
                  </span>
                </div>
              );
            })}
          </div>
          {selectedCategories.length < 3 ? (
            <div className={styles.errorContainer}>
              <img src={errorTriangle} />
              <p className={styles.paragraphStyles1}>
                Minimum 3 category required
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.rightGrid}>
        <div className={styles.categoryContainer}>
          {categoriesData.map((category) => {
            return (
              <div
                className={styles.categoryCard}
                style={{
                  backgroundColor: category.bgColor,
                  cursor: "pointer",
                  border: selectedCategories.includes(category.category)
                    ? "4px solid #11B800"
                    : "4px solid #000000",
                }}
                onClick={() => handleSelectCategory(category.category)}
              >
                <p className={styles.categoryCardHeader}>{category.category}</p>
                <img className={styles.categoryImg} src={category.img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectCategory;
