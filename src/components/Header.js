import React from "react";

import "../App.scss";

const Header = () => {
  return (
    <div className="__Header">
      <div className="__headerLeft">
        <h1>Alli Pereira</h1>
      </div>
      <div className="__headerRight">
        <nav>
          <a href="#">home</a>
          <a href="#">work</a>
          <a href="#">about</a>
          <a href="#">blog</a>
          <a href="#">contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
