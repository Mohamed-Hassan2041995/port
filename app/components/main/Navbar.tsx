import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="  cursor-pointer hover:animate-slowspin "
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
          WebDev
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer ">
              About me
            </a>
            <a href="#Skills" className="cursor-pointer ">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer ">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((Social) => (
            <a
              href={Social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={Social.name}
            >
              <Image
                src={Social.src}
                alt={Social.name}
                key={Social.name}
                width={24}
                height={24}
                className=" cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
