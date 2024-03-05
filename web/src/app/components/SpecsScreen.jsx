"use client";
import React, { useState } from "react";
import Image from "next/image";
import carImage from "../../../public/images/ferrari-top.png";
import awdIcon from "../../../public/icons/awd.svg";
import twoWdIcon from "../../../public/icons/2wd.svg";
import aeroIconOne from "../../../public/icons/aero1.svg";
import aeroIconTwo from "../../../public/icons/aero2.svg";
import tractionControlIcon from "../../../public/icons/traction-control.svg";
import carIcon from "../../../public/icons/car.svg";
import SpecButton from "./SpecButton";
import ControlButtons from "./ControlButtons";

const modes = ["TOUR", "ECO+", "SPORT+"];

const SpecsScreen = () => {
  // State to track the current mode
  const [currentMode, setCurrentMode] = useState("TOUR");

  // Method to update mode and specs
  const updateMode = (mode) => {
    setCurrentMode(mode);
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
          <div className="">
            <div className="flex flex-row">
              {modes.map((mode) => (
                <SpecButton
                  key={mode}
                  mode={mode}
                  isActive={currentMode === mode}
                  onClick={() => updateMode(mode)}
                />
              ))}
            </div>

            <ControlButtons title={"Power"} icon1={awdIcon} icon2={twoWdIcon} />
            <ControlButtons
              title={"Aero"}
              icon1={aeroIconOne}
              icon2={aeroIconTwo}
            />
            <ControlButtons
              title={"Traction"}
              icon1={carIcon}
              icon2={tractionControlIcon}
            />
          </div>
          <div className="ml-20">
            <Image
              src={carImage}
              alt="A sleek car, angled view"
              style={{ scale: "1.25" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecsScreen;
