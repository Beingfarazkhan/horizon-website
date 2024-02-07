import React, { Fragment } from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";
import { SiGoogleforms } from "react-icons/si";
import { Link } from "@mui/material";

const Contact = () => {
  return (
    <Fragment>
      <div id="contact-us" className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
          {/* left side */}
          <div className="flexColStart c-left">
            <span className="orangeText">Our Contact Us</span>
            <span className="primaryText">Get in Touch with Us</span>
            <span className="secondaryText">
              {" "}
              Your Questions and Feedback Matter! Reach out for quick and
              friendly support, or to explore collaboration opportunities. We're
              here to help{" "}
            </span>

            <div className="flexColStart contactModes">
              {/* first row */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Call</span>
                      <span className="secondaryText">+91 8595760744</span>
                    </div>
                  </div>
                  <Link
                    href="tel:+8595760744"
                    sx={{ textDecoration: "none" }}
                    className="flexCenter button"
                  >
                    Call now
                  </Link>
                </div>

                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <IoLogoWhatsapp size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Chat</span>
                      <span className="secondaryText">Join Support Group</span>
                    </div>
                  </div>
                  <Link
                    href="https://chat.whatsapp.com/LWAEhIUhb689VcLf49guen"
                    target="_blank"
                    sx={{ textDecoration: "none" }}
                    className="flexCenter button"
                  >
                    Chat now
                  </Link>
                </div>
              </div>

              {/* second row */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <IoIosMail size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Email</span>
                      <span className="secondaryText">Support Email</span>
                    </div>
                  </div>
                  <Link
                    href="mailto:horizondebsocbvp@gmail.com"
                    sx={{ textDecoration: "none" }}
                    className="flexCenter button"
                  >
                    Send Email
                  </Link>
                </div>

                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <SiGoogleforms size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Query</span>
                      <span className="secondaryText">Submit form</span>
                    </div>
                  </div>
                  <Link
                    href="https://forms.gle/9f3GQBAkpA9RHfvr5"
                    target="_blank"
                    sx={{ textDecoration: "none" }}
                    className="flexCenter button"
                  >
                    Chat now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flexEnd c-right">
            <div className="map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28003.684625724934!2d77.113207!3d28.675866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d038e0dee2897%3A0x84bb3fed8b1c51f9!2sBharati%20Vidyapeeth&#39;s%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1707061769673!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
