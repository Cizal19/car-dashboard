import React from "react";
import RangeDisplay from "./RangeDisplay";
import ModeDisplay from "./ModeDisplay";
import carImage from "../../../public/images/ferrari-top.png";
import Image from "next/image";

const RangeScreen = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className=" shadow-md p-10 rounded-xl text-white  bg-[url('/images/red-black-bg2.png')] bg-contain">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl ">NIOEP9</h1>
        </div>
        <div className="flex flex-row items-center p-10">
          <div>
            <RangeDisplay range={127} refill={45} />
            <ModeDisplay mode="TOUR" value={85} />
            <ModeDisplay mode="ECO+" value={127} />
            <ModeDisplay mode="SPORT+" value={57} />
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
