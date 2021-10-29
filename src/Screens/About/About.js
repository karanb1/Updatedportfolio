import React from "react";
import Footer from "../../Components/Footer";
import Main from "../About/Main";
import Education from "./Education";

const About = () => {
  return (
    <div className="2xl:flex justify-center">
    <div className="2xl:w-10/12">
      <Main />
      <Education />
      <Footer />
   </div>
   </div>
  );
};

export default About;
