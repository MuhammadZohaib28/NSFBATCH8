import React from "react";
import './Aboutme.css'
import aboutmeimage from '../../assets/aboutsectionimage.png'

const AboutMe = () => {
  return (
    <div className="aboutme">
      <h1>About Me</h1>

      <div className="aboutme-bottom">
        <div className="aboutme-paragraph">
          <p>
            Hi, I'm <span className="highlighter">Zohaib</span> — a passionate{" "}
            <span className="highlighter">Full-Stack Web Developer</span> with
            over a year of experience building modern, scalable web applications
            using the MERN stack (<span className="highlighter">MongoDB</span>,
            <span className="highlighter">ExpressJs</span>, ReactJS, NodeJS). I
            specialize in creating clean, responsive user interfaces with
            ReactJS and building robust backend systems with Node and Express.
            I’ve developed full-stack platforms including a Kickstarter-style
            crowdfunding app, a photography-event booking portal, and an
            AI-powered video content generator. Alongside development, I’ve
            taught MERN Stack at Nayee Subah Foundation, helping beginners build
            real-world projects and understand core web concepts. I’m currently
            focused on enhancing my ReactJS skills and looking for opportunities
            to contribute to meaningful products—whether freelance,
            collaborative, or full-time.
          </p>
        </div>





        <div className="aboutme-bottom-canvas">
          <img src={aboutmeimage} className="img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
