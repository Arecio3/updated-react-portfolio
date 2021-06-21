import React from "react";
import "./fitness.scss";
import { Progress } from "reactstrap";
import fit1 from './fitness1.png';
import fit2 from './fitness2.png';
import fit3 from './fitness3.png';
import fit4 from './fitness4.png';

const Fitness = () => {
  return (
    <div className="fitness" id="fitness">
      <div className="left">
        <h1>Fitness Tracker</h1>
        <h5 className="inProgress">In Progress</h5>
        <h3>Description</h3>
        <p>Fitness Tracker is the 17<sup>th</sup>homework: I was given the front end to this application and needed to create a Mongo database with a Mongoose schema and use Express.js to handle routes so when workouts are made and saved they are added to the database and you could keep track of how much total minutes, total sets, reps, and how many exercises performed in total.</p>
        <h3>Under the Hood</h3>
        <div>
          <Progress className="progress" color="warning" value={55}>
            JavaScript
          </Progress>
          <Progress color="" value={24}>
            CSS
          </Progress>
          <Progress color="danger" value={19}>
            HTML
          </Progress>
        </div>
        <div className="buttonContainer">
          <a
            href="https://github.com/Arecio3/fitness-tracker"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Repo
          </a>
          <a
            href="https://fitness-tracker-arecio.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Site
          </a>
        </div>
      </div>
      <div className="right">
        <img src={fit1} alt="" />
        <img src={fit2} alt="" />
        <img src={fit3} alt="" />
        <img src={fit4} alt="" />
      </div>
    </div>
  );
};

export default Fitness;
