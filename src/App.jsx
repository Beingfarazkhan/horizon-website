import { Route, Routes } from "react-router-dom";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/home.component";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Navigation from "./routes/navigation.component";
import AboutUs from "./components/AboutUs/about-us.component";
import Events from "./components/Events/events.component";
import Blogs from "./components/Blogs/blogs.component";
import HorizonWomen from "./components/HorizonWomen/horizon-women.component";
import Faq from "./components/Faq/faq.component";
import HomeCoreTeam from "./components/Home/home-core-team.component";
import AboutUsHero from "./components/AboutUs/about-us-hero.component";
import AboutUsMission from "./components/AboutUs/about-us-mission.component";
import Loader from "./components/Loader/loader.component";
import { useEffect, useState } from "react";

function App() {
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route
              index
              element={
                <div className="landing-container">
                  <div>
                    <Home />
                    <div className="white-gradient" />
                    <AboutUsHero />
                  </div>
                  <AboutUsMission />
                  <HomeCoreTeam />
                  {/* <Residencies /> */}
                  <Faq />
                  <Contact />
                  <Footer />
                </div>
              }
            />
            <Route
              path="about-us"
              element={
                <>
                  <AboutUs />
                  <Footer />
                </>
              }
            />
            <Route
              path="events"
              element={
                <>
                  <Events />
                  <Footer />
                </>
              }
            />
            <Route
              path="blogs"
              element={
                <>
                  <Blogs />
                  <Footer />
                </>
              }
            />
            <Route
              path="horizon-women"
              element={
                <>
                  <HorizonWomen />
                  <Footer />
                </>
              }
            />
            <Route
              path="faq"
              element={
                <>
                  <Faq />
                  <Footer />
                </>
              }
            />
            <Route
              path="contact"
              element={
                <>
                  <Contact />
                  <Footer />
                </>
              }
            />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
