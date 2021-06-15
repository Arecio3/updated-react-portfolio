import React from "react";
import parthub from "./PartHub.gif";
import "./parthub.scss";
import { Progress } from "reactstrap";

const PartHub = () => {
  return (
    <div className="parthub" id="parthub">
      <div className="phInfo">
        <h1>
          Part<span>hub</span>
        </h1>
        <h5 className="inProgress">Workload</h5>
        <h2>Description</h2>
        <p>
          This was the 2<sup>nd</sup> Project in my journey through the UCF
          Bootcamp, A little story about this application it is written
          with Handlebars ORM
          and the plan is to rewrite it in React before June 30<sup>th</sup>.
          This is a Computer Parts  application that works like a hub for
          people who want to look into building a PC with the data we
          provide for each part like CPU, GPU, RAM, etc we plan on seeing 
          if we can pull more data also for accessories so far we are getting
          back benchmark, part number, compoany, and how many get bought,
          we plan on seeing if we can get  prices as well the application
          still needs a lot of work before  it is production ready to say
          the least.
        </p>
        <h3>Contributors</h3>
        <ul className="contributors">
          <a
            href="https://github.com/nickverneck"
            target="_blank"
            rel="noreferrer noopener"
          >
            Nick Verneck
          </a>
          <a
            href="https://github.com/alexoneill561"
            target="_blank"
            rel="noreferrer noopener"
          >
            Alex O' Niel
          </a>
        </ul>
        <h3>Under The Hood</h3>
        <div>
          <Progress className="progress" color="warning" value={75}>
            React
          </Progress>
          <Progress color="" value={15}>
            CSS
          </Progress>
          <Progress color="danger" value={10}>
            HTML
          </Progress>
        </div>
        <div className="buttonContainer">
        <a
          href="https://github.com/Arecio3/PartHub"
          target="_blank"
          rel="noreferrer noopener"
          className="btn custom-btn ph1Btn"
        >
          Project Repo
        </a>
        <a
          href="https://parthub.herokuapp.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="btn custom-btn phBtn"
        >
          Visit Parthub!
        </a>
      </div>
      </div>
      
      <div className="imgContainer">
        <img className="partImg" src={parthub} alt="" />
      </div>
    </div>
  );
};

export default PartHub;
