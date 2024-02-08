import React from "react";
import { Box } from "@mui/system";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import womenEmpowerment from "../../../assets/womenEmpowerment.png?react";
import "./horizon-w-about.styles.css";

const HorizonWomenAboutUs = () => {
  return (
    <Box sx={{ backgroundColor: "black", paddingTop: "20px" }}>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* left side */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle" />
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "ease-in",
                }}
              >
                About <br />
                Horizon
                <br /> Women
              </motion.h1>
            </div>
            <div className="flexColStart secondaryText flexhero-des">
              <span className="women-description-text">
                Horizon Women's Department is a dedicated and empowering
                community within Horizon BVP that seeks to champion the voices
                and aspirations of women at BVCOE. Committed to fostering an
                inclusive environment, the Women's Department organizes events,
                discussions, and initiatives that address the unique experiences
                and challenges faced by women in today's world. Through engaging
                activities, mentorship programs, and collaborative projects, we
                aim to inspire leadership, promote gender equality, and create a
                supportive network for all members.
              </span>
            </div>
          </div>

          {/* right side */}
          <div className="flexCenter hero-right">
            <motion.div
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
              className="image-container"
            >
              <img src={womenEmpowerment} alt="women" />
            </motion.div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default HorizonWomenAboutUs;
