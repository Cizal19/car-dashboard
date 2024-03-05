import React from "react";

const ModeDisplay = ({ mode, value }) => {
  // Color classes for each mode
  const modeColorClasses = {
    TOUR: "bg-red-500",
    ECO: "bg-red-600",
    SPORT: "bg-red-700",
  };

  return (
    <div
      className={`m-2 p-4 rounded-lg shadow-xl ${modeColorClasses[mode]} text-white flex flex-row`}
    >
      <div className="text-lg font-semibold mr-4 p-3 rounded-xl bg-red-500">
        {mode}
      </div>
      <div className="text-3xl p-3">{value}</div>
    </div>
  );
};

export default ModeDisplay;
