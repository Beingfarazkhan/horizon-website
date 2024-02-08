import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { JellyfishSpinner, TraceSpinner } from "react-spinners-kit";
import { Box } from "@mui/material";

const Loader = ({ loading }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        zIndex: 1000,
      }}
    >
      <JellyfishSpinner size={150} color="#00FFFF" loading={loading} />
    </Box>
  );
};

export default Loader;
