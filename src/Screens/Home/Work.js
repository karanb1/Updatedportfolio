import React from "react";
import { BsLink45Deg } from "react-icons/bs";

const Work = () => {
  return (
    <div className="mx-4 sm:mx-8 sm:px-4 py-16 border-b border-gray-200">
      <h1 className="text-primary text-3xl sm:text-4xl font-medium">
        Work Experience 🚀
      </h1>
      <div className="flex flex-col mx-4 sm:mx-16 mt-10">
        <div className="border-l border-gray-300 relative pl-8 pb-6">
          <div className="rounded-full h-8 w-8 bg-gray-100 absolute -left-4 flex justify-center items-center">
            <div className="rounded-full h-4 w-4 bg-gray-400" />
          </div>
          <h1 className="text-purple-900 bg-purple-100 p-2 flex rounded w-36 -mt-1 items-center hover:underline cursor-pointer">
            Causal Funnel&nbsp;
            <BsLink45Deg className="fill-current text-xl text-purple-900 cursor-pointer" />
          </h1>
          <p className="text-dark-gray text-sm mt-3">
            🗓 July 2021 - Present | 📍 San Francisco, USA 🇺🇸
          </p>
          <p className="mt-4 text-primary text-sm">
            Working with a highly skilled team of ex-apple, microsoft data
            scientists to build a platform for eCommerce funnel Optimastion. My
            responsibilities includes:
            <br />
            <p className="ml-4 mt-2">
              1. Create meaningful and pixel perfect charts and graphs on the
              frontend using Angular.
              <br /> 2. Optimise the clientside to handle heavy amount of data
              and improve load time.
              <br /> 3. Create Firebase cloud functions to handle backend logic
              relevant for the client side.
              <br /> 4. Integrate Google PSI for clients, manage cookies, filter
              data.
            </p>
          </p>
          <p className="mt-4 text-primary font-medium">
            Technologies: Angular, RxJS, Firebase, NodeJS, SCSS.
          </p>
        </div>
        <div className="border-l border-gray-300 relative pl-8 pb-6">
          <div className="rounded-full h-8 w-8 bg-gray-100 absolute -left-4 flex justify-center items-center">
            <div className="rounded-full h-4 w-4 bg-gray-400" />
          </div>
          <h1 className="text-blue-900 bg-blue-100 p-2 rounded w-36 flex items-center -mt-1 hover:underline cursor-pointer">
            Fastor.ai&nbsp;
            <BsLink45Deg className="fill-current text-xl text-blue-900 cursor-pointer" />
          </h1>
          <p className="text-dark-gray text-sm mt-3">
            🗓 Oct 2020 - June 2021 | 📍 New Delhi, India 🇮🇳
          </p>
          <p className="mt-4 text-primary text-sm">
            I was working as a Frontend lead for developing user facing products
            like dashboards, PWAs and mobile apps. My responsibilities includes:
            <br />
            <p className="ml-4 mt-2">
              1. Converting figma designs into pixel perfect and reusable UI
              components.
              <br /> 2. Use optimastion techniques, provide feedbacks and create
              animations to improve user experience.
              <br /> 3. Ship new features and improvements to the two client
              side web apps I made from scratch.
              <br />
              4. Extensively test and debug features integrated in the web
              application.
              <br />
              5. Implement push notifications and offline mode for web apps.
            </p>
          </p>
          <p className="mt-4 text-primary font-medium">
            Technologies: ReactJS, Redux, React Native, Apollo GraphQL, Axios,
            Interceptors, SCSS/CSS, React Navigation, JIRA, One signal, Google
            Workbox, React Router, MaterialUI.
          </p>
        </div>
        <div className="relative pl-8 pb-6">
          <div className="rounded-full h-8 w-8 bg-gray-100 absolute -left-4 flex justify-center items-center">
            <div className="rounded-full h-4 w-4 bg-gray-400" />
          </div>
          <h1 className="text-yellow-800 bg-yellow-100 p-2 rounded w-36 flex items-center -mt-1 hover:underline cursor-pointer">
            Coox&nbsp;
            <BsLink45Deg className="fill-current text-xl text-yellow-800 cursor-pointer" />
          </h1>
          <p className="text-dark-gray text-sm mt-3">
            🗓 Apr 2020 - Sept 2020 | 📍 Noida, India 🇮🇳
          </p>
          <p className="mt-4 text-primary text-sm">
            I was working as a react native developer to create the MVP android
            application for COOX to provide a seamless onboarding and
            verification service for cooks and chefs across India. My
            responsibilities includes:
            <br />
            <p className="ml-4 mt-2">
              1. Create and ship new features on the COOX android application.
              <br /> 2. Understand user pain points to create better user
              experience.
              <br /> 3. Implement background functionalities like geofencing and
              geolocation.
              <br /> 4. Quickly test, debug and study user feedbacks to to
              improve user retention.
            </p>
          </p>
          <p className="mt-4 text-primary font-medium">
            Technologies: React Native, Redux, React Navigation, Firebase, JIRA,
            Expo, Google Analytics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
