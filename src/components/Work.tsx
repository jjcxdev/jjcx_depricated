import React from "react";
import { SiGithub } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";

const Work: React.FC = () => {
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
                blurb="I decided to include my own portfolio in this section, simply because its been a considerable amount of work. I have made several different itteractions up untl this point. It was also my introduction into React. I had built it with vanilla html, css and javascript, but I was encouraged by a friend to learn a framework, and well Next.js/React was it."
                github={["https://github.com/jjcxdev/jjcx"]}
                link={["https://www.jjcx.dev"]}
                languages={["HTML", "CSS", "TS", "REACT", "FIGMA", "AI"]}
                img="/imgs/jjcx_web.jpg"
              />
            </div>
            <div className="">
              <WorkCard
                title="Fern & Ficus"
                project="website"
                blurb="This site is actively under construction with the client. As they decide which direction they want to go, I am making modifications routinely. This was also a project built in vanilla html, css, js. But after learning so much building my own site in React, I decided to reconfigure this into it as well."
                github={["https://github.com/jjcxdev/fernficus"]}
                link={["https://fernficus.netlify.app"]}
                languages={["HTML", "CSS", "JS", "REACT", "FIGMA"]}
                img="/imgs/ff.jpg"
              />
            </div>
            <div className="">
              <WorkCard
                title="PixlPal"
                project="macOS app"
                blurb="I wanted to make an app that would speed up my productivity when it comes to design. I know there are some apps out there that already do this, but I wanted the challenge of making my own thing. PixlPal is a macOS app that allows you to select any color on your screen and automatically save it to your clipboard. You can choose between HSL, RGB, and HEX for your color format."
                github={["https://github.com/jjcxdev/PixlPal"]}
                link={[]}
                languages={["SWIFT"]}
                img="/imgs/pixl.jpg"
              />
            </div>
            <div className="">
              <WorkCard
                title="PixlPal"
                project="website"
                blurb="Along with the app itself, I build the PixlPal site. This is a primary requirement for Apple App Store products, and hopefully after I fix a few bugs I'll be able to resubmit and have it distributed on the App Store."
                github={["https://github.com/jjcxdev/pixlpal_web"]}
                link={["https://pixlpal.vercel.app"]}
                languages={["HTML", "CSS", "TS", "REACT", "FIGMA"]}
                img="/imgs/pp.jpg"
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
  link: string[];
  languages: string[];
  img: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  project,
  blurb,
  github,
  link,
  languages,
  img,
}) => {
  return (
    <div className="m-4 my-8 overflow-hidden rounded-md p-4 shadow-lg lg:max-w-6xl ">
      <div className="flex flex-col lg:flex-row">
        <div className="order-2 w-full lg:order-1">
          <div>
            <h3 className="font-poppins text-4xl font-bold uppercase lg:pt-8">
              {title}
            </h3>
          </div>
          <div className="">
            <h4 className="font-source  text-pink">{project}</h4>
          </div>
          <div className="font-poppins py-10 pb-2 lg:w-10/12">{blurb}</div>
          <div className="">
            <div className="my-8 flex gap-4 text-4xl text-gray-600 ">
              {github.map((link) => (
                <a key={link} href={link}>
                  <SiGithub className="hover:text-pink" />
                </a>
              ))}
              {link.map((link) => (
                <a key={link} href={link}>
                  <SlGlobe className="hover:text-pink" />
                </a>
              ))}
            </div>
            <div className="font-poppins mt-2 flex gap-2">
              {languages.map((language) => (
                <span
                  key={language}
                  className={`rounded-md px-2 py-1 text-sm font-bold ${language.toLowerCase()}`}
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="order-1 flex content-center items-center justify-center pb-10 lg:order-2">
          {img && (
            <div className="">
              <img src={img} alt={title} className=" shadow-lg lg:max-w-2xl" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
