import React from "react";
import Footer from "../../Components/Footer";
import Blog from "./Blog";
import Main from "./Main";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Work from "./Work";

const Home = () => {
  return (
    <div className="2xl:flex justify-center">
    <div className="2xl:w-10/12">
      <Main />
      <Work />
      <Projects />
      <Technologies />
      <Blog />
      <Footer />
    </div>
    </div>
  );
};

export default Home;
