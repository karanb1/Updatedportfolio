import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Navigator = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <nav className="h-36 flex justify-center items-center">
      <div className="w-64 flex justify-between">
        <span
          className={`text-lg cursor-pointer ${
            pathname === "/" && "bg-red-100"
          } px-1.5 py-0.5 rounded`}
          onClick={() => history.push("/")}
        >
          Work
        </span>
        <span
          className={`text-lg cursor-pointer  ${
            pathname === "/about" && "bg-red-100"
          }  px-1.5 py-0.5 rounded`}
          onClick={() => history.push("/about")}
        >
          About
        </span>
        <span
          className={`text-lg cursor-pointer ${
            pathname === "/photography" && "bg-red-100"
          }  px-1.5 py-0.5 rounded`}
          onClick={() => history.push("/photography")}
        >
          Photography
        </span>
      </div>
    </nav>
  );
};

export default Navigator;
