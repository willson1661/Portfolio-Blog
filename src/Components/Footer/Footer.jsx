import "./Footer.css"
import {AiOutlineMail,AiOutlineMobile,AiOutlineUpCircle,AiOutlineHome  } from "react-icons/ai";
import Mypdf from '../Footer/Willsonraj_manda_resume.pdf';  
const Footer = ()=>{
    return(
        <div className="Footer" id="contact" >
            <div className="Footer_main">
<div className="reg1">I'd love to hear from you.</div>
<div className="contact1">
<h3><AiOutlineMail /> </h3>
<h3><AiOutlineMobile /> </h3>
<h3><AiOutlineHome /> </h3>
<a href={Mypdf} ><button className="resumebtn1">Download Resume</button></a>


</div>
</div>
        </div>
    );
}

export default Footer;
