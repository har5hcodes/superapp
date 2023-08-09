import React, { useState, useEffect } from "react";
import styles from "./movieRow.module.css";

const MovieRow = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_MOVIE_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_MOVIE_API_HOST,
      },
    };
    const fetchMovies = async () => {
      await fetch(
        `${process.env.REACT_APP_MOVIE_API_URL}?genre=${props.category}&year=2020`,
        options
      )
        .then((response) => response.json())
        .then((response) => setMovies(response.results.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    fetchMovies();
  }, [props.category]);

  return (
    <div className={styles.movieRow}>
      <div className={styles.genre}>{props.category}</div>
      <div className={styles.movieCards}>
        {movies.map((movie) => {
          return <img alt="movie thumbnail" src={movie?.primaryImage?.url} />;
        })}
      </div>
    </div>
  );
};

export default MovieRow;
