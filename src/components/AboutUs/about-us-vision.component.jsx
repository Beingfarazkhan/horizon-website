import React from "react";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import aboutUsVision from "../../assets/vision.png?react";
import "./about-us-vision.styles.css";

const AboutUsVision = () => {
  return (
    <Box sx={{ backgroundColor: "black", paddingTop: "20px" }}>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* left side */}
          <div className="flexColStart hero-left">
            <Fade direction="left">
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
            </Fade>
            <Fade
              direction="up"
              className="flexColStart secondaryText flexhero-des"
            >
              <span className="vision-description-text">
                To foster a dynamic community of critical thinkers, global
                citizens, and empathetic eaders who inspire positive change on
                both local and global scales. Horizon BVP envisions a world
                where diplomacy, dialogue, and collaboration prevail, paving the
                way for a brighter and more inclusive future. Through our
                commitment to cultivating cross-cultural understanding,
                promoting empathy, and empowering individuals to address complex
                challenges, we aim to build bridges of cooperation and
                solidarity across borders, cultures, and perspectives,
                ultimately shaping a better world
              </span>
            </Fade>
          </div>

          {/* right side */}
          <Fade direction="right">
            <div className="flexCenter hero-right">
              <motion.div
                initial={{ x: "7rem", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "ease-in",
                }}
                className="about-us-image-container"
              >
                <img src={aboutUsVision} alt="About Us" />
              </motion.div>
            </div>
          </Fade>
        </div>
      </section>
    </Box>
  );
};

export default AboutUsVision;
