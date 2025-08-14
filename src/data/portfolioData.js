// TODO: Replace image strings with imported images in Step 2
// TODO: Update personal information, links, and project details
// TODO: Add your own projects to the projects array
// TODO: Update resume URL to your own

import xbarPlugin from '../assets/xbarPlugin.png';
import eligApp from '../assets/eligibility-app.png';
import travelApp from '../assets/travelapp.png';
import storeFront from '../assets/storefront.png';
import chrome from '../assets/chrome.png';

const siteMeta = {
  title: "Amelia Rider | Software Engineer",
  description: "Portfolio and project showcase of Amelia Rider"
};

const funFacts = [
  "🐄 I grew up on a ranch with cows, horses, and many other animals.",
  "🗾 In college, I lived in Japan for 5 months for study abroad."
];

const skills = [
  "Ruby", "Rails", "JavaScript", "React.js", "Vue.js", "HTML", "CSS", "TypeScript", "Python", "Flask", "SQL", "PostgreSQL", "Git"
];

const capstone = {
  title: "Travel Planning Site",
  description: "The travel planning site is a convenient tool that can be used to plan and track upcoming vacations. The site includes helpful features like calendar view, map view, and a collaboration tool.",
  techStack: ["Rails API", "React", "Tailwind", "PostgreSQL"],
  image: travelApp,
  imageAlt: "Screenshot of Travel Planning Site",
  liveUrl: "",
  repoUrl: "https://github.com/yourname/capstone"
};

const miniCapstone = {
  title: "Store Website",
  description: "Developed a fullstack storefront and store management website for vendor to update and edit products and customers to view and buy them.",
  techStack: ["Ruby", "Rails", "PostgreSQL", "Javascript", "React"],
  image: storeFront,
  imageAlt: "Screenshot of Storefront App",
  liveUrl: "",
  repoUrls: ["https://github.com/ameliarider/mini-capstone-frontend","https://github.com/ameliarider/mini-capstone-api"]
};

const eligibilityApp = {
  title: "Eligibility App",
  description: "Developed a demo site simulating the provider eligibility search and storage. It includes three systems, to simulate the provider side (frontend + backend) and the partner side (backend only).",
  techStack: ["Ruby", "Rails", "PostgreSQL", "Javascript", "React"],
  image: eligApp,
  imageAlt: "Screenshot of Eligibility App",
  liveUrl: "",
  repoUrls: ["https://github.com/ameliarider/mini-capstone-frontend","https://github.com/ameliarider/mini-capstone-api"]
}

const projects = [
  {
    title: "Weather Xbar Plugin",
    description: "Created a computer plugin to display current weather in your area for readily available use.",
    techStack: ["Ruby"],
    image: xbarPlugin,
    imageAlt: "Screenshot of weather Xbar plugin",
    liveUrl: "",
    repoUrl: "https://github.com/ameliarider/xbar-weather-app"
  },
  {
    title: "Recipe Chrome Extension",
    description: "Created a chrome extension to pin text to the top of your browser. Intended use is to pin ingredients when reading a recipe, to avoid scrolling, but it could be used for other purposes as well.",
    techStack: ["JavaScript", "CSS"],
    image: chrome,    // You'll replace this with imported image
    imageAlt: "Screenshot of Chrome extension",
    liveUrl: "",
    repoUrl: "https://github.com/ameliarider/recipe-chrome-extension"
  }
];

const resumeURL = "https://docs.google.com/document/d/1gN2o2IHLYjlmaZrZCVx9lIbH8GWRYV5G3WSKxMqEdZc/edit?usp=sharing";

export {
  siteMeta,
  funFacts,
  skills,
  capstone,
  miniCapstone,
  eligibilityApp,
  projects,
  resumeURL
};