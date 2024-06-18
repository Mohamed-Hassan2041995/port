"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full relative">
      {/* العنوان الرئيسي */}
      <div className="absolute top-0 w-full z-[20] p-4">
        <motion.div
          variants={slideInFromTop}
          className="text-2xl md:text-4xl lg:text-5xl font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>
          Security
        </motion.div>
      </div>
      {/* القفل والنص */}
      <div className="flex flex-col items-center justify-center mt-20 md:mt-0 z-[20] w-auto h-auto relative">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="lock top"
            width={50}
            height={50}
            className="w-[40px] md:w-[50px] translate-y-2 transition-all duration-200 group-hover:translate-y-5"
          />
          <Image
            src="/LockMain.png"
            alt="lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>
        <div className="welcome-box px-4 py-2 z-[20] border my-4 border-[#7042f88b] opacity-[0.9]">
          <h1 className="welcome-text text-xs md:text-sm">Encryption</h1>
        </div>
      </div>
      {/* النص السفلي */}
      <div className="absolute bottom-4 z-[20] px-2">
        <div className="cursive text-base md:text-lg font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>
      {/* الفيديو في الخلفية */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
