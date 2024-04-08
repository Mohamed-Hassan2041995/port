import React from "react";
import HeroContent from "../sup/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="  absolute left-0 z-[1] w-full h-full object-cover"
      >
        <source src="./video.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
