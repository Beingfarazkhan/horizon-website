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
            <div className="flexColStart secondaryText flexhero-des">
              <span className="description-text">
                To foster a dynamic community of critical thinkers, global
                <br />
                citizens, and empathetic eaders who inspire positive change on
                <br />
                both local and global scales. Horizon BVP envisions a world
                <br />
                where diplomacy, dialogue, and collaboration prevail, paving the
                <br />
                way for a brighter and more inclusive future.
                <br />
                Through our commitment to cultivating cross-cultural
                <br />
                understanding, promoting empathy, and empowering individuals to
                <br />
                address complex challenges, we aim to build bridges of
                <br />
                cooperation and solidarity across borders, cultures, and
                <br />
                perspectives, ultimately shaping a better world
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
              className="about-us-image-container"
            >
              <img src={aboutUsVision} alt="About Us" />
            </motion.div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default AboutUsVision;
