"use client";
import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center p-4">
      <motion.div
        variants={slideInFromTop}
        className="welcome-box py-2 px-4 border border-[#7042f88b] opacity-[0.9] mb-4"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
        <h1 className="welcome-text text-sm md:text-base">
          Think better with Next js 13
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-lg md:text-2xl lg:text-3xl text-white font-medium mt-2 text-center mb-4"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-base md:text-lg lg:text-xl cursive text-gray-200 mb-10 text-center mt-2"
      >
        Never miss a task deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
