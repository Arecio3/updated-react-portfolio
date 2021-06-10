import React from "react";
import Hero from "./selfie.png";
import intro from "./intro.jpeg";
import "./intro.scss";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Hero} className="hero" alt="Work area"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Arecio Canton</h1>
          <h3>Full Stack Javascript Developer</h3>
        </div>
        <div className='imgContainer2'>
          <a href="#portfolio">
            <img src={intro} className="imgContainer"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
