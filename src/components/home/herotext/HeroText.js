import React from "react";

import profilepic from "../../../assets/profilepic2.jpg";
import namaste from "../../../assets/namaste.png";
import "./heroText-style.css";

export const HeroText = () => {
  return (
    <div className="main">
      <div className="text">
        <div className="namaste">
          <img src={namaste} alt="Namaste" />
          <h1>Namaste</h1>
        </div>

        <div>
          <h2>Saugat Baral </h2>
          <h2>Software Developer</h2>
        </div>
      </div>

      <div>
        <img src={profilepic} alt="profilepic" className="image-file" />
      </div>
    </div>
  );
};
