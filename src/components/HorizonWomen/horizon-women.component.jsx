import React from "react";
import ParticlesBg from "particles-bg";
import "./horizon-women.styles.css";
import HorizonWomenAboutUs from "./AboutUs/horizon-w-about.component";
import HorizonWomenVision from "./Vision/horizon-women-vision";
import HorizonWomenHead from "./Head/horizon-women-head.component";
import TeamCard from "../Team-card/team-card.component";
import HorizonWomenFuture from "./Future/horizon-women-future.component";

const HorizonWomen = () => {
  const colors = ["#fc6c85", "#ff007f", "#ffd1dc", "#ff6ec7"];
  return (
    <>
      <section className="horizon-women-container">
        <div className="h-women-image-container">
          <img src="../../assets/womenDept2Black.png" alt="Horizon Women" />
        </div>
        <ParticlesBg
          type="circle"
          color={colors}
          bg={true}
          num={25}
          config={{ alpha: 0.1 }}
        />
      </section>
      <HorizonWomenAboutUs />
      <HorizonWomenVision />
      <HorizonWomenHead />
      <HorizonWomenFuture />
    </>
  );
};

export default HorizonWomen;
