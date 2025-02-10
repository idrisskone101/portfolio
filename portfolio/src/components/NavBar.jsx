"use client";

import {useState} from "react";

const HamburgerMenu = ({ toggleMenu, isOpen }) => {
  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden flex flex-col justify-center items-center w-8 h-8"
    >
      <span
        className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-main text-white lg:w-1/6 lg:flex lg:flex-col lg:items-center lg:justify-center">
      <div className="flex mlg:flex-row-reverse justify-between mx-5 items-center py-3">
        <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
        <div className="">
          <h2 className="lg:mb-5">Idriss Kone</h2>
          <ul className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
            <li className="mb-2">Home</li>
            <li className="mb-2">About</li>
            <li className="mb-2">Services</li>
            <li className="mb-2">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
