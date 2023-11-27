"use client";

import {useState} from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-main text-white">
      <div className="flex justify-between mx-5 items-center py-2">
        <h1>Idriss Kone</h1>
        <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />

        <section
          className={`fixed top-10 right-0 min-h-screen bg-main text-white w-64 z-30 transform transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-5">
            <h2 className="text-2xl mb-5">Menu</h2>
            <ul>
              <li className="mb-2">Home</li>
              <li className="mb-2">About</li>
              <li className="mb-2">Services</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>
        </section>
      </div>
    </nav>
  );
}

function HamburgerMenu({toggleMenu, isOpen}) {
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
