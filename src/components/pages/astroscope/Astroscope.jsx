import React from "react";
import astroscopeGif from "./astroscope.gif";
import { Progress } from "reactstrap";
import "./astroscope.scss";
const Astroscope = () => {
  return (
    <div className="astroscope" id="astroscope">
      <div className="left">
        <h1>astroscope</h1>
        <h3>Description</h3>
        <p>
          Astroscope was my 1<sup>st</sup> Project so as of right now it is not
          a full stack application just a front end one where the user can come
          and checkout their daily horoscope with detailed description seperated
          by individual cards, to get the data we used 2 APIs Aztro was the API
          for getting the zodiac data and if you notice we also include a NASA
          section with NASA's picture of the day which we got using their API
          and a link to their website.
        </p>
        <h3>Contributors</h3>
        <ul className="contributors">
          <a
            href="https://github.com/mascarelloa"
            target="_blank"
            rel="noreferrer noopener"
          >
            Annie Mascarello
          </a>
          <a
            href="https://github.com/Murrmaid4"
            target="_blank"
            rel="noreferrer noopener"
          >
            Brandi Murray
          </a>
          <a
            href="https://github.com/alexoneill561"
            target="_blank"
            rel="noreferrer noopener"
          >
            Alex O' Niel
          </a>
        </ul>
        <h3>Under the Hood</h3>
        <div>
          <Progress className="progress" color="danger" value={60}>
          HTML
          </Progress>
          <Progress color="" value={20}>
          CSS
          </Progress>
          <Progress color="warning" value={10}>
          JS
          </Progress>
        </div>
        <div className="buttonContainer">
          <a
            href="https://github.com/mascarelloa/astroscope"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Project Repo
          </a>
          <a
            href="https://mascarelloa.github.io/astroscope/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Site!
          </a>
        </div>
      </div>
      <div className="right"> 
          <img src={astroscopeGif} alt="" />
      </div>
    </div>
  );
};

export default Astroscope;
