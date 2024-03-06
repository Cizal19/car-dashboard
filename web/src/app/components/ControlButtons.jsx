//
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ControlButtons = ({ title, icon1, icon2, initialValue }) => {
  // Use useEffect to set the initial selectedIcon based on initialValue prop
  const [selectedIcon, setSelectedIcon] = useState(icon1); // Default to icon1 for initial render

  useEffect(() => {
    // Check the initialValue and update selectedIcon accordingly
    // initialValue  relates to icon1 or icon2
    if (initialValue === "2wd" && title === "Power") {
      setSelectedIcon(icon1); //  icon1 corresponds to '4wd'
    } else if (initialValue === "4wd" && title === "Power") {
      setSelectedIcon(icon2); //  icon2 corresponds to '2wd'
    } else if (initialValue === "side" && title === "Aero") {
      setSelectedIcon(icon1); //  icon1 corresponds to 'side'
    } else if (initialValue === "top" && title === "Aero") {
      setSelectedIcon(icon2); //  icon2 corresponds to 'top'
    } else if (initialValue === "on" && title === "Traction") {
      setSelectedIcon(icon1); // icon1 corresponds to 'on'
    } else if (initialValue === "off" && title === "Traction") {
      setSelectedIcon(icon2); //  icon2 corresponds to 'off'
    }
  }, [initialValue]); // Rerun if these props change

  return (
    <div className="my-3 flex flex-row items-center justify-end text-white">
      <div className="text-lg">{title}</div>
      <div className="flex flex-row ml-10">
        <button
          className={`m-1 p-2 rounded-lg shadow-xl flex  items-center justify-center ${
            selectedIcon === icon1 ? "bg-red-500" : "bg-black"
          }`}
          onClick={() => setSelectedIcon(icon1)}
          style={{ width: "100px", height: "50px" }}
        >
          <Image src={icon1} alt={`${title} option 1`} width={35} />
        </button>
        <button
          className={`m-1 p-2 rounded-lg shadow-xl flex items-center justify-center ${
            selectedIcon === icon2 ? "bg-red-500" : "bg-black"
          }`}
          onClick={() => setSelectedIcon(icon2)}
          style={{ width: "100px", height: "50px" }}
        >
          <Image src={icon2} alt={`${title} option 2`} width={35} />
        </button>
      </div>
    </div>
  );
};

export default ControlButtons;
