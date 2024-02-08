import React from "react";
import { Box } from "@mui/system";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import aboutUsMission from "../../assets/mission.png?react";
import "./about-us-mission.styles.css";

const AboutUsMission = () => {
  return (
    <Box sx={{ backgroundColor: "white", color: "black", paddingTop: "20px" }}>
      <section className="mission-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* left side */}
          <Fade direction="left">
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
                <img src={aboutUsMission} alt="mission" />
              </motion.div>
            </div>
          </Fade>
          {/* right side */}
          <div className="flexColEnd hero-left">
            <Fade direction="right">
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
            </Fade>
            <Fade
              direction="up"
              className="flexColEnd secondaryText flexhero-des"
            >
              <div className="mission-text">
                Horizon BVP is dedicated to cultivating the next generation of
                leaders and changemakers through immersive Model United Nations
                (MUN) experiences, engaging debates and impactful initiatives.
                Our mission is to provide a platform for students to develop
                essential skills such as critical thinking, public speaking, and
                cultural understanding, while fostering a sense of community and
                mutual respect. By empowering individuals to engage in
                meaningful dialogue and address pressing global issues, we
                strive to cultivate a culture of empathy, cooperation, and
                social responsibility within our society and beyond.
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default AboutUsMission;
