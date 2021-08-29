import React from "react";

const Card = ({ img, title, description }) => {
  return (
    <div className="shadow-lg rounded-lg  flex">
      <div className="rounded-l-lg w-1/4">
        <img
          src={img}
          alt={title}
          className="h-full rounded-l-lg object-fill"
        />
      </div>
      <div className="w-3/4 p-2">
        <h1 className="text-lg text-primary font-semibold">{title}</h1>
        <p className="text-xs text-dark-gray">{description}</p>
      </div>
    </div>
  );
};

export default Card;
