import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="fixed left-0 top-0 z-50 w-full overflow-hidden bg-black bg-opacity-50 backdrop-blur">
      <div className="flex h-10 content-center justify-between px-10 align-middle md:justify-center">
        {/* EMPTY DIV */}
        <div></div>
        {/* LOGO */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/jjcx_logo.svg"
              width={75}
              height={75}
              alt="jjcx"
              className="logo"></Image>
          </Link>
        </div>
        {/* HAMBURGER BUTTON FOR MOBILE */}
        <div className="flex items-center md:hidden">
          <button
            className="flex items-center"
            onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <AiOutlineClose className="text-xl text-black" />
            ) : (
              <FiMenu className="text-xl text-black" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`mt-8 flex-1 justify-self-center md:hidden ${
          navbar ? "block p-12 md:p-0" : "hidden"
        }`}>
        <ul className="h-screen items-center justify-center md:hidden">
          <Link href="/" onClick={() => setNavbar(!navbar)}>
            <li className="flex justify-center border-b-2  border-b-blue py-10 text-center text-xl text-cyan-500 hover:bg-cyan-500 hover:text-white md:border-b-0 md:px-6 lg:hidden">
              Home
            </li>
          </Link>
          <Link href="#about" onClick={() => setNavbar(!navbar)}>
            <li className="flex justify-center border-b-2 py-10 text-center text-xl text-cyan-500 hover:bg-cyan-500 hover:text-white md:border-b-0 md:px-6 lg:hidden">
              About
            </li>
          </Link>
          <Link href="#work" onClick={() => setNavbar(!navbar)}>
            <li className="flex justify-center border-b-2 py-10 text-center text-xl text-cyan-500 hover:bg-cyan-500 hover:text-white md:border-b-0 md:px-6 lg:hidden">
              Work
            </li>
          </Link>
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
    </nav>
  );
}

export default NavBar;
