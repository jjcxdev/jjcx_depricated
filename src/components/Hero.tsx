import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsMedium } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Hero = () => {
  return (
    <div
      className="section flex h-screen flex-col justify-center text-center"
      id="home"
    >
      <div className="relative h-[150px] w-full lg:h-[300px]">
        <div className="absolute h-full w-full">
          <TypeAnimation
            sequence={[
              "frontend developer",
              500,
              "problem solver",
              500,
              "critical thinker",
              500,
              "musician",
              500,
              "creator",
              500,
              "liverpool supporter",
              500,
            ]}
            cursor={false}
            speed={80}
            repeat={Infinity}
            className="font-poppins gradient-text flex justify-center text-6xl font-bold uppercase lg:text-9xl"
          />
        </div>
      </div>
      <h1 className="font-poppins hero mb-4 text-4xl font-light uppercase lg:text-7xl">
        Justin Chambers
      </h1>
      <div className="flex w-full max-w-lg items-center justify-between px-10 text-4xl lg:p-0">
        <button
          onClick={() => window.open("/resume_justinchambers.pdf", "_blank")}
          className="flex h-12 cursor-pointer flex-col items-center justify-center rounded-full bg-cyan-500 px-10 text-white shadow-md hover:bg-pink"
        >
          <span className="text-sm font-bold uppercase">Resume</span>
        </button>

        <div className="flex gap-2 lg:gap-8">
          <button
            onClick={() => window.open("https://github.com/jjcxdev", "_blank")}
            className="flex cursor-pointer flex-col items-center justify-center rounded-md bg-white shadow-md"
          >
            <BsGithub className="p-4 text-7xl text-cyan-500 hover:text-pink lg:text-8xl" />
          </button>

          <button
            onClick={() => window.open("https://medium.com/@jjcx", "_blank")}
            className="flex cursor-pointer flex-col items-center justify-center rounded-md bg-white shadow-md"
          >
            <BsMedium className="p-4 text-7xl text-cyan-500 hover:text-pink lg:text-8xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
