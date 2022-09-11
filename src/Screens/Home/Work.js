import React from "react";
import { BsLink45Deg } from "react-icons/bs";

const Work = () => {
  const redirect = (link) => {
    window.location.href = link;
  };

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
          <h1
            className="text-blue-900 bg-blue-100 font-medium p-2 flex rounded w-36 -mt-1 items-center hover:underline cursor-pointer"
            onClick={() => redirect("https://razorpay.com/")}
          >
            Razorpay&nbsp;
            <BsLink45Deg className="fill-current text-xl text-blue-900 cursor-pointer" />
          </h1>
          <p className="text-dark-gray text-sm mt-3">
            🗓 July 2022 - Present | 📍 Banglore, India 🇮🇳
          </p>
          <p className="mt-4 text-primary text-sm">
            Joined the RazorpayX team as a Frontend Engineer. My responsibilities include:
            <br />
            <p className="ml-4 mt-2">
              1. Building and maintaining the next generation business banking application used by millions of businesses in India.
              <br />2. Focus on writing 85-90% unit tested components and code to ensure code quality and less bugs.
              <br /> 3. Collaborating on stages of system development lifecycle from requirement gathering to production releases.
            </p>
          </p>
          <p className="mt-4 text-primary font-medium">
            Technologies: React Native, Client and server side GraphQL, NodeJS, Android, JEST, React testing library, Devspace.
          </p>
        </div>
      <div className="border-l border-gray-300 relative pl-8 pb-6">
          <div className="rounded-full h-8 w-8 bg-gray-100 absolute -left-4 flex justify-center items-center">
            <div className="rounded-full h-4 w-4 bg-gray-400" />
          </div>
          <h1
            className="text-pink-900 bg-pink-100 font-medium p-2 flex rounded w-36 -mt-1 items-center hover:underline cursor-pointer"
            onClick={() => redirect("https://www.spinny.com/")}
          >
            Spinny&nbsp;
            <BsLink45Deg className="fill-current text-xl text-pink-900 cursor-pointer" />
          </h1>
          <p className="text-dark-gray text-sm mt-3">
            🗓 Oct 2021 - June 2022 | 📍 Gurugram, India 🇮🇳
          </p>
          <p className="mt-4 text-primary text-sm">
            Joined the HUB frontend team at spinny as Software Development Engineer. My responsibilities include:
            <br />
            <p className="ml-4 mt-2">
              1. Migrate current react native code base for HUB app to use Redux flow.
              <br /> 2. Research and integrate GraphQL APIs using Apollo to fetch data from the backend efficiently.
              <br /> 3. Implement persistance storage and other features so that the application can be used in offline and low data mode.
              <br /> 4. Fix bugs and integrate new features on the HUB app according to business requirement.
            </p>
          </p>
          <p className="mt-4 text-primary font-medium">
            Technologies: React Native, Redux, GraphQL, Firebase, WatermelonDB, Android.
          </p>
        </div>
        <div className="border-l border-gray-300 relative pl-8 pb-6">
          <div className="rounded-full h-8 w-8 bg-gray-100 absolute -left-4 flex justify-center items-center">
            <div className="rounded-full h-4 w-4 bg-gray-400" />
          </div>
          <h1
            className="text-purple-900 bg-purple-100 font-medium p-2 flex rounded w-36 -mt-1 items-center hover:underline cursor-pointer"
            onClick={() => redirect("https://www.causalfunnel.com/")}
          >
            CausalFunnel&nbsp;
            <BsLink45Deg className="fill-current text-xl text-purple-900 cursor-pointer" />
          </h1>
          <p className="text-dark-gray text-sm mt-3">
            🗓 July 2021 - Sept 2021 | 📍 San Francisco, USA 🇺🇸
          </p>
          <p className="mt-4 text-primary text-sm">
            Collaborated with a highly skilled team of ex-Apple, Microsoft data
            scientists to build a platform for eCommerce funnel optimization. My
            responsibilities included:
            <br />
            <p className="ml-4 mt-2">
              1. Create meaningful and pixel perfect charts and graphs on the
              frontend using Angular.
              <br /> 2. Optimise the clientside to handle heavy amount of data
              and improve load time.
              <br /> 3. Identifying the edge cases and scalability while building the backend firebase cloud functions for Real Time Dashboard.
              <br /> 4. Integrate Google PSI for clients, manage cookies, filter data.
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
          <h1
            className="text-blue-900 bg-indigo-100 font-medium p-2 rounded w-36 flex items-center -mt-1 hover:underline cursor-pointer"
            onClick={() => redirect("https://www.fastor.ai/")}
          >
            Fastor.ai&nbsp;
            <BsLink45Deg className="fill-current text-xl text-indigo-900 cursor-pointer" />
          </h1>
          <p className="text-dark-gray text-sm mt-3">
            🗓 Oct 2020 - June 2021 | 📍 New Delhi, India 🇮🇳
          </p>
          <p className="mt-4 text-primary text-sm">
            I was working as a Frontend intern for developing user facing products
            like dashboards, PWAs and mobile apps. My responsibilities included:
            <br />
            <p className="ml-4 mt-2">
              1. Converting figma designs into pixel perfect and reusable UI
              components.
              <br /> 2. Understood the business requirements and collaborated with the product team to reduce user pain points.
              <br /> 3. Ship new features and improvements to the two client
              side web apps I made from scratch.
              <br />
              4. Implement push notifications and offline mode for web apps.
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
          <h1
            className="text-yellow-800 bg-yellow-100 font-medium p-2 rounded w-36 flex items-center -mt-1 hover:underline cursor-pointer"
            onClick={() => redirect("https://www.coox.in/")}
          >
            Coox&nbsp;
            <BsLink45Deg className="fill-current text-xl text-yellow-800 cursor-pointer" />
          </h1>
          <p className="text-dark-gray text-sm mt-3">
            🗓 Apr 2020 - Sept 2020 | 📍 Noida, India 🇮🇳
          </p>
          <p className="mt-4 text-primary text-sm">
            Joined the team as a react native developer intern to create the MVP android
            application for COOX to provide a seamless onboarding and
            verification service for cooks and chefs across India. My
            responsibilities included:
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
