import React from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./News.css";

function News() {
  // TODO: Refactor this later do get font-awesome icons more efficiently
  const leftArrow = (
    <FontAwesomeIcon className="menu-icon" icon={faAngleLeft} size="lg" />
  );
  const rightArrow = (
    <FontAwesomeIcon className="menu-icon" icon={faAngleRight} size="lg" />
  );

  // TODO: Properties for translation. Confirm best practice for react properties
  var amount = 400;
  var initial = 0;

  const translateRight = () => {
    initial += amount;
    document.getElementById("container").style.transform =
      "translateX(" + initial + "px)";
  };

  const translateLeft = () => {
    initial -= amount;
    document.getElementById("container").style.transform =
      "translateX(" + initial + "px)";
  };

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
        <div className="mask"></div>
        <button className="arrow" onClick={translateLeft}>
          {leftArrow}
        </button>
        <div id="container">
          <div className="news-article-container">
            <p className="product-text">
              Aeolus has developed a robust and portable ventilator for use in
              developing countries. Katie Stone, 22, won the Genesis Centre's
              Pitch and Pick competition with the Aeolus Portable Ventilation
              System, a prototype that will hopefully provide a cost-effective
              alternative to traditional COVID-19 ventilators.
            </p>
          </div>
          <div className="news-article-container">
            <p className="product-text">
              Aeolus has developed a robust and portable ventilator for use in
              developing countries. Katie Stone, 22, won the Genesis Centre's
              Pitch and Pick competition with the Aeolus Portable Ventilation
              System, a prototype that will hopefully provide a cost-effective
              alternative to traditional COVID-19 ventilators.
            </p>
          </div>
          <div className="news-article-container">
            <p className="product-text">
              Aeolus has developed a robust and portable ventilator for use in
              developing countries. Katie Stone, 22, won the Genesis Centre's
              Pitch and Pick competition with the Aeolus Portable Ventilation
              System, a prototype that will hopefully provide a cost-effective
              alternative to traditional COVID-19 ventilators.
            </p>
          </div>
        </div>
        <button className="arrow" onClick={translateRight}>
          {rightArrow}
        </button>
        <div className="mask">Mask</div>
      </div>
    </div>
  );
}

export default News;
