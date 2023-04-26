import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { Link } from "react-scroll";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsMedium } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";

let tabs = [
  {
    id: "home",
    label: (
      <span className="flex items-center justify-center gap-2 hover:text-neutral-300">
        <HiHome className="text-4xl" />
        <span className="text-white mix-blend-exclusion">Home</span>
      </span>
    ),
  },
  {
    id: "about",
    label: (
      <span className="flex items-center justify-center gap-2 hover:text-neutral-300">
        <FaUserCircle className=" text-4xl" />
        <span className="text-white mix-blend-exclusion ">About</span>
      </span>
    ),
  },
  {
    id: "work",
    label: (
      <span className="flex items-center justify-center gap-2 hover:text-neutral-300">
        <MdWork className=" text-4xl" />
        <span className="text-white mix-blend-exclusion ">Work</span>
      </span>
    ),
  },
  {
    id: "resume",
    label: (
      <span className="flex items-center justify-center gap-2 hover:text-neutral-300">
        <IoDocumentTextOutline className=" text-4xl" />
        <span className="text-white mix-blend-exclusion ">Resume</span>
      </span>
    ),
    link: "/resume_justinchambers.pdf",
  },

  {
    id: "medium",
    label: (
      <span className="flex items-center justify-center gap-2 hover:text-neutral-300">
        <BsMedium className=" text-4xl" />
        <span className="text-white mix-blend-exclusion ">Medium</span>
      </span>
    ),
    link: "https://medium.com/@jjcx",
  },

  {
    id: "github",
    label: (
      <span className="flex items-center justify-center gap-2 hover:text-neutral-300">
        <BsGithub className=" text-4xl" />
        <span className="text-neutral-400 mix-blend-exclusion ">Github</span>
      </span>
    ),
    link: "https://github.com/jjcxdev",
  },
];

export default function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <nav className="fixed bottom-2 z-50 hidden w-full overflow-hidden lg:bottom-8 lg:block">
      <div className="container mx-auto">
        <div className="mx-auto flex h-16 w-full max-w-[990px] items-center justify-around rounded-full bg-cyan-500/25 px-4 text-4xl text-white/50 backdrop-blur-2xl">
          <div>
            <div className="flex gap-24 space-x-1">
              {tabs.map((tab) => (
                <Link
                  to={tab.id}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="flex h-16 w-16 cursor-pointer flex-col items-center justify-center"
                  key={tab.id}>
                  <button
                    onClick={() => {
                      if (tab.id === "medium") {
                        window.open(tab.link, "_blank");
                      } else {
                        window.open(tab.link, "_blank");
                      }
                      setActiveTab(tab.id);
                    }}
                    className={`${
                      activeTab === tab.id ? "" : ""
                    } relative px-8 py-1.5 text-center text-sm font-medium text-white outline-2 outline-sky-400 transition focus-visible:outline`}>
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-cyan-500/25"
                        style={{ borderRadius: 9999 }}
                        transition={{
                          type: "spring",
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span className="mix-blend-subtract relative z-10 flex items-center justify-center gap-2">
                      {tab.label}
                    </span>
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
