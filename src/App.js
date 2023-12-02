
import './App.css';
import React from "react";
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import About from "./Components/About/About"
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import Awards from "./Components/Awards & Interests/Awards"
import Footer from './Components/Footer/Footer'
import ScrollButton from "./Components/ScrollButton"
const App=()=> {




  return (
    <div className="App">
<ScrollButton/>
     <Header />
     <Main/>
   <About/>
   <Education/>
   <Skills/>
   <Projects/>
   <Awards/>
   <Footer/>
    </div>
  );
}

export default App;
