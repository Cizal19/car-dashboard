"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import carImage from "../../../public/images/ferrari-top.png";
import awdIcon from "../../../public/icons/awd.svg";
import twoWdIcon from "../../../public/icons/2wd.svg";
import aeroSideIcon from "../../../public/icons/aero1.svg";
import aeroTopIcon from "../../../public/icons/aero2.svg";
import tractionControlOffIcon from "../../../public/icons/traction-control.svg";
import tractionControlOnIcon from "../../../public/icons/car.svg";

import doubleChevronGold from "../../../public/icons/double-chevron-up.svg";
import doubleChevronBlue from "../../../public/icons/double-chevron-up-blue.svg";
import doubleChevronGreen from "../../../public/icons/double-chevron-up-green.svg";

import SpecButton from "./SpecButton";
import ControlButtons from "./ControlButtons";
import Navbar from "./Navbar";
import { motion, useAnimation } from "framer-motion";
import axios from "axios";

const SpecsScreen = () => {
  // State to track the current mode
  const [currentMode, setCurrentMode] = useState("TOUR");
  const [carSpecs, setCarSpecs] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const modes = ["TOUR", "ECO+", "SPORT+"];

  const carControls = useAnimation();
  const chevronAnimationControls = useAnimation();

  useEffect(() => {
    const fetchCarSpecifications = async () => {
      setIsLoading(true);

      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");

          setIsLoading(false);
          return;
        }

        const response = await axios.get(
          `https://car-dashboard-i83h.onrender.com/api/cars/${currentMode}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setCarSpecs(response.data[0]);
      } catch (error) {
        console.error("Failed to fetch car specifications", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarSpecifications();
  }, [currentMode]);

  const updateMode = (mode) => {
    setCurrentMode(mode);
  };

  const carAnimation = {
    initial: { rotate: 30, scale: 1.8 },
    animate: { rotate: 0, scale: 1.8 },
    transition: {
      duration: 2, // Adjust duration
      onComplete: () => {
        console.log("Car animation complete");
        chevronAnimationControls.start("animate");
      },
    },
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

  const chevronAnimation = {
    initial: { y: 200, x: -35, opacity: 0 }, // Start below the car, adjust y value as needed
    animate: {
      y: -80,
      x: -35, // Final position
      opacity: 1,
      transition: { duration: 1 }, // Adjust duration
    },
  };

  return (
    <div className="flex justify-center items-center">
      <div className="shadow-md p-10 rounded-xl text-white bg-[url('/images/red-black-bg2.png')] bg-cover bg-no-repeat bg-center">
        <Navbar />

        <div
          className="flex flex-row items-center justify-around p-10"
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
                  icon1={twoWdIcon}
                  icon2={awdIcon}
                  initialValue={carSpecs.power}
                />
                <ControlButtons
                  title={"Aero"}
                  icon1={aeroSideIcon}
                  icon2={aeroTopIcon}
                  initialValue={carSpecs.aero}
                />
                <ControlButtons
                  title={"Traction"}
                  icon1={tractionControlOnIcon}
                  icon2={tractionControlOffIcon}
                  initialValue={carSpecs.traction}
                />
              </div>
            </div>
          </motion.div>

          <div className="relative flex flex-col items-center mb-20">
            <motion.div
              key={currentMode}
              initial="initial"
              animate="animate"
              variants={{
                initial: { y: 200, x: -35, opacity: 0 },
                animate: {
                  y: -80,
                  x: -35,
                  opacity: 1,
                  transition: { duration: 1 },
                },
              }}
            >
              <Image
                src={
                  currentMode === "SPORT+"
                    ? doubleChevronGold
                    : currentMode === "ECO+"
                    ? doubleChevronGreen
                    : doubleChevronBlue
                }
                alt="upchevron"
                height={180}
              />
            </motion.div>
            )
            <motion.div
              className="mr-16 z-0"
              initial="initial"
              animate="animate"
              variants={carAnimation}
            >
              <Image src={carImage} alt="A sleek car, angled view" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecsScreen;
