import React from "react";
import Navigator from "../../Components/Navigator";
import AboutI from "../../assets/about.png";

const About = () => {
  return (
    <div className="min-h-screen border-b border-gray-200 sm:mx-8 mx-4 pb-16">
      <Navigator />
      <main className="flex sm:flex-row pt-0 sm:pt-16 flex-col select-none sm:mx-20">
        <div>
          <img src={AboutI} alt="me" className="rounded sm:mt-20 shadow-lg" />
          <p className="mt-4 text-sm text-primary">📍 Apple park, Cupertino</p>
        </div>
        <div className="sm:ml-20 mt-6 sm:mt-0">
          <p className="hidden sm:block font-semibold text-3xl text-primary">
            NICE TO MEET YOU
          </p>
          <p className="text-dark-gray text-sm sm:text-lg sm:mt-4 sm:mt-9">
            Hey there, I'm Karan! I am a senior year student pursuing bachelors
            in Infromation Technology at Maharaja Surajmal Institute located in
            new delhi, India. I am currently working as a Software development Engineer at{" "}
            <span className="text-red-500 font-semibold">Spinny</span>, India’s most trusted used car brand and is on its way to become a unicorn
            . I am passionate about creating easy to use products and I mostly
            tend to lean into user facing projects which involves highly
            interactive and dynamic user experience. I believe that design and
            technology can make a great impact in lives of millions of people
            and I experienced that when I worked on{" "}
            <span className="text-blue-500 font-semibold">
              covidmealsforindia.com
            </span>{" "}
            which was featured in{" "}
            <span className="text-primary font-semibold">Forbes</span>,{" "}
            <span className="text-primary font-semibold">BBC World</span> and{" "}
            <span className="text-primary font-semibold">CNBC</span>. I
            currently use the React ecosystem to create pixel perfect UI
            components for web and mobile applications. Previously, I've had the
            opportunity to work with the amazing team at{" "}
            <span className="text-purple-500 font-semibold">Causal Funnel</span>,{" "}
            <span className="text-indigo-500 font-semibold">Fastor.ai</span> and{" "}
            <span className="text-yellow-400 font-semibold">COOX</span> where I
            learned about ownership, working in a collaborative environment and
            how to approach complex real life problems. When I am not coding you
            can find me travelling the world, listening to music, playing
            cricket or playing mobile games.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
