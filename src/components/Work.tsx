import React from "react";
import { SiGithub } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";

export const Work: React.FC = () => {
  return (
    <section>
      <div className="section flex flex-col justify-center text-left" id="work">
        {/* <a id="work" /> */}
        <div className="mt-20 flex  flex-col justify-center">
          <div className="font-poppins bg-gradient-to-r from-pink to-blue bg-clip-text pb-10 text-center text-6xl font-bold text-transparent lg:text-9xl">
            WORK
          </div>
          <div className="flex flex-col gap-10">
            <div className="">
              <WorkCard
                title="JJCX"
                project="website"
                blurb="I decided to include my own portfolio in this section, simply because its been a considerable amount of work. I have made several different itterations up untl this point. It was also my introduction into React. I had built it with vanilla html, css and javascript, but I was encouraged by a friend to learn a framework, and well Next.js/React was it."
                github={["https://github.com/jjcxdev/jjcx"]}
                link="https://www.jjcx.dev"
                languages={["HTML", "CSS", "TS", "REACT", "FIGMA", "AI"]}
                img="/imgs/jjcx_web.jpg"
              />
            </div>
            <div className="">
              <WorkCard
                title="PixlPal"
                project="website"
                blurb="Along with the app itself, I build the PixlPal site. This is a primary requirement for Apple App Store products."
                github={["https://github.com/jjcxdev/pixlpal_web"]}
                link="https://pixlpal.vercel.app"
                languages={["HTML", "CSS", "TS", "REACT", "FIGMA"]}
                img="/imgs/pp.jpg"
              />
            </div>
            <div className="">
              <WorkCard
                title="Fern & Ficus"
                project="website"
                blurb="This site is actively under construction with the client. As they decide which direction they want to go, I am making modifications routinely. This was also a project built in vanilla html, css, js. But after learning so much building my own site in React, I decided to reconfigure this into it as well."
                github={["https://github.com/jjcxdev/fernficus"]}
                link="https://fernficus.netlify.app"
                languages={["HTML", "CSS", "JS", "REACT", "FIGMA"]}
                img="/imgs/ff.jpg"
              />
            </div>
            <div className="">
              <WorkCard
                title="PixlPal"
                project="macOS app"
                blurb="I wanted to make an app that would speed up my productivity when it comes to design. I know there are some apps out there that already do this, but I wanted the challenge of making my own thing. PixlPal is a macOS app that allows you to select any color on your screen and automatically save it to your clipboard. You can choose between HSL, RGB, and HEX for your color format."
                github={["https://github.com/jjcxdev/PixlPal_free"]}
                link={undefined}
                languages={["SWIFT"]}
                img="/imgs/pixlpal_logo_new.png"
                showShadow={false}
              />
            </div>
            <div className="">
              <WorkCard
                title="Auto Dialer"
                project="program"
                blurb="This was a project of spite. Tired of relentless calls from a certain company (even though I am registered with the NDNCL, and requested they stop calling me multiple times over several years), I decided to fight back. After confirming with the CRTC that there were no limitations on how many times I could call a private Canadian company, I went to work and unleashed this fun little program. I may or may not have shut down the AVR system after bombarding them with a call every 5 seconds for 10 minutes, until their system flagged and blocked my outbound number. But its only $1 to buy a new number from Twilio. I haven't used this since, but I keep it around for safe keepings."
                github={["https://github.com/jjcxdev/dialer"]}
                link={undefined}
                languages={["PYTHON"]}
                img="/imgs/dialer.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface WorkCardProps {
  title: string;
  project: string;
  blurb: string;
  github: string[];
  link?: string;
  languages: string[];
  img: string;
  showShadow?: boolean;
}

export const WorkCard: React.FC<WorkCardProps> = ({
  title,
  project,
  blurb,
  github,
  link,
  languages,
  img,
  showShadow = true, // set default value to true
}) => {
  const imgClasses = showShadow
    ? "shadow-lg lg:max-w-md rounded-md "
    : "lg:max-w-md"; // add this line

  return (
    <div className="m-4 my-8 overflow-hidden rounded-md bg-neutral-800 p-4 shadow-lg lg:max-w-6xl ">
      <div className="flex flex-col lg:flex-row">
        <div className="order-2 w-full lg:order-1">
          <div>
            <h3 className="font-poppins text-4xl font-bold uppercase text-neutral-400 lg:pt-8">
              {title}
            </h3>
          </div>
          <div className="">
            <h4 className="font-source  text-cyan-500">{project}</h4>
          </div>
          <div className="font-poppins py-10 pb-2 lg:w-10/12">{blurb}</div>
          <div className="">
            <div className="my-8 flex gap-4 text-4xl text-gray-600 ">
              {github.map((link) => (
                <a key={link} href={link}>
                  <SiGithub className="hover:text-cyan-500" />
                </a>
              ))}
              {link && (
                <a href={link}>
                  <SlGlobe className="hover:text-cyan-500" />
                </a>
              )}
            </div>
            <div className="font-poppins mt-2 flex gap-2">
              {languages.map((language) => (
                <span
                  key={language}
                  className={`rounded-md px-2 py-1 text-sm font-bold ${language.toLowerCase()}`}>
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="order-1 flex content-center items-center justify-center pb-10 lg:order-2">
          {img && (
            <div className="">
              <img src={img} alt={title} className={imgClasses} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
