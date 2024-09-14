"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      style={{ paddingTop: "5.7rem" }}
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 min-h-screen w-full z-[20] bg-cover bg-center bg-no-repeat"
    >
      {/* about section */}

      <div className="flex flex-col gap-5 justify-center text-center md:text-left w-full md:w-1/2">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center justify-center md:justify-start"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="welcome-text text-[13px]">
            front end Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 md:text-5xl text-4xl font-bold leading-[1.1] text-white"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            I’m Mohamed Hassan
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] mx-auto md:mx-0"
        >
          I’m a front-end software engineer specializing in website, mobile, and
          software development. With a focus on creating seamless and engaging
          user experiences, I bring expertise in the latest technologies and
          best practices. Explore my portfolio to see how I turn ideas into
          reality and deliver high-quality solutions.
        </motion.p>
        <motion.a
          href="Mohamed_Hassan_cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variants={slideInFromLeft(1)}
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto md:mx-0"
        >
          Download Cv
        </motion.a>
      </div>
      {/* img section */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="h-full w-full flex items-center justify-center md:w-1/2"
      >
        <Image
          src="/my.png"
          alt="work icon"
          height={650}
          width={650}
          className="object-contain box-shadow"
          style={{
            borderRadius: "35%",
            border: " solid 1px #7042f861",
            marginTop: "1rem",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
