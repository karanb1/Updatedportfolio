import React from "react";
import Footer from "../../Components/Footer";
import Blog from "./Blog";
import Main from "./Main";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Work from "./Work";

const Home = () => {
  return (
    <>
      <Main />
      <Work />
      <Projects />
      <Technologies />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
