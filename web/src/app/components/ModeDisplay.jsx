import React from "react";

const ModeDisplay = ({ mode, value, isActive, onClick }) => {
  // Set the background to black for unselected modes, and keep it red for the active mode.
  const backgroundClass = isActive ? "bg-red-500" : "bg-black";

  return (
    <div
      className={`m-2 p-4 rounded-lg shadow-xl ${backgroundClass} text-white flex flex-row items-center justify-between cursor-pointer`}
      onClick={onClick}
    >
      <div
        className={`text-lg font-semibold mr-10 p-3 rounded-xl ${backgroundClass}`}
      >
        {mode}
      </div>
      <div className="text-3xl p-3">{value}</div>
    </div>
  );
};

export default ModeDisplay;
