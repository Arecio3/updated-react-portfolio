import React from "react";
import "./team.scss";
import { Progress } from "reactstrap";
import team1 from './team.png'

const Team = () => {
  return (
    <div className="team" id="team">
      <div className="left">
        <h1>Team Generator</h1>
        <h5 className="inProgress">In Progress</h5>
        <h3>Description</h3>
        <p>The Team Generator is the 10<sup>th</sup> homework: I was to build a Node.js command-line application that asks the user questions using inquirer npm package, about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. I'll need to also write a unit test using jest for every part of your code and ensure that it passes each test. Also I do plan on adding more to the UI UX right now since we are using inquirer the questions are being asked through terminal.</p>
        <h3>Under the Hood</h3>
        <div>
          <Progress className="progress" color="warning" value={75}>
            JavaScript
          </Progress>
          <Progress color="" value={5}>
            CSS
          </Progress>
          <Progress color="danger" value={24}>
            HTML
          </Progress>
        </div>
        <div className="buttonContainer">
          <a
            href="https://github.com/Arecio3/team-generator"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Repo
          </a>
          <a
            href="https://arecio3.github.io/team-generator/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Site
          </a>
        </div>
      </div>
      <div className="right">
          <img src={team1} alt="" />
      </div>
    </div>
  );
};

export default Team;
