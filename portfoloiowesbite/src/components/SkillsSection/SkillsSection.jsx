import React from "react";
import "./Skillssection.css";
import { FcGlobe } from "react-icons/fc";
import { SiCss3, SiJavascript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import Cards from "../Cards/Cards";

const SkillsSection = () => {
  const skillsData = [
    {
      icon: <FcGlobe className="icons" />,
      title: "HTML5",
      description:
        "HTML5 is used for the structure of the web. HTML5 is used for the structure of the web. HTML5 is used for the structure of the web.",
    },
    {
      icon: <SiCss3 className="icons" />,
      title: "CSS3",
      description: "CSS3 is used for the Styling of the web.",
    },
    {
      icon: <SiJavascript className="icons" />,
      title: "JavaScript",
      description: "JavaScript is used for the functionality of the web.",
    },
    {
      icon: <RiReactjsLine className="icons" />,
      title: "ReactJS ",
      description: "ReactJS is used for the making interactive UI of the web.",
    },
    {
      icon: <FcGlobe className="icons" />,
      title: "HTML5",
      description: "HTML5 is used for the structure of the web.",
    },
    {
      icon: <FcGlobe className="icons" />,
      title: "HTML5",
      description: "HTML5 is used for the structure of the web.",
    },
  ];
  return (
    <div className="skillsection">
      <h1 className="skillsection-heading">Skills Section</h1>

      <div className="cards-container">
        {skillsData.map((i, index) => (
          <Cards icon={i.icon} description={i.description} title={i.title} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
