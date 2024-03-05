import React from "react";

const SpecButton = ({ mode, isActive, onClick }) => {
  const activeClass = isActive ? "bg-red-500" : "bg-black";
  return (
    <div
      className={`m-2 p-4 rounded-lg shadow-xl text-white flex justify-center items-center cursor-pointer ${activeClass}`}
      onClick={onClick}
      style={{ width: "100px", height: "50px" }}
    >
      {mode}
    </div>
  );
};

export default SpecButton;
