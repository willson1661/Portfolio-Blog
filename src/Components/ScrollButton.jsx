import React, { useState } from "react";
import {AiOutlineUpCircle  } from "react-icons/ai";


import styled from "styled-components";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      className="ttt1"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
     <AiOutlineUpCircle />
    </Button>
  );
};

export default ScrollButton;

const Button = styled.div`
position: fixed;
    width: 48px;
    bottom: 48px;
    height: 48px;
    font-size: 3rem;
    z-index: 1;
    right: 29px;
    cursor: pointer;
    color: #27374d;
    float: right;
    background: #fff;
    border-radius: 24px;

`;
