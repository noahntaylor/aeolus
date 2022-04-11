import React from "react";
import Carousel from "react-material-ui-carousel";
import cbcLogo from "./Images/cbc.png";
import torontoStarLogo from "./Images/toronto-star.svg";
import gazetteLogo from "./Images/gazette.png";
import entrevestorLogo from "./Images/entrevestor.png";
import "./News.css";

function News() {
  const newsOpenerText =
    "Aeolus has developed a robust and portable ventilator for use in developing countries. Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators. Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators.";
  const newHeading = "News";
  const articles = [
    {
      link: "https://www.cbc.ca/news/canada/newfoundland-labrador/katie-stone-aeolus-ventilator-genesis-1.6148741",
      image: cbcLogo,
      title:
        "St. John's engineer designs ventilator to help developing countries battle COVID-19",
      text: "A St. John's electrical engineer has created a ventilator to help developing countries fight severe cases of COVID-19, taking top prize in a Memorial University competition for her work. Katie Stone, 22, won the Genesis...",
    },
    {
      link: "https://www.thestar.com/news/canada/2021/08/23/have-ventilator-will-travel.html",
      image: torontoStarLogo,
      title: "Have ventilator, will travel",
      text: "Katie Stone’s Aeolus ventilator may have started out as a school project, but she’s determined to take it as far as it will go as a marketable, affordable medical device. In fact, Stone feels it might perfectly fit the bill for developing countries that are crying out for ventilators, but can’t afford them. The Aeolus started as a group...",
    },
    {
      link: "https://gazette.mun.ca/student-life/breathe-easy/",
      image: gazetteLogo,
      title: "Breathe easy",
      text: "A Faculty of Engineering and Applied Science alumna took home first place honours in Genesis’ summer 2021 Pitch and Pick competition. Katie Stone (B.Eng.’21) won for her pneumatic ventilator system, Aeolus. Early stage tech startups Taking place three times a year, the competition is part of Evolution, Genesis’ pre-incubator program....",
    },
    {
      link: "https://entrevestor.com/home/entry/aeolus-wins-pitch-pick",
      image: entrevestorLogo,
      title: "Aeolus Wins Pitch & Pick",
      text: "Aeolus, the Newfoundland and Labrador-based maker of portable ventilators, has won startup hub Genesis’s Pitch & Pick competition, as well as the event’s Community Choice Award for its coronavirus-inspired technology. The company is building a ventilator system powered by a pneumatic pump and small enough to carry. The product is...",
    },
  ];

  return (
    <div id="news" className="news-section">
      <div className="news-opener-wrapper">
        <div className="news-opener">
          <h2 className="news-heading">{newHeading}</h2>
          <p className="news-text">{newsOpenerText}</p>
        </div>
      </div>
      <Carousel
        navButtonsAlwaysVisible="true"
        autoPlay="false"
        cycleNavigation="false"
        fullHeightHover="false"
        className="news-articles"
      >
        {articles.map((article, i) => (
          <Article key={i} item={article} />
        ))}
      </Carousel>
    </div>
  );
}

function Article({ item }) {
  const readMoreText = "Read more";

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
        {readMoreText}
      </a>
    </div>
  );
}

export default News;
