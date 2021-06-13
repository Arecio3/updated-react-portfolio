import React, { useState } from "react";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import rightBg from "../../images/slide1right.png";
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
      title: "Why I code",
      description:
        " I love being able to create code that makes life easier and more enjoyable.",
      image: rightBg,
    },
    {
      id: "2",
      icon: homeworkIcon,
      title: "Homeworks",
      description:
        "Through out my three month Bootcamp experience there were numerous homework assignments.",
    },
    {
      id: "3",
      icon: projectIcon,
      title: "Projects",
      description:
        "Through out my three month Bootcamp there were 3 Projects that we needed to work on with other classmates.",
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
        <h1 className="workHeader">Work Info</h1>
      </header>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
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
                <img src={rightBg} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={arrow}
        className="arrow left"
        onClick={() => handleClick("left")}
      ></img>
      <img
        src={arrow}
        className="arrow right"
        onClick={() => handleClick()}
      ></img>
      <a className='workBtn' href="#contact">
        <img className='arrowDown' src={arrow} alt="" />
      </a>
    </div>
  );
}
