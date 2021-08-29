import React from "react";
import ProjectsCard from "./ProjectsCard";
import CF from "../../assets/cf.png";
import Dashboard from "../../assets/dashboard.jpg";
import Cmfi from "../../assets/cmfi.jpg";
import Ssa from "../../assets/ssa.jpg";
import Res from "../../assets/res.jpg";
import Coox from "../../assets/coox.jpg";

const projects = [
  {
    img: CF,
    start: "July 2021",
    end: "Present",
    title: "Causal Funnel Dashboard",
    team: 2,
    description:
      "A web application that provides meaningful data to the clients with the help of AI cookie, AI Fabric and AI Funnel so that they can convert and retain more customers.",
    technologies: "Angular, RxJS, Firebase, NodeJS, SCSS.",
  },
  {
    img: Dashboard,
    start: "Oct 2020",
    end: "June 2021",
    title: "FastorxBecho Merchant Dashboard",
    team: 2,
    description:
      "A merchant web application to manage multiple restaurants or an online business. It helps in cataloging, offer management, point of sale (POS), managing table in a restaurant, delivery systems etc.",
    technologies:
      "ReactJS, Redux, One Signal, React Router, CSS, ReactContext API, Apollo GraphQL, Google Maps API, Geolocation, GoogleWorkbox, NodeJS, Axios.",
  },
  {
    img: Ssa,
    start: "Oct 2020",
    end: "June 2021",
    title: "Shop Smart Autos iOS Application",
    team: 1,
    description:
      "An iOS application to display large set of inventory of cars and to find nearest car dealers in USA. There are filters for certified, used and new cars with features and reviews for each car so that user can make a better decision.",
    technologies:
      "React Native, Redux, One Signal, React Navigation, Geolocation, Axios.",
  },
  {
    img: Cmfi,
    start: "Oct 2020",
    end: "June 2021",
    title: "Covid Meals For India",
    team: 3,
    description:
      "An initiative by chef Saransh Goila and the fastor team to provide home cooked meal to covid patients. It was featured in Forbes, BBC World, CNBC etc and was used by more than five lakh Indians.",
    technologies: "ReactJS, React Router, Axios, SCSS",
  },
  {
    img: Res,
    start: "Oct 2020",
    end: "June 2021",
    title: "Fastor Restaurant Application",
    team: 1,
    description:
      "An application to handle delivery, dinein and in-car-takeaway for a restaurant on the client side. It supports multiple orders, scan and view menu, scan and pay etc.",
    technologies:
      "ReactJS, Redux, React Router, React Spring, SCSS, Axios, Google Maps API, Geolocation, Google Workbox.",
  },
  {
    img: Coox,
    start: "July 2021",
    end: "Present",
    title: "COOX Android Application",
    team: 2,
    description:
      "COOX mvp android application to manage booking and onboarding of cooks and chefs across India. It helps in speeding up the verification process for the chefs and allows them to instantly accept bookings near them.",
    technologies:
      "React Native, Redux, Firebase, React Navigation, Geolocation, Geofencing, Axios, Expo.",
  },
];

const Projects = () => {
  return (
    <div className="mx-4 sm:mx-7 sm:px-4 py-16 border-b border-gray-200">
      <h1 className="text-primary text-3xl sm:text-4xl font-medium">
        Projects 🔥
      </h1>
      <div className="flex flex-col sm:grid  sm:grid-rows-3  sm:grid-flow-col sm:gap-6 my-10 mx-4 sm:mx-16">
        {projects.map((item) => (
          <ProjectsCard
            img={item.img}
            title={item.title}
            start={item.start}
            end={item.end}
            description={item.description}
            tech={item.technologies}
            team={item.team}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
