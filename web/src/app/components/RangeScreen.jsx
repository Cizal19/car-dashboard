"use client";
import React, { useState } from "react";
import RangeDisplay from "./RangeDisplay";
import ModeDisplay from "./ModeDisplay";
import carImage from "../../../public/images/ferrari-top.png";
import Image from "next/image";

const RangeScreen = () => {
  // Initial mode and its corresponding range value
  const modes = {
    TOUR: 85,
    "ECO+": 99,
    "SPORT+": 57,
  };

  // State to track the current mode and its range
  const [currentMode, setCurrentMode] = useState("TOUR");
  const [range, setRange] = useState(modes[currentMode]);

  // Method to update mode and range
  const updateMode = (mode) => {
    setCurrentMode(mode);
    setRange(modes[mode]);
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{ width: "800px", height: "600px" }}
    >
      <div className="shadow-md p-10 rounded-xl text-white bg-[url('/images/red-black-bg2.png')] bg-cover bg-no-repeat bg-center">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl ">NIOEP9</h1>
        </div>
        <div className="flex flex-row items-center p-10">
          <div>
            <RangeDisplay range={range} refill={45} />
            {Object.keys(modes).map((mode) => (
              <ModeDisplay
                key={mode}
                mode={mode}
                value={modes[mode]}
                isActive={currentMode === mode}
                onClick={() => updateMode(mode)}
              />
            ))}
          </div>
          <div className="ml-20">
            <Image
              src={carImage}
              alt="A sleek car, angled view"
              style={{ transform: "rotate(30deg)", scale: "1.25" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeScreen;
