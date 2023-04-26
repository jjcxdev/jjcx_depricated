import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsMedium } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Hero() {
  return (
    <div
      className="section flex h-screen flex-col justify-center text-center"
      id="home">
      <h1 className="font-poppins mb-4 flex flex-col bg-gradient-to-r from-pink to-blue bg-clip-text text-left text-6xl font-bold uppercase text-transparent md:text-8xl lg:text-9xl">
        Justin <span className="">Chambers</span>
      </h1>
      <div className="relative h-[50px] w-full lg:h-[100px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <TypeAnimation
            sequence={[
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
            speed={70}
            repeat={Infinity}
            className="font-poppins flex justify-center text-3xl font-bold uppercase text-white lg:text-6xl"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div></div>
        <div className="mt-4 flex w-full items-baseline justify-end gap-2 text-right text-slate-500">
          ...and
          <span className="font-poppins text-xl font-bold uppercase text-cyan-500 lg:text-7xl">
            Frontend Developer
          </span>
        </div>
        <div></div>
      </div>
      <div className="w-full px-10 md:block md:px-52 lg:hidden">
        <div className="mt-12 flex w-full  items-center justify-between text-4xl lg:p-0">
          <button
            onClick={() => window.open("/resume_justinchambers.pdf", "_blank")}
            className="flex h-12 cursor-pointer flex-col items-center justify-center rounded-full border-2 border-cyan-900 bg-transparent px-10 text-gray-100 shadow-md hover:bg-gray-600">
            <span className="text-sm font-bold uppercase">Resume</span>
          </button>

          <div className="flex gap-2 lg:gap-8">
            <button
              onClick={() => window.open("https://medium.com/@jjcx", "_blank")}
              className="flex cursor-pointer flex-col items-center justify-center rounded-full bg-transparent shadow-md">
              <BsMedium className="p-1 text-5xl text-gray-100 hover:text-gray-200" />
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/jjcxdev", "_blank")
              }
              className="flex cursor-pointer flex-col items-center justify-center rounded-full bg-transparent shadow-md">
              <BsGithub className="p-1 text-5xl text-gray-100 hover:text-gray-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
