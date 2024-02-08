import "./home.styles.css";
import ParticleBg from "particles-bg";
import { Box } from "@mui/material";
import Particles from "../Canvas/Particles";
import Canvas from "../Canvas/Canvas";
import logo from "../../assets/logo.png";

const Home = () => {
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

          <ParticleBg type="square" color={colors} bg={true} num={100} />
        </div>
      </div>
    </>
  );
};
export default Home;
