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
          Bootcamp, <br />A little story about this application it is written
          with Handlebars ORM <br />
          and the plan is to rewrite it in React before June 30<sup>th</sup>.
          This is a Computer Parts <br /> application that works like a hub for
          people who want to look into building a PC <br /> with the data we
          provide for each part like CPU, GPU, RAM, etc we plan on seeing <br />{" "}
          if we can pull more data also for accessories so far we are getting
          back benchmark, <br /> part number, compoany, and how many get bought,
          we plan on seeing if we can get <br /> prices as well the application
          still needs a lot of work before <br /> it is production ready to say
          the least.{" "}
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
        <div className="progressBar">
          <Progress multi>
            <Progress bar color="warning" value="90">
              JavaScript
            </Progress>
            <Progress bar color="purple" value="4">
              HB
            </Progress>
            <Progress bar color="info" value="7">
              CSS
            </Progress>
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
