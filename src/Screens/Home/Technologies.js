import React from "react";
import ReactImg from "../../assets/react.png";
import ReactN from "../../assets/reactnative.svg";
import Angular from "../../assets/angular.png";
import Node from "../../assets/node.png";
import Firebase from "../../assets/firebase.png";
import Apollo from "../../assets/apollo.png";
import Redux from "../../assets/redux.png";
import Sass from "../../assets/sass.png";
import Next from "../../assets/next.png";
import Tailwind from "../../assets/tailwind.png";
import Figma from "../../assets/figma.svg";
import Jest from "../../assets/jest.png";
import Js from "../../assets/js.png";
import Java from "../../assets/java.png";

const images = [
  ReactImg,
  ReactN,
  Angular,
  Firebase,
  Jest,
  Tailwind,
  Redux,
  Node,
  Sass,
  Next,
  Apollo,
  Figma,
];

const programming = [Js, Java];

const Technologies = () => {
  return (
    <div className="mx-4 sm:mx-8 sm:px-4 py-16 border-b border-gray-200">
      <h1 className="text-primary text-3xl sm:text-4xl font-medium">
        Technical Stack 🖥
      </h1>
      <p className="text-dark-gray text-lg mt-8 ml-2">Tools & Frameworks</p>
      <section className="flex justify-between w-full flex-wrap my-4 sm:mx-7">
        {images.map((item) => (
          <img
            src={item}
            alt="tech"
            className="sm:h-32 sm:w-44 h-24 w-40 sm:mr-8 mb-2 sm:mb-6"
          />
        ))}
      </section>
      <p className="text-dark-gray text-lg mt-8 ml-2">Programming</p>
      <section className="flex w-full flex-wrap my-4 sm:mx-7">
        {programming.map((item) => (
          <img
            src={item}
            alt="tech"
            className="sm:h-36 sm:w-44 h-24 w-32 sm:mr-10 mb-2 sm:mb-6 mt-6"
          />
        ))}
      </section>
    </div>
  );
};

export default Technologies;
