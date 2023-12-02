import Logo from "../Header/Logo.png"
import "./Header.css"
import React from "react";

const Header =()=>{


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

    return(
<div className="Header">


<div className="navbar">
<div className="Logo">
    <img src={Logo} />
</div>
<ul className="nav">

    <li onClick={handleClick1} >About</li>
    <li onClick={handleClick2} > Education & Experience</li>
    <li  onClick={handleClick3}>Skills & Languages</li>
    <li onClick={handleClick4}>Projects</li>
    <li onClick={handleClick5}>Awards & Interests</li>
    <li onClick={handleClick6}>Contact</li>
    
</ul>

</div>
</div>
    );
}
export default Header;