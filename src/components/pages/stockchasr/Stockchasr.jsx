import React from "react";
import stock from "./StockChasr.gif";
import { Progress } from "reactstrap";
import "./stockchasr.scss";

const StockChasr = () => {
  return (
    <div className="stock" id="stock">
      <div className="left">
        <h1>StockChasr</h1>
       
        <h3>Description</h3>
        <p>
          This is the 3<sup>rd</sup> Project assigned to me and 2 of my very
          good friends Adam Alcantara and Patrick Morre. StockChasr was not my
          own idea but Adam's and the idea stemed from, him wishing he had the
          ability to share his portfolio of shares to his grandfather or better
          yet anyone he pleases so we wanted to turn that idea into a full
          fledged full stack application with authentication, utilizing 2 APIs
          for stock data, and all basic CRUD actions such as Delete a stock from
          the watchlist, Add it to your watchlist, Add a comment to the comment
          section. We still have a lot to work on with the social media aspect
          of it which will be coming soon!
        </p>
        <h3>Contributors</h3>
        <ul className="contributors">
          <a
            href="https://github.com/adamalcantara"
            target="_blank"
            rel="noreferrer noopener"
          >
            Adam Alcantara
          </a>
          <a
            href="https://github.com/mooreFL"
            target="_blank"
            rel="noreferrer noopener"
          >
            Patrick Moore
          </a>
        </ul>
        <h3>Under the Hood</h3>
        <div>
          <Progress className="progress" color="warning" value={75}>
            React
          </Progress>
          <Progress color="" value={15}>
            CSS
          </Progress>
          <Progress color="danger" value={10}>
            HTML
          </Progress>
        </div>
        <div className="btnContainer">
          <a
            href="https://github.com/adamalcantara/stockchasr"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Project Repo
          </a>
          <a
            href="http://stockchasr.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn custom-btn"
          >
            Visit StockChasr!
          </a>
        </div>
      </div>
        <div className="stockImgContainer">
          <img src={stock} alt="" />
      </div>
    </div>
  );
};

export default StockChasr;
