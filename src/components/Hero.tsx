import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="section flex h-screen flex-col justify-center bg-white text-center"
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
      <h1 className="font-source text-xl font-light lowercase text-black">
        but you can call me
      </h1>
      <span className="font-ethnocentric text-7xl font-black uppercase text-pink">
        Justin
      </span>{" "}
    </div>
  );
};

export default Hero;
