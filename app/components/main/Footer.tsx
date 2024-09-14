import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Socials } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-200 py-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-0  z-[30]">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="font-bold text-lg mb-2">About</h2>
              <p className="mb-2">
                <a
                  href="#about-me"
                  className="text-sm text-gray-400 hover:underline"
                >
                  Contact me{" "}
                </a>
              </p>
              <a
                href="mailto:mohammed.hassan41995@gmail.com"
                className="flex items-center justify-center md:justify-start text-sm text-gray-400 hover:underline"
              >
                <AiOutlineMail className="mr-2" />
                mohammed.hassan41995@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right space-y-6 md:space-y-0  z-[30]">
            <div className="flex flex-col items-center md:items-end">
              <h2 className="font-bold text-lg mb-2">Social Media</h2>
              <div className="flex space-x-4 justify-center md:justify-end">
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
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500 ">
          &copy; Mohamed Hassan 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
