import React from "react";

const RangeDisplay = ({ range, refill }) => {
  return (
    <div className="flex flex-row flex-grow flex-basis-0 items-center justify-center m-2 p-4 bg-black rounded-lg shadow-xl">
      <div className="flex justify-between w-full">
        <div className="text-red-500 font-semibold mr-2">RANGE</div>
        <div className="text-white text-3xl ">{range}</div>
      </div>
      <div className="flex justify-between w-full ml-2">
        <span className="text-red-500 font-semibold mr-2">REFILL</span>
        <span className="text-white text-3xl">{refill}</span>
      </div>
    </div>
  );
};

export default RangeDisplay;
