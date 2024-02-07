import React from "react";
import "./home-core-team.styles.css";
import TeamCardList from "../Team-card/team-card-list.component";
import {
  HORIZON_FACULTY_MENTORS,
  VICE_PRESIDENT,
  PRESIDENT,
  GENERAL_SECRETARY,
} from "../../data/horizon-core-team-data";

const HomeCoreTeam = () => {
  return (
    <div className="core-team-body">
      <h1 className="white-heading">Core Team</h1>
      <TeamCardList teamList={[...HORIZON_FACULTY_MENTORS, ...PRESIDENT]} />
      <TeamCardList teamList={VICE_PRESIDENT} />
      <TeamCardList teamList={GENERAL_SECRETARY} />
    </div>
  );
};

export default HomeCoreTeam;
