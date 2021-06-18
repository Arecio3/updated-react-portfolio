import React from "react";
import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#work">Work </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a
            href="https://docdro.id/MdYG9oY"
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
