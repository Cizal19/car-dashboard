import Image from "next/image";
import React, { useState } from "react";

const DualIconButton = ({ title, icon1, icon2 }) => {
  const [selectedIcon, setSelectedIcon] = useState(icon1);

  return (
    <div className="my-3 flex flex-row items-center justify-around text-white">
      <div className="text-lg">{title}</div>
      <div className="flex">
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

export default DualIconButton;
