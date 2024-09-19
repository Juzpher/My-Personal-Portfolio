import smithee from "../../Img/Preview/smithee.png";
import photo from "../../Img/Preview/photo.png";
import portfolio from "../../Img/Preview/portfolio.png";
import taskflow from "../../Img/Preview/taskflow.png";
import tastehub from "../../Img/Preview/tastehub.png";
import julie from "../../Img/Preview/julie.png";

const projectsData = [
  {
    id: "2024-01",
    type: "Coffee Shop Website",
    name: "Smithee Coffee",
    role: "Front End",
    img: smithee,
    tools: ["Html", "CSS", "JavaScript", "Materialize Css"],
    description:
      "Smithee Coffee is my first web development project, created to showcase coffee shop products. The main goal of this website was to enhance my skills in front-end development. ",
    challenges:
      "Initially, I faced challenges in making the website responsive, but I used MaterializeCSS to simplify the process and ensure a smooth, responsive design across devices. This project allowed me to strengthen my understanding of website structure, styling, and responsiveness.",
    link: "https://smithee-coffee.netlify.app/",
    github: "/",
  },
  {
    id: "2024-02",
    type: "Image Sharing Website",
    name: "Photo G!",
    role: "Full Stack",
    img: photo,
    tools: ["Html", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    description:
      "Photo G! is an image sharing website that allows users to upload, view, and share images. It is built with React.js for the front-end, and Express and Node.js for the back-end, MongoDB is used for data storage.",
    challenges:
      "One challenge I faced was implementing authentication and handling API calls, but by using Postman to test and verify APIs, the development process became smoother. This project improved my skills in full-stack development, API integration, and user authentication.",
    link: "http://photo-g.infinityfreeapp.com/",
    github: "/",
  },
  {
    id: "2024-06",
    type: "Portfolio Website",
    name: "Portfolio",
    role: "Front End",
    img: portfolio,
    tools: ["React.js", "Tailwind Css"],
    description:
      "My portfolio website is a showcase of my skills and projects. It is built with React.js for the front-end, and Express and Node.js for the back-end, MongoDB is used for data storage.",
    challenges:
      "One challenge I faced was implementing authentication and handling API calls, but by using Postman to test and verify APIs, the development process became smoother. This project improved my skills in full-stack development, API integration, and user authentication.",
    link: "https://portfolio-website-by-surya.netlify.app/",
    github: "/",
  },
];

export default projectsData;
