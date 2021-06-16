import React from "react";
import "./notes.scss";
import { Progress } from "reactstrap";
import notes1 from "./notes1.png";
import notes2 from "./notes2.png";
import notes3 from "./notes3.png";

const Notes = () => {
  return (
    <div className="notes" id="notes">
      <div className="left">
        <h1>Note Taker</h1>
        <h5 className="inProgress">In Progress</h5>
        <h3>Description</h3>
        <p>Note Taker was the 11<sup>th</sup> homework assignment: The application already came with a front-end and my job was to build the backend connect it to the front end and use Express.js to save and retrieve notes from a JSON file. I do plan on change the UI and add functionality to edit notes.</p>
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
            href="https://github.com/Arecio3/note-taker"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Repo
          </a>
          <a
            href="https://note-taker-arecio3.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Site
          </a>
        </div>
      </div>
      <div className="right">
        <img src={notes1} alt="" />
        <img src={notes2} alt="" />
        <img src={notes3} alt="" />
      </div>
    </div>
  );
};

export default Notes;
