import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./newsCard.module.css";
const apiBaseUrl = "https://newsapi.org/v2/everything";
const apiKey = "72f03d361328475b93cc8e5d13606515";

const NewsCard = () => {
  const [news, setNews] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const currentDate = new Date().toLocaleString("en-US", options);
    setDate(currentDate);

    const getNews = () => {
      axios
        .get(`${apiBaseUrl}?q=tesla&apiKey=${apiKey}`)
        .then((response) => {
          const articles = response.data.articles;
          console.log(articles[0].description);
          setNews(articles[0]);
        })
        .catch((error) => console.log(error));
    };
    getNews();
  }, []);
  return (
    <div className={styles.newsContainer}>
      <div
        className={styles.box1}
        style={{
          backgroundImage: `url(${news.urlToImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.titleContainer}>
          <h1>{news.title}</h1>
          <p>{date}</p>
        </div>
      </div>
      <div className={styles.box2}>{news.description}</div>
    </div>
  );
};

export default NewsCard;
