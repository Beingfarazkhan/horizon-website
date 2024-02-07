import React from "react";
import { Box } from "@mui/system";
import "./horizon-women-head.styles.css";
import TeamCardList from "../../Team-card/team-card-list.component";
import { HORIZON_WOMEN } from "../../../data/horizon-women.data";

const HorizonWomenHead = () => {
  return (
    <Box className="women-head-body">
      <div className="women-head-title">
        <span>Meet Our Heads</span>
      </div>
      <TeamCardList teamList={HORIZON_WOMEN} />
    </Box>
  );
};

export default HorizonWomenHead;
