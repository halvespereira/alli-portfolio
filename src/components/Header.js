import React from "react";
import logo from "../images/logo.svg";
import "../App.scss";

const Header = () => {
  return (
    <div className="__Header">
      <div className="__headerLeft">
        <img src={logo} alt="logo" />
      </div>
      <div className="__headerRight">
        <nav>
          <a href="#">home</a>
          <a href="#">design</a>
          <a href="#">about</a>
          <a href="#">blog</a>
          <a href="#">contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
