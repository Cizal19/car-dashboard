"use client";
import React, { useState } from "react";
import RangeDisplay from "./RangeDisplay";
import ModeDisplay from "./ModeDisplay";
import carImage from "../../../public/images/ferrari-top.png";
import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

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

  const carAnimation = {
    initial: { rotate: 0, scale: 1.5 },
    animate: { rotate: 30, scale: 1.5 },
    transition: { duration: 5000 },
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
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-3xl ">NIOEP9</h1>
        </div>
        <Navbar />
        <div
          className="flex flex-row items-center p-10"
          style={{ width: "900px", height: "550px" }}
        >
          <motion.div
            className="flex flex-row items-center p-10"
            style={{ width: "800px", height: "600px" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
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
          </motion.div>
          {/* <div>
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
          </div> */}

          <motion.div
            className="mr-20"
            initial="initial"
            animate="animate"
            variants={carAnimation}
          >
            <Image src={carImage} alt="A sleek car, angled view" />
          </motion.div>
          {/* Remaining component layout */}
        </div>
      </div>
    </div>
  );
};

export default RangeScreen;
