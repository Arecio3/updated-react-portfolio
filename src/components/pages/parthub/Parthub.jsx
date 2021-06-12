import React from "react";
import { Progress } from "reactstrap";

const PartHub = () => {
  return (
    <div className="parthub" id="parthub">
      <div className="stockImgContainer">
        {/* <img className="stockImg1" alt="" /> */}
      </div>
      <div className="info">
        <h1 className="infoHeader">Parthub</h1>
        <h5 className="inProgress">In Progress</h5>
        <h3 className="description">Description</h3>
        <p className="infoDescription">
          This is the 2<sup>nd</sup> the contributors to this project are:{" "}
          <a
            className="stockCoders"
            href="https://github.com/nickverneck"
            target="_blank"
            rel="noreferrer noopener"
          >
            Nick Verneck{" "}
          </a>
          and
          <a
            className="stockCoders"
            href="https://github.com/alexoneill561"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            Alex O Niel
          </a>
          . StockChasr was not my own idea but Adam's and the idea stemed from,
          him wishing he had the ability to share his portfolio of shares to his
          grandfather or better yet anyone he pleases so we wanted to turn that
          idea into a full fledged full stack application with authentication,
          utilizing 2 APIs for stock data, and all basic CRUD actions such as
          Delete a stock from the watchlist, Add it to your watchlist, Add a
          comment to the comment section. We still have a lot to work on with
          the social media aspect of it which will be coming soon!
        </p>
        <h2 className="techHeader">Under the Hood</h2>
        <Progress multi>
          <Progress bar color="warning" value="84.5">
            React Js
          </Progress>
          <Progress bar color="purple" value="11.1">
            CSS
          </Progress>
          <Progress bar color="danger" value="5">
            HTML
          </Progress>
        </Progress>
        <div className="btnContainer">
          <a
            href="https://github.com/adamalcantara/stockchasr"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn sc1Btn"
          >
            Project Repo
          </a>
          <a
            href="http://stockchasr.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn scBtn"
          >
            Visit StockChasr!
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartHub;
