import React from "react";

import profilepic from "../../../assets/profilepic.jpg";
import "./heroText-style.css";

export const HeroText = () => {
  return (
    <div className="main">
      <h1>Namaste !!!</h1>
      <h2>This is</h2>
      <div className="image">
        <img src={profilepic} alt="profilepic" />
      </div>
    </div>
  );
};
