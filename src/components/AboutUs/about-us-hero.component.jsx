import React from "react";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import aboutUsHero from "../../assets/aboutUsTeam.png?react";
import "./about-us-hero.styles.css";

const AboutUsHero = () => {
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
                  About <br />
                  Horizon
                  <br /> BVP
                </motion.h1>
              </div>
            </Fade>
            <Fade
              direction="up"
              className="flexColStart secondaryText flexhero-des"
            >
              <span className="hero-description-text">
                Horizon-BVP stands as the vibrant debating society of BVCOE,
                with a dedicated mission to cultivate a rich culture of debating
                and world press activities. More than just a society, we are an
                experience-sharing platform where the camaraderie among seasoned
                debaters leads to the development of aspiring speakers. Our
                focus goes beyond competition, emphasizing collaborative growth
                through engaging events, workshops, and mentorship programs. At
                Horizon-BVP, we believe in nurturing not just debating skills
                but also fostering effective communication, critical thinking,
                and global awareness among our members.
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
                <img src={aboutUsHero} alt="About Us" />
              </motion.div>
            </div>
          </Fade>
        </div>
      </section>
    </Box>
  );
};

export default AboutUsHero;
