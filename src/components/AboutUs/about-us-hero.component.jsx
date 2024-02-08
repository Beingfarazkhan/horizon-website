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
            <div className="flexColStart secondaryText flexhero-des">
              <span className="description-text">
                Horizon-BVP stands as the vibrant debating society of BVCOE,
                <br />
                with a dedicated mission to cultivate a rich culture of debating
                <br />
                and world press activities. More than just a society, we are an
                <br />
                experience-sharing platform where the camaraderie among seasoned
                <br />
                debaters leads to the development of aspiring speakers.
                <br />
                Our focus goes beyond competition, emphasizing collaborative
                growth
                <br />
                through engaging events, workshops, and mentorship programs.
                <br />
                At Horizon-BVP, we believe in nurturing not just debating skills
                <br />
                but also fostering effective communication, critical thinking,
                <br />
                and global awareness among our members.
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
              <img src={aboutUsHero} alt="About Us" />
            </motion.div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default AboutUsHero;
