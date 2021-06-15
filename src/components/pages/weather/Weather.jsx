import React from "react";
import "./weather.scss";
import { Progress } from "reactstrap";
import weather1 from "./weather1.png";
import weather2 from "./weather2.png";

const Weather = () => {
  return (
    <div className="weather" id="weather">
      <div className="left">
        <h1>Weather Dashboard</h1>
        <h5 className="inProgress">In Progress</h5>
        <h3>Description</h3>
        <p>
          This is the 4<sup>th</sup> homework where I had to build an
          application where we pull data from a <br />
          weather API based on the city that the user searched we get back a 5
          day forecast with
          <br /> a current weather, temp, windspeed, humidity and a UV Index
          with a dynamic background
          <br /> color to represent the condition, also each city that is
          searched is appended to the page
          <br /> so the user can alternate between past searched cities.
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
            href="https://github.com/Arecio3/weather-dashboard"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Repo
          </a>
          <a
            href="https://arecio3.github.io/weather-dashboard/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit Site
          </a>
        </div>
      </div>
      <div className="right">
        <img src={weather1} alt="" />
        <img src={weather2} alt="" />
      </div>
    </div>
  );
};

export default Weather;
