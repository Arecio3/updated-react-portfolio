import React, { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import arrow from "../intro/down.png";
import { projects, homeworks, personal } from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("projects");
  const [data, setData] = useState([]);

  const portfolioFilter = [
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "homeworks",
      title: "Homeworks",
    },
    {
      id: "personal",
      title: "Personal",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "projects":
        setData(projects);
        break;
      case "personal":
        setData(personal);
        break;
      case "homeworks":
        setData(homeworks);
        break;
      default:
        setData(projects);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      {data === projects ? (
        <h1>Projects</h1>
      ) : data === homeworks ? (
        <h1>Homeworks</h1>
      ) : data === personal ? (
        <h1>Personal</h1>
      ) : null}
      <ul>
        {portfolioFilter.map((item, i) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={i}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, i) => (
          <a href={d.link} key={i}>
            <div className="item">
            <img src={d.img} className="pic1" alt='project screenshot'/>
            <h3>{d.title}</h3>
          </div>
          </a>
        ))}
      </div>
      <a className='portfolioBtn' href="#work">
        <img className='arrow' src={arrow} alt="down arrow" />
      </a>
    </div>
  );
};

export default Portfolio;
