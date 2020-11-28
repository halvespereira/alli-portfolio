import React from "react";
import { LoremIpsum } from "lorem-ipsum";

const About = () => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
  return (
    <div className="__About">
      <div className="__aboutTop">
        <h3>About</h3>
      </div>
      <div className="__aboutCollage">
        <h4>{lorem.generateParagraphs(1)}</h4>
        <div className="__aboutCollage-img"></div>
      </div>
      <a href="#">View resume</a>
    </div>
  );
};

export default About;
