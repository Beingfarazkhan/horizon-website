import React from "react";
import { Box } from "@mui/system";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import womenVision from "../../../assets/womenVision.png?react";
import "./horizon-women-vision.styles.css";

const HorizonWomenVision = () => {
  return (
    <Box sx={{ backgroundColor: "white", color: "black", paddingTop: "20px" }}>
      <section className="vision-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* left side */}
          <div className="flexCenter hero-left">
            <motion.div
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
              className="vision-image-container"
            >
              <img src={womenVision} alt="women" />
            </motion.div>
          </div>
          {/* right side */}
          <div className="flexColEnd hero-left">
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
                Our <br />
                Vision
              </motion.h1>
            </div>
            <div className="flexColEnd secondaryText flexhero-des">
              <div className="vision-text">
                At Horizon Women's Department, we envision a future where every
                woman at BVCOE stands tall, empowered, and equipped with the
                tools to navigate and conquer the challenges of our rapidly
                evolving world. Our vision is to cultivate a supportive and
                inclusive community that fosters the growth and success of
                women, both academically and personally. We aspire to be a
                driving force for positive change by promoting gender equality,
                breaking down barriers, and inspiring women to embrace
                leadership roles aim to inspire leadership, promote gender
                equality, and create a supportive network for all members.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default HorizonWomenVision;
