"use client";

import {useState} from "react";

const HamburgerMenu = ({ toggleMenu, isOpen }) => {
  return (
    <button
      onClick={toggleMenu}
      className="flex flex-col justify-center items-center w-8 h-8 lg:hidden"
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
    <nav className="w-full text-white bg-main lg:w-1/6 lg:flex lg:flex-col lg:items-center lg:justify-center">
      <div className="flex justify-between items-center py-3 mx-5 mlg:flex-row-reverse">
        <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
        <div className="">
          <h2 className="text-3xl font-bold tracking-widest uppercase lg:mb-5">Idriss</h2>
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
