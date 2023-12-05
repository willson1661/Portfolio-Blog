import "./Footer.css"

import {AiOutlineMail,AiOutlineMobile,AiOutlineHome  } from "react-icons/ai";
import Mypdf from '../Footer/Resume/Willsonraj_manda_resume.pdf';  
const Footer = ()=>{
    return(
        <div className="Footer" id="contact" >
            <div className="Footer_main">
<div className="reg1">I'd love to hear from you.</div>
<div className="contact1">
<h3 className="rt1"><AiOutlineMail /> officialwillson05@gmail.com</h3>
<h3 className="rt1"><AiOutlineMobile /> 9052830829</h3>
<h3 className="rt1"><AiOutlineHome /> 39-2-26, Badangpet, Hyderabad, Telangana, India.</h3>
<a className="rft1" href={Mypdf} download="/Willsonraj_manda.pdf"><button className="resumebtn1">Download Resume</button></a>


</div>




  

</div>




        </div>
      
     
      
    );
}
 
export default Footer;