import React from "react";
import { Box } from "@mui/system";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import womenEmpowerment from "../../../assets/womenEmpowerment.svg?react";
import "./horizon-women-future.styles.css";

const HorizonWomenFuture = () => {
  return (
    <Box sx={{ backgroundColor: "white", paddingTop: "20px" }}>
      <section className="future-hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* left side */}
          <div className="flexColStart hero-left">
            <div className="future-hero-title">
              <div className="orange-circle" />
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "ease-in",
                }}
              >
                Future <br />
                Aim
                <br />
              </motion.h1>
            </div>
            <div className="flexColStart secondaryText flexhero-des">
              <span className="future-description-text">
                Our aim at Horizon Women's Department is to empower and equip
                <br />
                women at BVCOE for success in academia and beyond. We envision
                <br />
                achieving this by expanding mentorship programs, hosting
                skill-building
                <br />
                workshops, and fostering a collaborative environment that
                promotes inclusivity.
                <br />
                Our goal is to contribute to a future where every woman
                <br />
                not only breaks barriers but excels as a confident and
                <br />
                influential leader. Through strategic initiatives and advocacy.
                <br />
              </span>
            </div>
          </div>

          {/* right side */}
          <div className="flexCenter hero-right">
            <motion.div
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 3,
                type: "ease-in",
                delay: 1,
              }}
              className="future-image-container"
            >
              <img src="../../../assets/womenFuture.png" alt="women" />
            </motion.div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default HorizonWomenFuture;
