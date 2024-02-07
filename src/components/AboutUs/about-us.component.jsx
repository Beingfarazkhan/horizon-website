import React from "react";
import "./about-us.styles.css";
import AboutUsHero from "./about-us-hero.component";
import AboutUsMission from "./about-us-mission.component";
import AboutUsVision from "./about-us-vision.component";
import AboutUsFuture from "./about-us-future.component";

const AboutUs = () => {
  return (
    <>
      <AboutUsHero />
      <AboutUsMission />
      <AboutUsVision />
      <AboutUsFuture />
    </>
  );
};

export default AboutUs;
