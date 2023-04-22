import React from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

const Nav: React.FC = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full overflow-hidden bg-white bg-opacity-50 backdrop-blur">
      <div className="flex h-10 content-center justify-between px-20 align-middle">
        <div className="flex items-center">
          <FiMenu className="text-lg" />
        </div>
        <div className="flex items-center">
          <Link href="/" passHref>
            <Image
              src="/jjcx_logo.svg"
              width={75}
              height={75}
              alt="jjcx"
            ></Image>
          </Link>
        </div>
        <div></div>
      </div>

      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-pink to-transparent"></div>
    </nav>
  );
};

export default Nav;
