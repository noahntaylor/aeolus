import React from "react";
import { NewsData } from "../Data";

function Article({ item }) {
  return (
    <div className="news-article-container">
      <img className="news-img" src={item.image} alt="" />
      <h2 className="news-subheading">{item.title}</h2>
      <p className="news-text">{item.text}</p>
      <a
        href={item.link}
        id="read-more"
        name="read-more"
        className="news-subheading-read-more"
      >
        {NewsData.readMoreText}
      </a>
    </div>
  );
}

export default Article;
