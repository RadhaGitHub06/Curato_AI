import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-500 ${
          progress < 50 ? "bg-red-500" : progress < 80 ? "bg-yellow-500" : "bg-green-500"
        }`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
