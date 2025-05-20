import { PiSunDimDuotone } from "react-icons/pi";
import "./navbar.css";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [themeButton, setThemeButton] = useState(true);

  const themeChanger = () => {
    setThemeButton(!themeButton);
  };

  const menuItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About Me",
      link: "#aboutme",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <nav>
      <h1>
        NSF <span>Portfolio</span>
      </h1>

      <ul className="navbar-menu">
        {menuItems.map((i, index) => (
          <li key={index}>{i.name}</li>
        ))}
      </ul>

      <button onClick={themeChanger} className="theme-btn">
        {themeButton ? <PiSunDimDuotone /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
