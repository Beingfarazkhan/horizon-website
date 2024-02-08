import React, { useState } from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import { Box, Link as MuiLink } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import horizonTypoWhite from "../..//assets/horizonTypoWhite.png";

import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/common";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 600px)": {
    width: "80%",
    height: "80%",
    "overflow-y": "scroll",
  },
};

const ModalComponent = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Terms and Conditions
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <ul>
            <li>
              <span className="bold-word">Acceptance of Terms:</span> By
              accessing and using this website, users agree to abide by these
              terms and conditions.
            </li>
            <li>
              <span className="bold-word">User Conduct:</span> Users agree to
              use the website for lawful purposes only and refrain from engaging
              in any activity that may harm the website or other users.
            </li>
            <li>
              <span className="bold-word">Links to Third-Party Websites:</span>{" "}
              The website may contain links to third-party websites for users'
              convenience. Horizon BVP is not responsible for the content or
              practices of these websites.
            </li>
            <li>
              <span className="bold-word">Changes to Terms:</span> Horizon BVP
              reserves the right to modify or update these terms and conditions
              at any time. Users are responsible for regularly reviewing the
              terms to stay informed of any changes.
            </li>
          </ul>
        </Typography>
      </Box>
    </Modal>
  );
};

const Footer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="footer-body">
      <div className="main-footer">
        <div className="footer-row footer-primary">
          <div className="footer-column footer-about">
            <h3 className="footer-logo">
              <img src={horizonTypoWhite} alt="Horizon" />
            </h3>
            <div>
              Fostering global understanding and diplomacy empowering students
              to simulate international relations, debate crucial issues, and
              develop critical thinking
            </div>
            <div className="footer-social">
              <a href="https://facebook.com/" target="blank">
                <FacebookIcon className="icon-hover" />
              </a>
              <a href="https://instagram.com/horizonbvp" target="blank">
                <InstagramIcon className="icon-hover" />
              </a>
              <a href="https://x.com/" target="blank">
                <XIcon className="icon-hover" />
              </a>
              <a href="https://linkedin.com/" target="blank">
                <LinkedInIcon className="icon-hover" />
              </a>
              <a href="https://youtube.com/" target="blank">
                <YouTubeIcon className="icon-hover" />
              </a>
            </div>
          </div>

          <div className="footer-column footer-links">
            <h3 className="footer-header">Some Links</h3>
            <ul>
              <li>
                <Link to="/faq" onClick={scrollToTop}>
                  F.A.Q
                </Link>
              </li>

              <li>
                <MuiLink to="#terms-of-services" onClick={handleOpen}>
                  Terms and Conditions
                </MuiLink>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop}>
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column subscribe">
            <h3 className="footer-header">
              Stay Updated <AnnouncementIcon />
            </h3>
            <div>
              <input
                className="footer-input"
                type="email"
                placeholder="Your email id here"
              />
              <button className="footer-button">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-row footer-copyright">
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ flexDirection: "column", padding: "10px" }}
          >
            <div>
              <h3 className="footer-header">
                Made with <span>❤️</span> by{" "}
                <MuiLink
                  href="https://github.com/beingfarazkhan"
                  target="_blank"
                  className="link-hover"
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  Faraz
                </MuiLink>
              </h3>
            </div>
            <p>Copyright &copy; 2024 HORIZON BVP</p>
          </Box>
        </div>
      </div>
      <ModalComponent open={open} handleClose={handleClose} />
    </div>
  );
};

export default Footer;

// const Footer = () => {
//   return (
//     <div classNameName="f-wrapper">
//       <div classNameName="paddings innerWidth flexCenter f-container">
//         {/* left side */}
//         <div className="flexColStart f-left">
//           <img src="./logo2.png" alt="" width={120} />
//           <span className="secondaryText">
//             Our vision is to make all people <br />
//             the best place to live for them.
//           </span>
//         </div>

//         <div className="flexColStart f-right">
//           <span className="primaryText">Information</span>
//           <span className="secondaryText">145 New York, FL 5467, USA</span>
//           <div className="flexCenter f-menu">
//             <span>Property</span>
//             <span>Services</span>
//             <span>Product</span>
//             <span>About Us</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
