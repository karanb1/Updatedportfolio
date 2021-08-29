import React from "react";

const ProjectsCard = ({ img, title, start, end, description, tech, team }) => {
  return (
    <div className="flex flex-col mb-8 sm:mb-0">
      <img
        src={img}
        alt={title}
        className="sm:h-96 w-100  rounded-lg shadow-lg border border-gray-300"
      />
      <h1 className="text-primary font-medium text-2xl mt-8">{title}</h1>
      <p className="text-dark-gray text-sm mt-3">
        🗓 {start} - {end} | 👨🏼‍💻 Team of {team}{" "}
        {team === 1 ? "member" : "members"}
      </p>
      <p className="mt-4 text-primary text-sm">{description}</p>
      <p className="mt-2 text-sm text-blue-500 font-semibold hover:underline cursor-pointer">
        See project
      </p>
      <p className="mt-2 text-sm text-primary font-medium">
        Technologies Used: {tech}
      </p>
    </div>
  );
};

export default ProjectsCard;
