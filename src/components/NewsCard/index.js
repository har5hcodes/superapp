import React, { useState, useEffect } from "react";
import styles from "./newsCard.module.css";

const NewsCard = () => {
  const [news, setNews] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_27502565b1d18ea4c80b6619dd4dd5dea8855&q=pizza"
      )
        .then(async (data) => await data.json())
        .then((res) => setNews(res.results[9]));
    };
    fetchNews();
  }, []);

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
  }, []);
  return (
    <div className={styles.newsContainer}>
      <div
        className={styles.box1}
        style={{
          backgroundImage: `url(${news.image_url})`,
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
      <div className={styles.box2}>{news.content.slice(0, 450)}....</div>
    </div>
  );
};

export default NewsCard;
