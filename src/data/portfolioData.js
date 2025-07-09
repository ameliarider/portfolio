// TODO: Replace image strings with imported images in Step 2
// TODO: Update personal information, links, and project details
// TODO: Add your own projects to the projects array
// TODO: Update resume URL to your own

import xbarPlugin from '..//assets/xbarPlugin.png';

const siteMeta = {
  title: "Amelia Rider | Software Engineer",
  description: "Portfolio and project showcase of Amelia Rider"
};

const funFacts = [
  "🐄 I grew up on a ranch with cows, horses, and many other animals.",
  "🗾 In college, I lived in Japan for 5 months for study abroad."
];

const skills = [
  "Ruby", "Rails", "JavaScript", "React", "SQL", "PostgreSQL",
  "HTML", "CSS", "Git",
];

const capstone = {
  title: "Capstone Project Title",
  description: "One-paragraph summary of the problem you solved and what you built.",
  techStack: ["Rails API", "React", "Tailwind", "PostgreSQL"],
  image: "capstone.png",    // You'll replace this with imported image
  imageAlt: "Screenshot of Capstone Project",
  liveUrl: "",             // leave blank if not deployed yet
  repoUrl: "https://github.com/yourname/capstone"
};

const miniCapstone = {
  title: "Store Website",
  description: "Developed a fullstack storefront and store management website for vendor to update and edit products and customers to view and buy them.",
  techStack: ["Ruby", "Rails", "PostgreSQL", "Javascript", "React"],
  image: "mini-capstone.png",    // You'll replace this with imported image
  imageAlt: "Screenshot of Mini-Capstone Project",
  liveUrl: "",
  repoUrls: ["https://github.com/ameliarider/mini-capstone-frontend","https://github.com/ameliarider/mini-capstone-api"]
};

const projects = [
  {
    title: "Weather Xbar Plugin",
    description: "Created a computer plugin to display current weather in your area for readily available use.",
    techStack: ["Ruby"],
    image: xbarPlugin,    // You'll replace this with imported image
    imageAlt: "Screenshot of weather Xbar plugin",
    liveUrl: "",
    repoUrl: "https://github.com/ameliarider/xbar-weather-app"
  }
];

const resumeURL = "https://docs.google.com/document/d/1gN2o2IHLYjlmaZrZCVx9lIbH8GWRYV5G3WSKxMqEdZc/edit?usp=sharing";

export {
  siteMeta,
  funFacts,
  skills,
  capstone,
  miniCapstone,
  projects,
  resumeURL
};