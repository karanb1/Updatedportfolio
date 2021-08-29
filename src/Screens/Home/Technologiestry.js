import React from "react";
import ReactImg from "../../assets/react.png";
import Angular from "../../assets/angular.png";
import Node from "../../assets/node.png";
import Firebase from "../../assets/firebase.jpeg";
import Apollo from "../../assets/apollo.png";
import Redux from "../../assets/redux.png";
import Sass from "../../assets/sass.png";
import Next from "../../assets/next.png";
import Tailwind from "../../assets/tailwind.png";
import Figma from "../../assets/figma.jpeg";
import Jest from "../../assets/jest.png";
import Card from "./Card";

const technologies = [
  {
    title: "React",
    img: ReactImg,
    description:
      "A JavaScript library for building user interfaces by Facebook.",
  },
  {
    title: "Next",
    img: Next,
    description:
      "Next is a Framework used for static websites and server-side rendering for React-based applications.",
  },
  {
    title: "Angular",
    img: Angular,
    description:
      "Angular is an application framework and development platform for creating sophisticated single-page apps.",
  },
  {
    title: "React Native",
    img: ReactImg,
    description:
      "UI framework to develop cross-platform applications by Facebook",
  },
  {
    title: "Firebase",
    img: Firebase,
    description:
      "Firebase is a categorized as a NoSQL database program, which stores data in JSON-like documents",
  },
  {
    title: "SASS",
    img: Sass,
    description:
      "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.",
  },
  {
    title: "Apollo GraphQL",
    img: Apollo,
    description:
      "Apollo Client is a state management library that enables you to manage data with GraphQL.",
  },
  {
    title: "Jest",
    img: Jest,
    description:
      "Jest is a delightful JavaScript Testing Framework with a focus on simplicity developed by Facebook.",
  },
  {
    title: "Redux",
    img: Redux,
    description: "A predictable state container for JS apps",
  },
  {
    title: "Tailwind CSS",
    img: Tailwind,
    description:
      "Tailwind CSS is self-described as a utility first CSS framework",
  },
  {
    title: "NodeJS",
    img: Node,
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    title: "Figma",
    img: Figma,
    description: "Figma is a vector graphics editor and prototyping tool.",
  },
];

const Technologies = () => {
  return (
    <div className="mx-4 sm:mx-8 sm:px-4 py-16 border-b border-gray-200">
      <h1 className="text-primary text-3xl sm:text-4xl font-medium">
        Tools, technologies and frameworks
      </h1>
      <section className="grid grid-rows-none sm:grid-rows-3  grid-flow-col gap-6 my-10">
        {technologies.map((item) => (
          <Card
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
      {/* <h1 className="text-primary text-4xl font-medium">
        Technologies I am interested in
      </h1> */}
      {/* <section className="flex justify-between flex-wrap">
        {technologies.map((item) => (
          <div className="flex justify-between items-center">
            <img src={item.img} alt={item.title} height="100" width="100" />
          </div>
        ))}
      </section> */}
    </div>
  );
};

export default Technologies;
