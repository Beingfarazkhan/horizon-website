import React from "react";
import { Box } from "@mui/system";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import aboutUsFuture from "../../assets/futureAim.png?react";
import "./about-us-mission.styles.css";

const AboutUsFuture = () => {
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
                <img src={aboutUsFuture} alt="Future" />
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
                  Future <br />
                  Aim
                </motion.h1>
              </div>
            </Fade>

            <Fade
              direction="up"
              className="flexColEnd secondaryText flexhero-des"
            >
              <div className="mission-text">
                In charting our course forward, Horizon BVP is steadfast in its
                commitment to broadening its influence and impact. Through
                targeted community outreach initiatives, we aim to extend the
                reach of our society by organizing debates, workshops, and
                events in local schools and communities, nurturing the next
                generation of debaters and critical thinkers. Concurrently, our
                participation in intercollegiate debating competitions serves to
                elevate our presence on the national and international stage,
                showcasing the exemplary skills of our members.
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default AboutUsFuture;
