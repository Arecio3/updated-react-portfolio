import React from "react";
import "./budget.scss";
import { Progress } from "reactstrap";
import budget1 from "./budget1.png";
import budget2 from "./budget2.png";

const Budget = () => {
  return (
    <div className="budget" id="budget">
      <div className="left">
        <h1>Budget Tracker</h1>
        <h5 className="inProgress">In Progress</h5>
        <h3>Description</h3>
        <p>
          Budget Tracker was the 18<sup>th</sup> homework assigned: I was to add
          offline
           functionality so the user is able to track their withdrawals
          and deposits
          with or without a data/internet connection so that their
          account balance
           is accurate while traveling. This was able to be achieved with
          the help of incorporating indexedDB
        </p>
        <h3>Under the Hood</h3>
        <div>
          <Progress className="progress" color="warning" value={75}>
            JavaScript
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
            href="https://github.com/Arecio3/budget-tracker"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Repo
          </a>
          <a
            href="https://peaceful-dusk-61305.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Site
          </a>
        </div>
      </div>
      <div className="right">
        <img src={budget1} alt="" />
        <img src={budget2} alt="" />
      </div>
    </div>
  );
};

export default Budget;
