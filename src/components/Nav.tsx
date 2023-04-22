import React from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Nav: React.FC = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full overflow-hidden bg-white bg-opacity-50 backdrop-blur">
      <div className="flex h-10 content-center justify-between px-20 align-middle">
        <div className="flex items-center">
          <FiMenu className="text-lg" />
        </div>
        <div className="flex items-center">
          <Link href="/" passHref>
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1674.15 521.3">
              <path d="M5.26,399.28l72.25-91.87h53.11c64.59,0,91.39-10.53,91.39-44.98V79.18h111.01V253.83c0,97.13-67.46,145.46-202.39,145.46H5.26Z" />
              <path d="M364.12,399.28l72.25-91.87h53.11c64.59,0,91.39-10.53,91.39-44.98V79.18h111.01V253.83c0,97.13-67.46,145.46-202.39,145.46h-125.36Z" />
              <path d="M933.02,399.28c-112.44,0-195.22-70.33-195.22-163.16s82.78-156.94,195.22-156.94h229.67l-70.81,93.3h-158.85c-51.2,0-84.21,16.27-84.21,63.64s33.01,71.29,84.21,71.29h229.67l-70.81,91.87h-158.85Z" />
              <path d="M1512.44,399.28l-97.61-98.56-101.44,98.56h-137.8l100.96-95.22c50.72-47.85,66.99-60.29,74.64-65.55-7.66-6.22-23.92-18.18-67.94-60.77l-102.87-98.57h153.59l91.87,93.3,92.82-93.3h143.06l-107.18,100c-36.84,34.45-52.63,47.37-62.68,55.02,13.88,9.09,33.97,26.32,78.95,70.81l97.61,94.26h-155.98Z" />
            </svg>
          </Link>
        </div>
        <div></div>
      </div>

      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-pink to-transparent"></div>
    </nav>
  );
};

export default Nav;
