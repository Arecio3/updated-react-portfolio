import React from "react";
import { Progress } from "reactstrap";
import "./scheduler.scss";
import scheduler1 from './scheduler1.png';
import scheduler2 from './scheduler2.png';

const Scheduler = () => {
  return (
    <div className="scheduler" id="scheduler">
      <div className="left">
        <h1>Work Day Scheduler</h1>
        <h5 className="inProgress">In Progress</h5>
        <h3>Description</h3>
        <p>
          This is the 3<sup>rd</sup> homework assigned to me, the criteria was
          to create a front-end application that could be <br />used as a scheduler
          for someone who's work schedule would be 9-5 each hour that has passed
          is represented <br />in <span id="beige">beige</span> current hour is in
          <span id="red">red</span>and future hours is in
          <span id="blue">blue</span> I used Moment.js to keep track of the time
          and with the <br />help of local storage the user is able to type into each
          slot and save it.
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
            href="https://github.com/Arecio3/calendar-website"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Repo
          </a>
          <a
            href="https://arecio3.github.io/calendar-website/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Site
          </a>
        </div>
      </div>
      <div className="right">
      <img src={scheduler1}alt="" />
      <img src={scheduler2} alt="" />
      </div>
    </div>
  );
};

export default Scheduler;
