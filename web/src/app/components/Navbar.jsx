import React from "react";
import Link from "next/link";
import Image from "next/image";
import electricPumpIcon from "../../../public/icons/electric-pump.svg";
import flagIcon from "../../../public/icons/flag.svg";
import circleLocationIcon from "../../../public/icons/circle-location-arrow.svg";
import gaugeIcon from "../../../public/icons/gauge.svg";

const Navbar = () => {
  const navigationItems = [
    {
      label: "Fuel",
      icon: electricPumpIcon,
      destination: "/rangescreen",
    },
    {
      label: "Flag",
      icon: flagIcon,
      destination: "/specsscreen",
    },
    {
      label: "Map",
      icon: circleLocationIcon,
      destination: "/",
    },
    {
      label: "Gauges",
      icon: gaugeIcon,
      destination: "/",
    },
  ];

  return (
    <div className="fixed flex flex-row bg-red-600 rounded-xl p-4 shadow-2xl">
      {navigationItems.map((item) => (
        <div key={item.label}>
          <Link legacyBehavior href={item.destination}>
            <a className="flex flex-col items-center justify-center p-2 hover:bg-black rounded-lg transition duration-300 ease-in-out">
              <Image src={item.icon} alt={item.label} width={40} height={40} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
