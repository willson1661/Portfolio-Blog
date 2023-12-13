
import React, { useState } from "react";

import Carousel from "react-simply-carousel";
import img1 from "./Images/to_do_app.png"
import img2 from "./Images/calculator.png"
import img3 from "./Images/food_blog.png"
import img4 from "./Images/weather.png"
import img5 from "./Images/food_src.png"
import img6 from "./Images/login_form.png"
import img7 from "./Images/food_cart.png"
import img8 from "./Images/porfolio.png"
import img9 from "./Images/Music_player.png"
import Item from "./Item";
import "./Project.css"


// eslint-disable-next-line
const Projects =()=>{
  const [activeSlide, setActiveSlide] = useState(1);
  return (
    <div className="Projects" id="projects" >
        <p className="pjct1">React Js Projects</p>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "none",
            padding: "49px",
            maxWidth: "1163px;",
            height: "548px",
            position: "relative",
            top: "62px",
            marginleft: "71px"

          },
          

        
        }}
        preventScrollOnSwipe
        swipeTreshold={50}
        activeSlideIndex={activeSlide}
        activeSlideProps={{}}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
          },
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
          },
        }}
        dotsNav={{
          show: false,
        
         
        }}
        itemsToShow={3}
        speed={400}
        centerMode
      >
        
        <Item><p className="pjct2"><a href="https://to-do-app-with-image-upload-firebase-storage.vercel.app/" rel="noopener noreferrer" target="_blank"><div className = "container">
    <div className = "card">
      <div className = "image">
        <img href = "#" src={img1} alt="imga"/>
      </div>
      <div className = "content">
        <h3 className="ref22">To Do App with Image Upload & Firebase Storage </h3>

      </div>
    </div>    
  </div> </a></p></Item>


          <Item> <p className="pjct3"><a href="https://7jw8yy.csb.app/" rel="noopener noreferrer"  target="_blank"><div className = "container">
    <div className = "card">
      <div className = "image">
        <img href = "#" src={img2} alt="imgb"/>
      </div>
      <div className = "content">
      <h3 className="ref22">Calculator</h3>
      </div>
    </div>    
  </div></a></p></Item>


          <Item><p className="pjct4"><a href="https://foodie-website-8niq0dzcl-willson1661s-projects.vercel.app/" rel="noopener noreferrer"  target="_blank"><div className = "container">
    <div className = "card">
      <div className = "image">
        <img href = "#" src={img3} alt="imgc"/>
      </div>
      <div className = "content">
      <h3 className="ref22">Foodie Blog</h3>
      </div>
    </div>    
  </div></a></p></Item>



          <Item> <p className="pjct5"><a href="https://56yzmp.csb.app/" rel="noopener noreferrer" target="_blank"><div className = "container">
    <div className = "card">
      <div className = "image">
        <img href = "#" src={img4} alt="imgd"/>
      </div>
      <div className = "content">
      <h3 className="ref22">Simple Weather App API Using Axios </h3>
      </div>
    </div>    
  </div></a></p></Item>



          <Item><p className="pjct6"><a href="https://3qlvsc.csb.app/" rel="noopener noreferrer" target="_blank"><div className = "container">
    <div className = "card">
      <div className = "image">
        <img href = "#" src={img5} alt="imge"/>
      </div>
      <div className = "content">
      <h3 className="ref22">Food Website Using Fetch API with Search  </h3>
      </div>
    </div>    
  </div></a></p></Item>



          <Item> <p className="pjct7"><a href="https://59g45z.csb.app/Signup" rel="noopener noreferrer"  target="_blank"><div className = "container">
    <div className = "card">
      <div className = "image">
        <img href = "#" src={img6} alt="imgf"/>
      </div>
      <div className = "content">
      <h3 className="ref22">Sign-up & Login-form with Show/Hide Password, Using Routers </h3>
      </div>
    </div>    
  </div></a> </p></Item>



          <Item>  <p className="pjct8"><a href="https://x5t4cf.csb.app/" rel="noopener noreferrer"   target="_blank"><div className = "container">
    <div className = "card">
      <div className = "image">
        <img href = "#" src={img7} alt="imgg"/>
      </div>
      <div className = "content">
      <h3 className="ref22">Food Website with Cart using Routers & Bootstrap</h3>
      </div>
    </div>    
  </div></a></p></Item>

  <Item><p className="pjct9"><a href="https://music-player-9qwyi7taq-willson1661s-projects.vercel.app/" rel="noopener noreferrer"   target="_blank"><div className = "container">
    <div className = "card">
      <div className = "image">
        <img href = "#" src={img9} alt="imgh"/>
      </div>
      <div className = "content">
      <h3 className="ref22">Music Player With Playlist</h3>
        
      </div>
    </div>    
  </div></a></p></Item>


          <Item><p className="pjct9"><a href="https://portfolio-blog-two-orpin.vercel.app/" rel="noopener noreferrer"   target="_blank"><div className = "container">
    <div className = "card">
      <div className = "image">
        <img href = "#" src={img8} alt="imgh"/>
      </div>
      <div className = "content">
      <h3 className="ref22">Simple Portfolio Blog</h3>
        
      </div>
    </div>    
  </div></a></p></Item>

      </Carousel>
    </div>
  );
}

export default Projects;
