import { Frontend_skill } from "@/constants";
import React from "react";
import SkillDataProvider from "../sup/SkillDataProvider";
import SkillText from "../sup/SkillText";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 md:pb-40 lg:pb-60 py-10 md:py-20 lg:py-32"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      <div className="flex flex-wrap justify-around items-center mt-4 gap-5">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="absolute inset-0 z-[-10] opacity-30">
        <div className="w-full h-full flex items-center justify-center bg-cover">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
