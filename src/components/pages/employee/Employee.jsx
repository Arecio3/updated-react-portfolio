import React from "react";
import "./employee.scss";
import employee1 from "./employee1.png";
import employee2 from "./employee2.png";
import { Progress } from "reactstrap";

const Employee = () => {
  return (
    <div className='employee' id="employee">
      <div className="left">
        <h1>Employee Directory</h1>
        <h5 className="inProgress">In Progress</h5>
        <h3>Description</h3>
        <p>
          The 19<sup>th</sup> homework assignment also being the first React
          homework assignment: Using the Random User API we wanted to have 50
          random employees to render on load in a table showing their image,
          name, DOB, phone and email. We also wanted to add a function that
          checks what the user is typing to only show the employees matching the
          letters being search, which is shown in the second image
        </p>
        <h3>Under the Hood</h3>
        <div>
          <Progress className="progress" color="warning" value={47}>
            JavaScript
          </Progress>
          <Progress color="" value={10}>
            CSS
          </Progress>
          <Progress color="danger" value={43}>
            HTML
          </Progress>
        </div>
        <div className="buttonContainer">
          <a
            href="https://github.com/Arecio3/employee-directory"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Repo
          </a>
          <a
            href="https://arecio3.github.io/employee-directory/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Site
          </a>
        </div>
      </div>
      <div className="right">
        <img src={employee1} alt="" />
        <img src={employee2} alt="" />
      </div>
    </div>
  );
};

export default Employee;
