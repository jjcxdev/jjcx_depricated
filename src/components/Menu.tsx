import { FC } from "react";
import Link from "next/link";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`menu ${isOpen ? "menu--open" : ""}`}>
      <ul>
        <li>
          <Link href="/">
            <span onClick={onClose}>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span onClick={onClose}>About</span>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <span onClick={onClose}>Work</span>
          </Link>
        </li>
        <li>
          <span onClick={onClose}>
            <Link href={`${process.env.PUBLIC_URL}/resume_justinchambers.pdf`}>
              Resume
            </Link>
          </span>
        </li>
        <li>
          <span onClick={onClose}>
            <a href="https://github.com/jjcxdev">Github</a>
          </span>
        </li>
        <li>
          <span onClick={onClose}>
            <a href="https://medium.com/@jjcx">Medium</a>
          </span>
        </li>
      </ul>
    </div>
  );
};
