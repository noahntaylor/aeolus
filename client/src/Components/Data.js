import ventilator from "./Product/Images/ventilator.png";

import cbcLogo from "./News/Images/cbc.png";
import torontoStarLogo from "./News/Images/toronto-star.svg";
import gazetteLogo from "./News/Images/gazette.png";
import entrevestorLogo from "./News/Images/entrevestor.png";

import katieProfilePic from "./Team/Images/katie.jpeg";
import { TeamMember } from "./Team/TeamMember";

export const HomeData = {
  homeParagraphText:
    "Aeolus provides robust and one-of a kind solutions to global problems. Innovation, at a fair and global price. The health equality gap became even more apparent during hte pandemic and Aeolus is here to adress it.",
  aeolusCaption: "Breathe Easy.",
};

export const NavData = {
  heading: "Aeolus",
  homeLabel: "Home",
  aboutLabel: "About",
  contactLabel: "Contact",
};

export const ProductData = {
  productTitle: "The Aeolus Ventilator",
  productText:
    "Aeolus has developed a robust pneumatic and portable ventilator and cost effective ventilator. Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators. She said the project started as a capstone design project for her degree, along with work from partners Desiree Van Heerden and Rachel Tobin, but Stone decided   to keep working on the project herself after graduation.",
  productImage: ventilator,
  secondProductTitle: "More About Product...",
  secondProductText:
    "Aeolus has developed a robust pneumatic and portable ventilator and cost effective ventilator. Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators. She said the project started as a capstone design project for her degree, along with work from partners Desiree Van Heerden and Rachel Tobin, but Stone decided   to keep working on the project herself after graduation.",
  secondProductImage: ventilator,
  thirdProductTitle: "Last About Product...",
  thirdProductText:
    "Aeolus has developed a robust pneumatic and portable ventilator and cost effective ventilator. Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators. She said the project started as a capstone design project for her degree, along with work from partners Desiree Van Heerden and Rachel Tobin, but Stone decided   to keep working on the project herself after graduation.",
  thirdProductImage: ventilator,
};

export const StoryData = {
  firstStoryHeading: "Our Story",
  firstStoryParagraph:
    "Aeolus is currently completing the Genesis Evolution Plus program with the Genesis center for Entrepreneurship. Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators. project for her degree, along with work from partners Desiree Van Heerden and Rachel Tobin, but Stone decided to keep working on the project herself after graduation. ",
  secondStoryHeading: "A Global Shortage",
  secondStoryParagraph:
    "Aeolus has developed a robust and portable ventilator for use in developing countries. Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators. She said the project started as a capstone design project for her degree, along with work from partners Desiree Van Heerden and Rachel Tobin, but Stone decided to keep working on the project herself after graduation.",
};

export const NewsData = {
  newsOpenerText:
    "Aeolus has developed a robust and portable ventilator for use in developing countries. Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators. Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators.",
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
      "Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators.",
      katieProfilePic
    ),
    new TeamMember(
      "Rachel Tobin",
      "Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators.",
      katieProfilePic
    ),
    new TeamMember(
      "Desiree Van Heerden",
      "Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators.",
      katieProfilePic
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
