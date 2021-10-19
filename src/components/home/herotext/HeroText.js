import React from "react";

import profilepic from "../../../assets/profilepic.jpg";
import "./heroText-style.css";

export const HeroText = () => {
  return (
    <div className="main">
      <div className="text">
        <h1>Namaste !!!</h1>
        
        <h2>Saugat Baral </h2>
        <h2>Software Developer</h2>
      </div>

      <div>
        <img src={profilepic} alt="profilepic" className="image-file" />
      </div>
    </div>
  );
};
