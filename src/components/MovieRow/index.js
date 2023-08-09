import React, { useState, useEffect } from "react";
import styles from "./movieRow.module.css";

const MovieRow = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    const fetchMovies = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${props.category}&year=2020`,
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
