/* eslint-disable react/style-prop-object */
import React from "react";
import { FaInstagram, FaMediumM, FaTwitter } from "react-icons/fa";
import { VscGithub, VscMail } from "react-icons/vsc";
import { GrLinkedin } from "react-icons/gr";
import Me from "../../assets/me.jpg";
import Navigator from "../../Components/Navigator";

const Main = () => {
  return (
    <div className="min-h-screen border-b border-gray-200 sm:mx-8 mx-4">
      <Navigator />
      <main className=" pb-10 flex sm:flex-row sm:justify-between flex-col select-none">
        <div
          className="sm:hidden border border-black  self-center border-2 border-indigo-100 rounded  bg-indigo-100"
          style={{ height: 308, width: 200 }}
        >
          <img
            src={Me}
            alt="me"
            style={{ height: 306, width: 300 }}
            className="object-contain -ml-5 -mt-5"
          />
        </div>

        <div className="mt-10 flex flex-col justify-center sm:mt-0 sm:mr-20">
          <p className="p-force-lineheight text-primary text-3xl sm:text-5xl text-3xl font-medium subpixel-antialiased">
            Hey 🖐🏼 I am Karan. I am a{" "}
            <span className="bg-pink-100 underline text-pink-800 rounded px-1">
              Developer
            </span>
            ,{" "}
            <span className="bg-green-100 underline text-green-800 rounded px-1">
              Designer
            </span>{" "}
            and{" "}
            <span className="bg-yellow-100 underline text-yellow-800 rounded px-1">
              {" "}
              Photographer
            </span>
            .
          </p>
          <p className="mt-4 text-dark-gray ml-1">📍 New Delhi, India 🇮🇳</p>
          <p className="mx-3 mb-4 mt-2 text-dark-gray ml-2">
            💼 Remote Developer @ Causal Funnel, San Francisco, USA 🇺🇸
          </p>
          <div className="flex ml-2">
            <GrLinkedin className="fill-current text-3xl text-primary cursor-pointer" />
            <VscGithub className="ml-3 text-3xl fill-current text-primary cursor-pointer" />
            <FaMediumM className="ml-3 text-3xl fill-current text-primary cursor-pointer" />
            <FaInstagram className="ml-3 text-3xl fill-current text-primary cursor-pointer" />
            <FaTwitter className="ml-3 text-3xl fill-current text-primary cursor-pointer" />
            <VscMail className="ml-3 text-3xl fill-current text-primary cursor-pointer" />
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="border-2 border-indigo-100 rounded mr-10 mt-20 bg-indigo-100">
            <img src={Me} alt="me" className="rounded -ml-8 -mt-8 pb-8" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
