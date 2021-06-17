import React from "react";
import "./navbar.scss";
import {Mail} from "@material-ui/icons";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navBar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            arecio
          </a>
          <div className="itemContainer">
            <a href='https://www.linkedin.com/in/arecio-canton-95026a208/' target="_blank"
            rel="noreferrer noopener" className="icon"><LinkedInIcon className="icon"/></a>
          </div>
          <div className="itemContainer">
            <a href='mailto:cuba289@gmail.com' target="_blank"
            rel="noreferrer noopener" className="icon"><Mail className="icon" /></a>
          </div>
          <div className="itemContainer">
            <a href='https://github.com/Arecio3' target="_blank"
            rel="noreferrer noopener" className="icon"><GitHubIcon className="icon" /></a>
          </div>
        </div>
        <div className="right">
          <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
