import React from "react";
import Carousel from "react-material-ui-carousel";

import Article from "./Article";
import { NewsData } from "../Data";
import "./News.css";

function News() {
  return (
    <div id="news" className="news-section">
      <div className="news-opener-wrapper">
        <div className="news-opener">
          <h2 className="news-heading">{NewsData.newHeading}</h2>
          <p className="news-text">{NewsData.newsOpenerText}</p>
        </div>
      </div>
      <Carousel
        navButtonsAlwaysVisible="true"
        autoPlay="false"
        cycleNavigation="false"
        fullHeightHover="false"
        className="news-articles"
      >
        {NewsData.articles.map((article, i) => (
          <Article key={i} item={article} />
        ))}
      </Carousel>
    </div>
  );
}

export default News;
