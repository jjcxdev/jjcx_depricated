import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  return (
    <nav className="fixed bottom-1 z-50 hidden w-full  overflow-hidden md:block lg:bottom-8">
      <div className="container mx-auto">
        <div className="mx-auto flex h-24 w-full max-w-lg items-center justify-around rounded-full bg-black/20 px-8 text-4xl text-white/50 backdrop-blur-2xl">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex h-16 w-16 cursor-pointer flex-col items-center justify-center"
          >
            <HiHome className="hover:text-pink" />
            <span className="mt-2 text-xs uppercase text-white">Home</span>
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex h-16 w-16 cursor-pointer flex-col items-center justify-center"
          >
            <FaUserCircle className="hover:text-pink" />
            <span className="mt-2 text-xs uppercase text-white">About</span>
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex h-16 w-16 cursor-pointer flex-col items-center justify-center"
          >
            <MdWork className="hover:text-pink" />
            <span className="mt-2 text-xs uppercase text-white">Work</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
