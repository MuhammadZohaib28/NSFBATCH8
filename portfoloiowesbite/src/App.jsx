import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutMe from "./components/Aboutme/AboutMe";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
