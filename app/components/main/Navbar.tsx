"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/MOHAMED HASSAN.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>
        <div className="hidden md:flex w-[500px] h-full items-center justify-between md:mr-5">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer mx-2">
              About me
            </a>
            <a href="#Skills" className="cursor-pointer mx-2">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer mx-2">
              Projects
            </a>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={handleNav}>
            {nav ? (
              <AiOutlineClose size={24} className="text-gray-300" />
            ) : (
              <AiOutlineMenu size={24} className="text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          nav ? "flex" : "hidden"
        } md:hidden absolute top-[65px] left-0 w-full bg-[#1a1a2e] backdrop-blur-md z-50 flex-col items-center shadow-lg shadow-[#2a0e61]/50`}
      >
        <a
          href="#about-me"
          className="w-full text-center py-4 border-b border-[#7042f861] text-gray-200"
          onClick={handleNav}
        >
          About me
        </a>
        <a
          href="#Skills"
          className="w-full text-center py-4 border-b border-[#7042f861] text-gray-200"
          onClick={handleNav}
        >
          Skills
        </a>
        <a
          href="#projects"
          className="w-full text-center py-4 text-gray-200"
          onClick={handleNav}
        >
          Projects
        </a>
      </div>
    </div>
  );
};

export default Navbar;
