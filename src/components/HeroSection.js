import React from "react";
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
      <h1>Track the lastest data on COVID-19</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          View Charts
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
