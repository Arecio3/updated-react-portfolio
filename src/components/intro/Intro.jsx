import React, {  useEffect, useRef } from "react";
import Hero from "./selfie.png";
import Down from "./down.png";
import { init } from 'ityped';
import "./intro.scss";

const Intro = () => {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
          showCursor: true,
          cursorChar: '|',
          backDelay: 1500,
          backSpeed: 60,
          strings: ["Hi there, I'm ","Hola, me llamo"],
        });
    }, []);
 
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Hero} className="hero" alt="Work area"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2><span ref={textRef}></span></h2>
          <h1 className='name'>Arecio Canton</h1>
          <h3>Full Stack <br /><span>Javascript</span> Developer </h3>
        </div>
          <a href="#portfolio">
              <img src={Down} alt="" />
          </a>
      </div>
    </div>
  );
};

export default Intro;
