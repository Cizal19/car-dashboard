import React from "react";

const RangeDisplay = ({ range, refill }) => {
  return (
    <div className="flex flex-row items-center justify-center m-2 p-4 bg-black rounded-lg shadow-xl">
      <div className="flex justify-between w-full mr-2">
        <span className="text-red-500 font-semibold mr-2">RANGE</span>
        <span className="text-white text-3xl">{range}</span>
      </div>
      <div className="flex justify-between w-full ">
        <span className="text-red-500 font-semibold">REFILL</span>
        <span className="text-white text-3xl">{refill}</span>
      </div>
    </div>
  );
};

export default RangeDisplay;
