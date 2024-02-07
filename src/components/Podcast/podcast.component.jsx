import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import PodcastPlaylist from "../Podcast-Playlist/podcast-playlist.component";
import { Box } from "@mui/material";
import { Fade, Zoom } from "react-awesome-reveal";
import SectionHeader from "../../assets/sectionOne.svg?react";

import "./podcast.styles.css";

let widthAdjust;
let heightAdjust;
if (window.innerWidth >= 900) {
  widthAdjust = "70%";
  heightAdjust = "80vh";
} else if (window.innerHeight >= 700) {
  widthAdjust = "600px";
  heightAdjust = "338px";
} else {
  widthAdjust = "100%";
  heightAdjust = "auto";
}

const Podcast = () => {
  const [url, setUrl] = useState(
    "https://www.youtube.com/embed/cbkD2HnFmMs?si=NJN1_V329cMe"
  );

  const changeUrl = (url) => {
    setUrl(url);
  };

  return (
    <div className="podcast-container">
      <Fade direction="down" triggerOnce={true}>
        <div className="podcast-header">
          <span className="primaryText podcast-header-text">Podcast</span>
          <SectionHeader />
        </div>
      </Fade>
      <Box
        sx={{
          padding: "20px",
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <ReactPlayer
          controls={true}
          light={true}
          height={heightAdjust}
          width={widthAdjust}
          url={url}
        />
      </Box>

      <PodcastPlaylist onChangeUrl={changeUrl} />
    </div>
  );
};

export default Podcast;
