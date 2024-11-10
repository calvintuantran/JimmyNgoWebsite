import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Smile with Confidence</h1>
      <p>Meet our amazing team</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          About Us
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/Jimmy+Vu+Ngo+Orthodo-ntist/@33.7592295,-117.9498622,17z/data=!3m1!4b1!4m6!3m5!1s0x80dd27001cd9ec45:0x38a8459b56b3d9f1!8m2!3d33.7592251!4d-117.9449913!16s%2Fg%2F11ldm7f4j3?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D",
              "_blank"
            )
          }
        >
          Open Maps <i className="far fa-map" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
