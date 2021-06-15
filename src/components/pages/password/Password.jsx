import React from "react";
import "./password.scss";
import pass1 from './password1.png'
import pass2 from './password2.png'
import { Progress } from "reactstrap";

const Password = () => {
  return (
    <div className="password" id="password">
      <div className="left">
        <h1>Password Generator</h1>
        <h3>Description</h3>
        <p>
          This is the 1<sup>st</sup> homework assignment from the UCF Bootcamp.
           Criteria was to make an application that alerts the user with a
          series  of questions about the type of password they wanted to
          be randomly  generated such as how many characters, if they want
          caps. lowercase,
           numbers, and special characters. I was able to generate a
          random password with the help of the Math.Random function
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
            href="https://github.com/Arecio3/password-generator"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Project Repo
          </a>
          <a
            href="https://arecio3.github.io/password-generator/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Site!
          </a>
        </div>
      </div>
      <div className="right">
      <img src={pass1}alt="" />
      <img src={pass2} alt="" />
      </div>
    </div>
  );
};

export default Password;
