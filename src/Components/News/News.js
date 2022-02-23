import React from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./News.css";

function News() {
  // Refactor this later do get font-awesome icons more efficiently
  const leftArrow = (
    <FontAwesomeIcon className="menu-icon" icon={faAngleLeft} size="lg" />
  );
  const rightArrow = (
    <FontAwesomeIcon className="menu-icon" icon={faAngleRight} size="lg" />
  );

  return (
    <div id="news" className="news-section">
      <div className="news-opener">
        <h2 className="news-heading">News</h2>
        <p className="product-text">
          Aeolus has developed a robust and portable ventilator for use in
          developing countries. Katie Stone, 22, won the Genesis Centre's Pitch
          and Pick competition with the Aeolus Portable Ventilation System, a
          prototype that will hopefully provide a cost-effective alternative to
          traditional COVID-19 ventilators.
        </p>
      </div>
      <div className="news-articles">
        <div className="arrow">{leftArrow}</div>
        <div className="news-article-container">
          <h3>Have Ventilator, Will Travel</h3>
          <p>
            Aeolus has developed a robust and portable ventilator for use in
            developing countries. ries. Katie Stone, 22, won the Genesis
            Centre's Pitch and Pick competition with the Aeolus Portable
            Ventilation System, a prototype that will hopefully provide a
            cost-effective alternative to traditional COVID-19 ventilators.....
          </p>
        </div>
        <div className="news-article-container">
          <h3>Aeolus Wins Genesis Pitch!</h3>
          <p>
            Aeolus has developed a robust and portable ventilator for use in
            developing countries. ries. Katie Stone, 22, won the Genesis
            Centre's Pitch and Pick competition with the Aeolus Portable
            Ventilation System, a prototype that will hopefully provide a
            cost-effective alternative to traditional COVID-19 ventilators.....
          </p>
        </div>
        <div className="arrow">{rightArrow}</div>
      </div>
      <div className="dots">...</div>
    </div>
  );
}

export default News;
