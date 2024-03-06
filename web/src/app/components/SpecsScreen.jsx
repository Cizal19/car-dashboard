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
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const modes = ["TOUR", "ECO+", "SPORT+"];

const SpecsScreen = () => {
  // State to track the current mode
  const [currentMode, setCurrentMode] = useState("TOUR");

  // Method to update mode and specs
  const updateMode = (mode) => {
    setCurrentMode(mode);
  };

  const carAnimation = {
    initial: { rotate: 30, scale: 1.5 },
    animate: { rotate: 0, scale: 1.5 },
    transition: { duration: 5000 }, // make the stats fade out also
  };

  const containerVariants = {
    hidden: {
      x: "-5vw", // Start off-screen to the left
      opacity: 0,
    },
    visible: {
      x: 0, // Move to original position
      opacity: 1,
      transition: { ease: "easeInOut" },
    },
    exit: {
      x: "-5vw", // Exit to the left
      opacity: 0,
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  return (
    <div className="flex justify-center items-center">
      <div className="shadow-md p-10 rounded-xl text-white bg-[url('/images/red-black-bg2.png')] bg-cover bg-no-repeat bg-center">
        <div className="flex flex-row mb-3">
          <h1 className="text-3xl ">NIOEP9</h1>
        </div>
        <Navbar />
        <div
          className="flex flex-row items-center justify-around p-10"
          style={{ width: "900px", height: "550px" }}
        >
          {/* <div className="">
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
          </div> */}
          <motion.div
            className="flex flex-row items-center p-10"
            style={{ width: "800px", height: "600px" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="">
              <div className="flex flex-row mb-10">
                {modes.map((mode) => (
                  <SpecButton
                    key={mode}
                    mode={mode}
                    isActive={currentMode === mode}
                    onClick={() => updateMode(mode)}
                  />
                ))}
              </div>
              <div>
                <ControlButtons
                  title={"Power"}
                  icon1={awdIcon}
                  icon2={twoWdIcon}
                />
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
            </div>
          </motion.div>

          <motion.div
            className="mr-20"
            initial="initial"
            animate="animate"
            variants={carAnimation}
          >
            <Image src={carImage} alt="A sleek car, angled view" />
          </motion.div>
          {/* <Image
              src={carImage}
              alt="A sleek car, angled view"
              style={{ scale: "1.25" }}
            /> */}
        </div>
      </div>
    </div>
  );
};

export default SpecsScreen;
