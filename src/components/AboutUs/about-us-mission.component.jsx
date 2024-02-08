import React from "react";
import { Box } from "@mui/system";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import "./about-us-mission.styles.css";

const AboutUsMission = () => {
  return (
    <Box sx={{ backgroundColor: "white", color: "black", paddingTop: "20px" }}>
      <section className="mission-wrapper">
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
              className="mission-image-container"
            >
              <img src="../../assets/mission.png" alt="mission" />
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
                Mission
              </motion.h1>
            </div>
            <div className="flexColEnd secondaryText flexhero-des">
              <div className="mission-text">
                Horizon BVP is dedicated to cultivating the next generation of
                <br />
                leaders and changemakers through immersive Model United Nations
                <br />
                (MUN) experiences, engaging debates and impactful initiatives.
                <br />
                Our mission is to provide a platform for students to develop
                <br />
                essential skills such as critical thinking, public speaking, and
                <br />
                cultural understanding, while fostering a sense of community and
                <br />
                mutual respect. By empowering individuals to engage in
                <br />
                meaningful dialogue and address pressing global issues, we
                <br />
                strive to cultivate a culture of empathy, cooperation, and
                <br />
                social responsibility within our society and beyond.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default AboutUsMission;
