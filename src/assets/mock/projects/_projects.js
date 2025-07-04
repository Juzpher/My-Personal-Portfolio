import smithee from "../../Img/Preview/smithee.png";
import photo from "../../Img/Preview/photo.png";
import portfolio from "../../Img/Preview/portfolio.png";
import taskflow from "../../Img/Preview/taskflow.png";
import tastehub from "../../Img/Preview/tastehub.png";
import julie from "../../Img/Preview/julie.png";
import finora from "../../Img/Preview/Finora.png";

//Icons
import html from "../../Img/Icons/html.png";
import css from "../../Img/Icons/css.png";
import js from "../../Img/Icons/js.png";
import react from "../../Img/Icons/react.png";
import tailwind from "../../Img/Icons/tailwind.png";
import bootstrap from "../../Img/Icons/bootstrap.png";
import material from "../../Img/Icons/material.png";
import sql from "../../Img/Icons/mysql.png";
import mongo from "../../Img/Icons/mongo.png";
import php from "../../Img/Icons/php.png";
import flowbite from "../../Img/Icons/flowbite.png";
import express from "../../Img/Icons/express.png";
import node from "../../Img/Icons/node.png";
import nextjs from "../../Img/Icons/Next.js.png";
import tanstack from "../../Img/Icons/react-query-icon_.png";
import shadcn from "../../Img/Icons/shadcn-ui.png";

const projectsData = [
  {
    id: "2024-01",
    type: "Coffee Shop Website",
    name: "Smithee Coffee",
    role: "Front End",
    img: smithee,
    tools: [html, css, js, material],
    description:
      "Smithee Coffee is my first web development project, created to showcase coffee shop products. The main goal of this website was to enhance my skills in front-end development. ",
    challenges:
      "Initially, I faced challenges in making the website responsive, but I used MaterializeCSS to simplify the process and ensure a smooth, responsive design across devices. This project allowed me to strengthen my understanding of website structure, styling, and responsiveness.",
    link: "https://smithee-coffee.netlify.app/",
    github: "/Not-available",
  },
  // {
  //   id: "2024-02",
  //   type: "Image Sharing Website",
  //   name: "Photo G!",
  //   role: "Full Stack",
  //   img: photo,
  //   tools: [html, css, js, bootstrap, php, sql],
  //   description:
  //     "Photo G! is an image sharing website that allows users to upload, view, and share images. It is built with React.js for the front-end, and Express and Node.js for the back-end, MongoDB is used for data storage.",
  //   challenges:
  //     "One challenge I faced was implementing authentication and handling API calls, but by using Postman to test and verify APIs, the development process became smoother. This project improved my skills in full-stack development, API integration, and user authentication.",
  //   link: "http://photo-g.infinityfreeapp.com/",
  //   github: "/Not-available",
  // },
  {
    id: "2024-03",
    type: "Cooking Book Website",
    name: "Tastehub",
    role: "Front End",
    img: tastehub,
    tools: [react, tailwind],
    description:
      "TasteHub is a recipe book website where users can search for a variety of recipes, including lunch, desserts, and drinks. Developed using React.js for dynamic rendering and TailwindCSS for responsive design, the website manages recipe data stored in JSON files.",
    challenges:
      "One challenge I encountered was the slow loading of images and their unappealing display during loading. To address this, I implemented skeleton screens and lazy loading, which optimized image loading and improved user experience. This project helped me refine my skills in performance optimization and front-end development.",
    link: "https://tastehub-01.netlify.app",
    github: "https://github.com/Juzpher/My-TasteHub.git",
  },
  {
    id: "2024-04",
    type: "Real estate website",
    name: "Julie Hansen Services",
    role: "Front End",
    img: julie,
    tools: [react, tailwind, flowbite],
    description:
      "Julie Hansen Services is a real estate services website I was tasked with redesigning based on a reference website. Using React.js with Vite as the framework, along with TailwindCSS and the Flowbite UI library, I focused on creating a visually appealing and responsive site that effectively showcases properties and services.",
    challenges:
      "The goal was to improve the overall user experience while highlighting available houses and services in an organized and engaging manner.",
    link: "https://services-julie-hansen.netlify.app/",
    github: "/Not-available",
  },
  {
    id: "2024-05",
    type: "Todo List Website",
    name: "Taskflow",
    role: "Full Stack | MERN",
    img: taskflow,
    tools: [react, tailwind, express, node, mongo],
    description:
      "The To-Do List Workflow is a task management app designed to help users organize and track their daily tasks. Built with Vite for development speed, React.js for the front-end, and Express and Node.js for the back-end, MongoDB is used for data storage.",
    challenges:
      "One challenge I faced was implementing authentication and handling API calls, but by using Postman to test and verify APIs, the development process became smoother. This project improved my skills in full-stack development, API integration, and user authentication.",
    link: "https://my-todo-app-frontend.onrender.com/",
    github: "https://github.com/Juzpher/My-Todo-App.git",
  },
  {
    id: "2024-06",
    type: "Personal Portfolio Website",
    name: "PHR.",
    role: "Front End",
    img: portfolio,
    tools: [react, tailwind],
    description:
      "This is my first personal portfolio, designed to showcase my skills as a front-end developer. Built using React.js with Vite for fast development and TailwindCSS for modern styling, this project was initially challenging due to a lack of design ideas. However, after gathering inspiration from design communities, I was able to complete the portfolio and present my work effectively. This project was a significant step in my journey as a developer, highlighting my abilities and growth in front-end design.",
    challenges: "",
    link: "https://juspher-vergara-portfolio.netlify.app",
    github: "https://github.com/Juzpher/juspher-portfolio.git",
  },
  {
    id: "2024-07",
    type: "Budget Tracker Website",
    name: "Finora",
    role: "Fullstack",
    img: finora,
    tools: [nextjs, shadcn, tanstack, mongo],
    description:
      "This is a budget tracker website that allows users to track their income and expenses. It is built with Next.js, Shadcn UI, and Tanstack Query.",
    challenges: "",
    link: "https://budget-tracker-54kh.onrender.com/",
    github: "https://github.com/Juzpher/Budget-Tracker.git",
  },
];

export default projectsData;
