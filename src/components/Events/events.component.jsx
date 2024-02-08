import React from "react";
import { Box } from "@mui/material";
import pageUnderConstruction from "../../assets/pageUnderConstruction.png?react";

const Events = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      sx={{
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      {" "}
      <div className="white-heading">Page Under Construction</div>
      <div className="image-container">
        <img src={pageUnderConstruction} alt="Page Under Construction" />
      </div>
    </Box>
  );
};

export default Events;
