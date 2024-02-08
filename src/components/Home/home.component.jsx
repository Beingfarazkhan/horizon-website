import "./home.styles.css";
import ParticleBg from "particles-bg";
import { Box } from "@mui/material";
import logo from "../../assets/logo.png";
import { useMediaQuery } from "@mui/material";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const numParticles = isMobile ? 35 : 100;

  const colors = ["#0FF0FC", "#1F51FF", "#39FF14"];
  return (
    <>
      <div className={"container"}>
        <div className={"overlay"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ height: "100%", width: "100%", color: "white" }}
          >
            <div className="main-logo-container">
              <img src={logo} alt="Horizon Logo" />
            </div>
          </Box>

          <ParticleBg
            type="square"
            color={colors}
            bg={true}
            num={numParticles}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
