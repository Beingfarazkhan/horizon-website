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
                Future <br />
                Aim
              </motion.h1>
            </div>
            <div className="flexColEnd secondaryText flexhero-des">
              <div className="mission-text">
                In charting our course forward, Horizon BVP is steadfast in its
                <br />
                commitment to broadening its influence and impact. Through
                <br />
                targeted community outreach initiatives, we aim to extend the
                <br />
                reach of our society by organizing debates, workshops, and
                <br />
                events in local schools and communities, nurturing the next
                <br />
                generation of debaters and critical thinkers. Concurrently, our
                <br />
                participation in intercollegiate debating competitions serves to
                <br />
                elevate our presence on the national and international stage,
                <br />
                showcasing the exemplary skills of our members.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default AboutUsFuture;
