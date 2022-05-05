import ventilator from "./Product/Images/ventilator.png";

import cbcLogo from "./News/Images/cbc.png";
import torontoStarLogo from "./News/Images/toronto-star.svg";
import gazetteLogo from "./News/Images/gazette.png";
import entrevestorLogo from "./News/Images/entrevestor.png";

import katieProfilePic from "./Team/Images/katie.jpg";
import rachelProfilePic from "./Team/Images/rachel.jpg";
import desireeProfilePic from "./Team/Images/desiree.jpg";
import { TeamMember } from "./Team/TeamMember";

export const HomeData = {
  homeParagraphText:
    "Creating  innovative and unique solutions to bridge the gap of health inequality across the globe",
  aeolusCaption: "Breathe Easy.",
};

export const NavData = {
  heading: "Aeolus",
  homeLabel: "Home",
  aboutLabel: "About",
  contactLabel: "Contact",
};

export const ProductData = {
  productTitle: "Our Story",
  productText:
    "The COVID-19 pandemic revealed the stark difference between healthcare equipment and infrastructure in developed and developing countries. There are fewer than 2,000 functional ventilators in 41 African countries, according to the WHO. Health care is a human right and often times solutions are not one size fits all. Aeolus wishes to develop solutions for problems that may be overlooked.",
  productImage: ventilator,
  secondProductTitle: "The Aeolus Ventilator",
  secondProductText:
    "Aeolus is developing a low cost, portable and self-contained pneumatic ventilator system designed around the traditional bag valve mask that allows for hands-free patient ventilation in developing countries. ",
  secondProductImage: ventilator,
  thirdProductTitle: "Cost Effective Care",
  thirdProductText:
    "The average ventilator costs between 25 to 50,000 dollars, a price point that is often unattainable for developing countries. Aeolus' mission is to create a system with all essential functionality at a fraction of the cost to provide quality care at a much lower price point.",
};

export const StoryData = {
  firstStoryHeading: "Our Story",
  firstStoryParagraph:
    "The Aeolus story started in the Team's final year of electrical engineering at Memorial University. We started our senior capstone design project just as the Covid-19 pandemic began. All the headlines focused on the need for ventilators in the the fight of the virus and how there may not be enough in North America. However, the situation in developing countries was much worse.",
  secondStoryHeading: "A Global Shortage",
  secondStoryParagraph:
    "South Sudan, a nation of 11 million, has four ventilators. The Central African Republic has three ventilators for its five million people. In Liberia, which is similar in size, there are six working machines — and one of them sits behind the gates of the United States Embassy. Ten countries in Africa have none at all. It is clear that modern day ventilators do not fit into all health care systems across the globe. ",
};

export const NewsData = {
  newsOpenerText:
    "Katie Stone continued with the project post graduation and won the Genesis Centre's Pitch and Pick competition. Aeolus is currently a Bounce partner company and is excited to be a part of the local MedTech Start-up space in Newfoundland and Labrador.",
  newHeading: "News",
  articles: [
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
  ],
  readMoreText: "Read more",
};

export const TeamData = {
  teamHeading: "The Aeolus Team",
  teamMembers: [
    new TeamMember(
      "Katie Stone",
      "Katie Stone graduated from the Memorial Univeristy Electrical engineering program in 2021. Katie is passionate about innovation, software development and international development. ",
      katieProfilePic
    ),
    new TeamMember(
      "Rachel Tobin",
      "Rachel Tobin graduated from Electrical Engineering at Memorial University in 2021. She is currently working as a Product Designer with PolyUnity in St. John's.",
      rachelProfilePic
    ),
    new TeamMember(
      "Desiree Van Heerden",
      "Desiree graduated from Memorial University Electrical Engineering in 2021. Desiree is completing a master's degree in BioMedical Engineering at the University of British Columbia.",
      desireeProfilePic
    ),
  ],
};

export const ContactData = {
  learnMoreText: "Want to learn more?",
  getInTouchText: "Get in touch!",
  contactHeading: "Want to learn more? Get in touch!",
  nameLabel: "Your Name:",
  namePlaceholder: "Your Name",
  emailLabel: "Your Email:",
  emailPlaceholder: "Your Email",
  messageLabel: "What would you like to say?",
  messagePlaceholder: "",
  submitHeader: "Thanks for your message!",
  submitText: "We will get back to you as soon as we can.",
  submitButtonLabel: "Submit",
};

export const FooterData = {
  homeLabel: "Home",
  aboutLabel: "About",
  contactLabel: "Contact",
  copyText: "\u00A9 Aeolus 2022",
};
