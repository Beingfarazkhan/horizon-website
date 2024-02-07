import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./podcast-playlist.styles.css";
import { sliderSettings } from "../../utils/common";
import { PODCAST_DATA } from "../../data/podcast-data";
import { Fade } from "react-awesome-reveal";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const PodcastPlaylist = ({ onChangeUrl }) => {
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="primaryText playlist-header">Playlist</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {PODCAST_DATA.map(
            ({ title, creator, description, thumbnail, url }, i) => (
              <SwiperSlide key={i}>
                <Fade direction="up" delay={100}>
                  <div className="flexColStart r-card">
                    <img
                      src={thumbnail}
                      alt="home"
                      onClick={() => {
                        onChangeUrl(url);
                      }}
                    />

                    <span className="secondaryText r-price">
                      <AccountCircleIcon
                        fontSize="medium"
                        sx={{
                          color: "orange",
                          marginRight: "5px",
                        }}
                      />

                      <span style={{ fontSize: "15px" }}>{creator}</span>
                    </span>
                    <span style={{ fontSize: "18px" }} className="primaryText">
                      {title}
                    </span>
                    <span className="secondaryText">
                      {` ${description.split(" ").splice(0, 20).join(" ")}`}
                    </span>
                  </div>
                </Fade>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default PodcastPlaylist;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
