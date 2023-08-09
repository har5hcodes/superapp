import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/entertainment.module.css";
import profileAvatar from "../assets/profileAvatar.png";
import movie from "../assets/movie.png";

const apiKey = "187b28eb274d5f03bb70643cfb770f2d";

const Entertainment = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || {};

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ca43fb4f8bmsh46d9be1e04ce582p1e5058jsn29a7c32373fe",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    const getMovies = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?year=2020`,
        options
      )
        .then((response) => response.json())
        .then((response) => setMovies(response.results.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    getMovies();
  }, []);

  return (
    <>
      <div className={styles.navbar}>
        <p className={styles.navHeader}>Super App</p>
        <img src={profileAvatar} />
      </div>
      <p className={styles.caption}>Entertainment according to your choice</p>

      {userDetails.selectedCategories.map((category) => {
        const getMovies = async (category) => {
          axios
            .get(
              `https://api.themoviedb.org/3/movie/movie_id/images?query=${category}&api_key=187b28eb274d5f03bb70643cfb770f2d`
            )
            .then((response) => {
              const movieImg = response.data.results[0];
            })
            .catch((error) => console.log(error));
        };
        getMovies(category);

        return (
          <div className={styles.movieRow}>
            <div className={styles.genre}>{category}</div>
            <div className={styles.movieCards}>
              <img src={movie} />
              <img src={movie} />
              <img src={movie} />
              <img src={movie} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Entertainment;
