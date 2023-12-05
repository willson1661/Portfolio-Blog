import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../Header/images/Logo.png"
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };


  const handleClick1 = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const handleClick2 = () => {
    document.getElementById("Education").scrollIntoView({ behavior: "smooth" });
  };
  const handleClick3 = () => {
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
  };
  const handleClick4 = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };
  const handleClick5 = () => {
    document.getElementById("awards").scrollIntoView({ behavior: "smooth" });
  };
  const handleClick6 = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
    
 <img className="r1" src={logo}/>
   
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <div className="t_1">
      {setOpen ? (document.body.style.overflow = "auto") : null}
      {open ? (document.body.style.overflow = "hidden") : null}

      </div>
      <div className="total">
      <div className={open ? "overlay active" : "overlay"}></div>
      <ul className={open ? "nav-links active" : "nav-links"}>
     
    <li onClick={handleClick1} >About</li>
    <li onClick={handleClick2} > Education & Experience</li>
    <li  onClick={handleClick3}>Skills & Languages</li>
    <li onClick={handleClick4}>Projects</li>
    <li onClick={handleClick5}>Awards & Interests</li>
    <li onClick={handleClick6}>Contact</li>
    
      </ul>
      
      </div>
    </nav>
  );
};

export default Header;
