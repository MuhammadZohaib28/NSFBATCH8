import React from "react";
import "./Projects.css";
import ProjectCard from "../Cards/ProjectCard";
import projectImage1 from "../../assets/project1.png";

const Projects = () => {
  const projectData = [
    {
      image: projectImage1,
      title: "Portfolio Website",
      skills: ["HTML5", "CSS3", "JavaScript", "ReactJS"],

      description:
        "This is my first project using ReactJS, my own personal portfolio website",
      link: "https://muhammadzuhaib.vercel.app",
    },
    {
      image: projectImage1,
      title: "Ecommerce Platform",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "ReactJS",
        "LocalStorage",
        "TailwindCSS",
      ],
      description:
        "This is my second project using ReactJS, my own personal ecommerce website",
      link: "https://muhammadzuhaib.vercel.app",
    },
  ];

  return (
    <div className="projects">
      <h1 className="project-heading">Projects</h1>

      <div className="cards-container">
        {projectData.map((i, index) => (
          <ProjectCard
            image={i.image}
            title={i.title}
            skills={i.skills.map((i) => i)}
            description={i.description}
            link={i.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
