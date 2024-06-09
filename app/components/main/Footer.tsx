import React from "react";
import { RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full h-full flex flex-col items-center justify-center m-auto  ">
        <div className=" w-full h-full flex flex-row items-center justify-around flex-wrap z-[30]">
          <div className="min-w[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] "> Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px] "> Github </span>
            </p>
          </div>

          <div className="min-w[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] "> Social Media </div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px] "> Instagram </span>
            </p>
          </div>

          <div className="min-w[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] "> About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href=" #about-me" className="text-[15px] ml-[6px] ">
                {" "}
                Learning about me{" "}
              </a>
            </p>
            <a
              href="mailto:mohammed.hassan41995@gmail.com"
              className="flex items-center my-2 cursor-pointer"
            >
              <AiOutlineMail />
              <span className="text-[15px] ml-[6px] ">
                mohammed.hassan41995@gmail.com
              </span>
            </a>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center z-[30]">
          &copy; WebDev 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
