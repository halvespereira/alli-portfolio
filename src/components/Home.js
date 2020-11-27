import React from "react";
import image from "../images/Alli portfolio.jpg";
import Typing from "react-typing-animation";

const Home = () => {
  return (
    <div className="__Home">
      <div className="__homeLeft">
        <Typing>
          <span>UX designer and writer based in the world.</span>
          <Typing.Backspace count={42} />
        </Typing>
        <Typing>
          <Typing.Delay ms={6500} />
          <span>I like to travel.</span>
          <Typing.Backspace count={17} />
        </Typing>
        <Typing>
          <Typing.Delay ms={9000} />
          <span>And eat bananas.</span>
          <Typing.Backspace count={16} />
        </Typing>
        <Typing>
          <Typing.Delay ms={11600} />
          <span>Thank you for checking out my page.</span>
        </Typing>
      </div>

      <div className="__homeRight">
        <img src={image} alt="Alli Pereira" />
      </div>
    </div>
  );
};

export default Home;
