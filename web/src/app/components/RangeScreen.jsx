"use client";
import React, { useState, useEffect } from "react";
import RangeDisplay from "./RangeDisplay";
import ModeDisplay from "./ModeDisplay";
import carImage from "../../../public/images/ferrari-top.png";
import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import axios from "axios";

const RangeScreen = () => {
  // State for storing car specifications, current mode, and range
  const [carSpecs, setCarSpecs] = useState([]);
  const [currentMode, setCurrentMode] = useState("");
  const [range, setRange] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Authenticate and fetch car specifications
  useEffect(() => {
    const authenticateAndGetCarSpecifications = async () => {
      try {
        // No credentials are sent since the backend automatically provides a token
        const authResponse = await axios.post(
          "https://car-dashboard-i83h.onrender.com/api/auth/authenticate"
        );
        const { token } = authResponse.data;
        localStorage.setItem("token", token); // Storing the token for future requests

        // After successful authentication,fetch car specifications
        await fetchCarSpecifications(token);
      } catch (error) {
        console.error("Error during authentication or data fetching", error);
      }
      setIsLoading(false);
    };

    authenticateAndGetCarSpecifications();
  }, []);

  // Fetch car specifications from the API using the token
  const fetchCarSpecifications = async (token) => {
    try {
      const response = await axios.get(
        "https://car-dashboard-i83h.onrender.com/api/cars",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setCarSpecs(response.data);

      // Set initial mode and range if data is available
      if (response.data.length > 0) {
        setCurrentMode(response.data[0].mode);
        setRange(response.data[0].range);
      }
    } catch (error) {
      console.error("Failed to fetch car specifications", error);
    }
  };

  // Update mode and range based on user selection
  const updateMode = (mode) => {
    const selectedSpec = carSpecs.find((spec) => spec.mode === mode);
    if (selectedSpec) {
      setCurrentMode(selectedSpec.mode);
      setRange(selectedSpec.range);
    }
  };

  // Component animation variants
  const carAnimation = {
    initial: { rotate: 0, scale: 1.8 },
    animate: { rotate: 30, scale: 1.8 },
    transition: { duration: 5000 },
  };

  const containerVariants = {
    hidden: { x: "-5vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { ease: "easeInOut" } },
    exit: {
      x: "-5vw",
      opacity: 0,
      transition: { ease: "easeInOut", duration: 0.2 },
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
          className="flex flex-row items-center p-10"
          style={{ width: "900px", height: "550px" }}
        >
          {isLoading ? (
            <div
              className="flex flex-row items-center p-10"
              style={{ width: "800px", height: "600px" }}
            >
              {" "}
            </div>
          ) : (
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
                {carSpecs.map((spec) => (
                  <ModeDisplay
                    key={spec.mode}
                    mode={spec.mode}
                    value={spec.range}
                    isActive={currentMode === spec.mode}
                    onClick={() => updateMode(spec.mode)}
                  />
                ))}
              </div>
            </motion.div>
          )}
          <motion.div
            className="mr-20"
            initial="initial"
            animate="animate"
            variants={carAnimation}
          >
            <Image src={carImage} alt="A sleek car, angled view" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RangeScreen;
