import React from "react";
import "./team-card.styles.css";
import profilepic from "../../assets/HorizonWomen/team-01.png?react";

// {
//     name: "Ashwathy G Krishnan",
//     image: Ashwathy,
//     role: "Head",
//     linkedin: "https://www.linkedin.com/in/ashwathy-g-krishnan-0b3a3b1b8",
//     instagram: "https://www.instagram.com/aswathy_g_krishnan",
//     github: "https://www.github.com/ashwathy-g-krishnan",
//   },

const TeamCard = ({ team }) => {
  const { name, image, role, linkedin, instagram, github } = team;
  return (
    <div className="team-card">
      <div className="team-content">
        <div className="team-img">
          <img src={image} alt={name} />
        </div>
        <div className="team-details">
          <div className="team-name">{name}</div>
          <div className="team-job">{role}</div>
        </div>
        <div className="team-media-icons">
          <a href={linkedin}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={instagram}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href={github}>
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
