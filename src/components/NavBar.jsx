import React, { useState } from "react";
import Image from "../functions/Image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function navToggle() {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Image name="logo" />

          <div className="hidden lg:flex font-bold space-x-8">
            <a
              href="/"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features
            </a>
            <a
              href="/"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </a>
            <a
              href="/"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Resources
            </a>
          </div>
        </div>
        <div className="hidden lg:flex items-center spce-x-6 font-bold text-grayishViolet">
          <div className="hover:text-veryDarkViolet">Login</div>
          <a
            href="/"
            className="px-8 py-3 font-bold text-white bg-cyan rounded-full hove:opacity-70"
          >
            Sign up
          </a>
        </div>
        {/* hamburger menu */}
        <button
          id="menu-btn"
          className="block hamburger lg:hidden focus:outline-none"
          type="button"
          onClick={navToggle}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* colapse mobile menu */}
      {isOpen && <div
        id="menu"
        className={ `absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100`}
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <a href="/" className="w-full text-center">
            Features
          </a>
          <a href="/" className="w-full text-center">
            Pricing
          </a>
          <a href="/" className="w-full text-center">
            Resources
          </a>
          <a
            href="/"
            className="w-full pt-6 border-t border-gray-400 text-center"
          >
            Login
          </a>
          <a href="/" className="w-full py-3 text-center rounded-full bg-cyan">
            Sign Up
          </a>
        </div>
      </div>}
    </nav>
  );
};

export default NavBar;
