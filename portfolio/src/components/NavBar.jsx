"use client";

import {useState} from "react";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="w-full bg-main text-white">
      <div className="flex justify-between mx-5 items-center py-2">
        <h1>Idriss Kone</h1>
        <HamburgerMenu />
      </div>
    </nav>
  );
}

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="w-10 h-6 flex flex-col justify-between cursor-pointer"
      onClick={toggleMenu}
    >
      <div
        className={`h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      ></div>
      <div
        className={`h-0.5 w-full bg-white transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      ></div>
    </div>
  );
}
