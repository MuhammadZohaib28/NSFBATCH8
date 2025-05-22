import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import picture from '../../assets/mainpicture.png'
import './Herosection.css'

const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="herosection-leftsection">
        <h1 className="user-name">Junior Frontend Developer</h1>

        <div className="position-name">
          <h1 >Muhammad Zohaib</h1>
        </div>

        <p className="intro-line">A passionate frontend developer based in Karachi, Pakistan. With the experience of creating interactive UIs. Dealing with ReactJS and Customs Websites.</p>

        <div className="icon-container">
          <FaGithub className="icons"/>
          <FaLinkedin className="icons"/>
          <FaSquareUpwork className="icons"/>
        </div>
      </div>




      <div className="herosection-rightsection">
        <img src={picture}/>
      </div>
    </div>
  );
};

export default HeroSection;
