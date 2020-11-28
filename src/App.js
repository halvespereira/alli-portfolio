import React from "react";
import "./App.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import Design from "./components/Design";
import About from "./components/About";

function App() {
  return (
    <div className="__App">
      <Header />
      <Home />
      <Design />
      <About />
    </div>
  );
}

export default App;
