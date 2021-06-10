import React from "react";
import "./navbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navBar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            arecio
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 813 385 2938</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>cuba289@gmail.com</span>
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
