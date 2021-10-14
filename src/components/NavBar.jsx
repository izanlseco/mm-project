import React, { useState } from "react";

import Logo from "../images/logo_black.png";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-light has-shadow is-fixed-top"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://minemods.gatsbyjs.io/">
          <img src={Logo} alt="logo" />
        </a>
        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="main-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div
        id="main-menu"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <a className="navbar-item is-size-5" href="/">
            Home
          </a>
        </div>
        <div className="navbar-end">
          <a className="navbar-item is-size-5" href="/sign-up">
            Sign Up
          </a>
          <a className="navbar-item is-size-5" href="/login">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
