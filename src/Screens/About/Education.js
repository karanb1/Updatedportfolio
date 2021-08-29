import React from "react";
import Lottie from "react-lottie";

const Education = () => {
  return (
    <div className="mx-4 sm:mx-8 sm:px-4 py-16 border-b border-gray-200">
      <h1 className="text-primary text-3xl sm:text-4xl font-medium">
        Education 📚
      </h1>
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="flex flex-col mx-1 sm:mx-10 mt-10 sm:w-2/5 sm:mr-64">
          <h1 className="text-yellow-900 bg-yellow-100 p-2 flex rounded items-center hover:underline cursor-pointer">
            Maharaja Surajmal Institute Of Technology, GGSIPU
          </h1>
          <p className="text-dark-gray text-sm mt-3">
            🗓 2018 - 2022 | 📍 New Delhi, India 🇮🇳
          </p>
          <p className="mt-2 text-primary text-sm">
            Major: Infromation Technology
          </p>
          <p className="mt-2 mb-6 text-primary font-medium">
            Aggregate: 8.90/10
          </p>
          <h1 className="text-red-900 bg-red-100 p-2 rounded flex items-center hover:underline cursor-pointer">
            The Frank Anthony Public School
          </h1>
          <p className="text-dark-gray text-sm mt-3">
            🗓 2005 - 2017 | 📍 New Delhi, India 🇮🇳
          </p>
          <p className="mt-2 text-primary text-sm">
            Subjects: Mathematics, Physics, Chemistry, English, Computer Science
          </p>
          <p className="mt-2 text-primary font-medium">Aggregate: 85.3%</p>
        </div>

        <lottie-player
          src="https://assets7.lottiefiles.com/private_files/lf30_sxw84pnl.json"
          background="transparent"
          speed="1"
          style={{ width: 330, height: 330, alignSelf: "center" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Education;

// https://assets7.lottiefiles.com/private_files/lf30_sxw84pnl.json"
