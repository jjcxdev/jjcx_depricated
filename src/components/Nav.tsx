import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full overflow-hidden bg-white bg-opacity-50 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <div className="flex-grow-0">
            <Link href="/" passHref>
              <div className=" text-center font-ethnocentric text-xl text-black">
                JJCX
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-pink to-transparent"></div>
    </nav>
  );
};

export default Nav;
