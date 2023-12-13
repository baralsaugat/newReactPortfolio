import React from "react";

import profilepic from "../../../assets/new.png";
import car from "../../../assets/car.png";
import road from "../../../assets/road.png";
import carsvg from "../../../assets/carsvg.svg";

import "./heroText-style.css";

export const HeroText = () => {
  return (
    <div className="top-section-hero">
      <div className="main-hero">
        <div className="side-text">
          <div>
            {" "}
            <h2>Namaste</h2>
            <p>Thank you, for the visit</p>
            <p style={{ fontWeight:"bold",  color: "#brgba(51, 10, 5, 0.979)" }}>This is Saugat Baral</p>
            <p>and, I am a full stack developer</p>
          </div>
          <div>
            <button>Email me</button>
          </div>
        </div>
        <div className="intro-style">
          <img src={profilepic} alt="profilepic" className="image-file" />

          {/* <div className="intro-text">
            <h4>Saugat Baral </h4>
            <p>Software Developer</p>
          </div> */}
        </div>
      </div>

      {/* <div>
        <img id = "car-image" src={carsvg} alt="carsvg" />
        <img id="car-image" src={car} alt="car" />
        <img id="road-image" src={road} alt="road" />
      </div> */}
    </div>
  );
};
