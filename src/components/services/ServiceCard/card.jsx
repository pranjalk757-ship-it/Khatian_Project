import React from "react";
import { useNavigate } from "react-router-dom";

// Destructuring props: color, title, description, and path
const ServiceCard = ({ bgcolor, hovercolor, title, description, path }) => {
  const navigate = useNavigate();
  const handleApplyClick = () => {
    if (path === "disabled") {
      return;
    }
    navigate(path);
  };

  return (
    <div className="flex flex-col justify-between border-[1px] border-solid rounded-xl w-72 h-64 p-3">
      <div
        className={`${bgcolor} h-1/4 text-white text-lg font-medium flex justify-center items-center`}
      >
        {title}
      </div>
      <div
        className={`flex flex-col group ${hovercolor} hover:text-white transition-all duration-500 justify-between h-3/4`}
      >
        <div className="p-2">{description}</div>
        <button
          className="m-1 p-1 h-12 text-blue-200 transition-all transition:500 group-hover:text-richblack-700 group-hover:border-white text-[16px]  border-[1px] border-black border-solid font-bold "
          onClick={handleApplyClick}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
