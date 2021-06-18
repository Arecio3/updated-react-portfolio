import React, { useState } from "react";
import cuba from "../../images/cuba.jpeg";
import homework from '../../images/homework.svg';
import project from '../../images/project.png';
import arrow from "../intro/down.png";
import projectIcon from "../../images/projectSlide.png";
import homeworkIcon from "../../images/homeworkSlide.png";
import "./work.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "https://img.icons8.com/carbon-copy/100/000000/developer.png",
      title: "Story of Arecio",
      description:
        "Here is the crazy story on how me and my family got to America. I came to the America around January 2001 with my Mom through 'The Special Cuban Migration Program' basically we won the lotto.. Pretty insane and clearly completely changed my life one of my dreams after I land a good job developing is to give back to my family for everything they've done for me.",
      image: cuba,
    },
    {
      id: "2",
      icon: homeworkIcon,
      title: "Homeworks",
      description:
        "Through out my three month Bootcamp experience there were numerous homework assignments.",
      image: homework,
    },
    {
      id: "3",
      icon: projectIcon,
      title: "Projects",
      description:
        "Through out my three month Bootcamp there were 3 Projects that we needed to work on with other classmates.",
      image: project,
    },
  ];

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="work" id="work">
      <header>
        {" "}
        <h1 className="workHeader">About Me</h1>
      </header>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)`}}
      >
        {data.map((d, i) => (
          <div className="workContainer" key={i}>
            <div className="item" >
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.image} alt=""/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={arrow}
        className="arrow left"
        onClick={() => handleClick("left")}
        alt='left arrow'
      ></img>
      <img
        src={arrow}
        className="arrow right"
        onClick={() => handleClick()}
        alt='right arrow'
      ></img>
      <a className='workBtn' href="#contact">
        <img className='arrowDown' src={arrow} alt="" />
      </a>
    </div>
  );
}
