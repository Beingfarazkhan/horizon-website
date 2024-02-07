import React from "react";
import TeamCard from "./team-card.component";
import "./team-card-list.styles.css";
import "./team-card.styles.css";

const TeamCardList = ({ teamList }) => {
  return (
    <div className="team-body">
      <div className="team-container">
        <div className="team-main-card">
          <div className="team-cards">
            {teamList.map((team, index) => (
              <TeamCard key={index} team={team} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCardList;
