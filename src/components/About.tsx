import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiReact,
  SiPython,
  SiTypescript,
  SiSwift,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const About: React.FC = () => {
  return (
    <section>
      <div
        className="section flex flex-col justify-center text-center"
        id="about"
      >
        <div className="">
          <div className="font-poppins bg-gradient-to-r from-pink to-blue bg-clip-text text-center text-6xl font-bold  text-transparent lg:text-9xl">
            <span>ABOUT</span>
          </div>
          <div>
            <div>
              <div className="lg:py-20">
                <div className="font-poppins mx-4 mt-6 text-xl font-light text-black lg:m-0">
                  Like most developers there are tools I&apos;m really
                  comfortable with
                </div>
                <div className="mx-4 mt-4 grid grid-cols-5 gap-4">
                  <div className="flex flex-col items-center">
                    <SiHtml5 className="m-4 text-4xl text-black hover:text-pink" />
                    <span className="html font-poppins mt-2 flex gap-2 rounded-md px-2 py-1 text-sm font-bold">
                      HTML
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiCss3 className="m-4 text-4xl text-black hover:text-pink" />
                    <span className="css font-poppins mt-2 flex gap-2 rounded-md px-2 py-1 text-sm font-bold">
                      CSS
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <SiFigma className="m-4 text-4xl text-black hover:text-pink" />
                    <span className="figma font-poppins mt-2 flex gap-2 rounded-md px-2 py-1 text-sm font-bold">
                      FIGMA
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiAdobeillustrator className="m-4 text-4xl text-black hover:text-pink" />
                    <span className="ai font-poppins mt-2 flex gap-2 rounded-md px-2 py-1 text-sm font-bold">
                      AI
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiAdobephotoshop className="m-4 text-4xl text-black hover:text-pink" />
                    <span className="ps font-poppins mt-2 flex gap-2 rounded-md px-2 py-1 text-sm font-bold">
                      PS
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:py-20">
                <div className="font-poppins mx-4 mt-12 text-xl font-light text-black lg:m-0">
                  And some others that I have a decent understanding of
                </div>
                <div className="mx-4 mt-4 grid grid-cols-4 gap-3">
                  <div className="flex flex-col items-center">
                    <SiTypescript className="m-4 text-4xl text-black hover:text-pink" />
                    <span className="ts font-poppins mt-2 flex gap-2 rounded-md px-2 py-1 text-sm font-bold">
                      TS
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiReact className="m-4 text-4xl text-black hover:text-pink" />
                    <span className="react font-poppins mt-2 flex gap-2 rounded-md px-2 py-1 text-sm font-bold">
                      React
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiNextdotjs className="m-4 text-4xl text-black hover:text-pink" />
                    <span className="njs font-poppins mt-2 flex gap-2 rounded-md px-2 py-1 text-sm font-bold">
                      Next.js
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiTailwindcss className="m-4 text-4xl text-black hover:text-pink" />
                    <span className="tw font-poppins mt-2 flex gap-2 rounded-md px-2 py-1 text-sm font-bold">
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:py-20">
                <div className="font-poppins mx-4 mt-12 text-xl font-light text-black lg:m-0">
                  Then there&apos;s the ones I just like to tinker with
                </div>
                <div className="mx-4 mt-4 grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center">
                    <SiPython className="m-4 text-4xl text-black hover:text-pink" />
                    <span className="python font-poppins mt-2 flex gap-2 rounded-md px-2 py-1 text-sm font-bold">
                      Python
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiJavascript className="m-4 text-4xl text-black hover:text-pink" />
                    <span className="js font-poppins mt-2 flex gap-2 rounded-md px-2 py-1 text-sm font-bold">
                      JS
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiSwift className="m-4 text-4xl text-black hover:text-pink" />
                    <span className="swift font-poppins mt-2 flex gap-2 rounded-md px-2 py-1 text-sm font-bold">
                      Swift
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
