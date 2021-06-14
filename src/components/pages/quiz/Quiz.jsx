import React from "react";
import { Progress } from "reactstrap";
import quiz1 from './quiz1.png'
import quiz2 from './quiz2.png'
import quiz3 from './quiz3.png'
import "./quiz.scss";

const Quiz = () => {
  return (
    <div className="quiz" id="quiz">
      <div className="left">
        <h1>Quiz Game</h1>
        <h3>Description</h3>
        <p>
          Space Quiz was my 2<sup>nd</sup> homework from the bootcamp. <br />
          The assignment was to create a timed quiz with JavaScript,
          <br /> rules are that if user picks the wrong answer then then the{" "}
          <br /> time gets decremented by 10 seconds and at the end of
          <br /> the quiz the user can enter in their initials and save their{" "}
          <br /> high score with local storage as well as view that <br />{" "}
          highscore in the Highscores page.
        </p>
        <h3>Under the Hood</h3>
        <div>
          <Progress className="progress" color="warning" value={75}>
            JavaScript
          </Progress>
          <Progress color="" value={15}>
            CSS
          </Progress>
          <Progress color="danger" value={7}>
            HTML
          </Progress>
        </div>
        <div className="buttonContainer">
          <a
            href="https://github.com/Arecio3/quiz.game"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Project Repo
          </a>
          <a
            href="https://arecio3.github.io/quiz.game/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Site!
          </a>
        </div>
      </div>
      <div className="right">
          <img src={quiz1} alt="" />
          <img src={quiz2}alt="" />
          <img src={quiz3} alt="" />
      </div>
    </div>
  );
};

export default Quiz;
