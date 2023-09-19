"use client";

import WidthWrapper from "@/components/Common/width-wrapper";
import Link from "next/link";

interface NavLinks {
  label: string;
  path: string;
  icon?: JSX.Element;
}

interface NavProps {
  isTransparent?: boolean;
  tailwindColor?: string;
}

const Navbar = ({ isTransparent, tailwindColor }: NavProps) => {
  const links: NavLinks[] = [
    { label: "Github", path: "#" },
    { label: "Slack", path: "#" },
    { label: "Sign up", path: "#" },
    { label: "Login", path: "#" },
  ];

  return (
    <nav className={`${isTransparent && "bg-transparent"} ${tailwindColor && tailwindColor}`}>
      <WidthWrapper addClass="flex items-center gap-28 justify-between">
        <Link href="/" className="font-bold text-2xl">
          B Gallery<span className="text-purple-600">.</span>
        </Link>

        <input
          type="text"
          className="flex-grow outline-none duration-200 bg-gray-100 px-4 py-2 border-2 border-transparent focus:border-gray-300 rounded-lg"
          placeholder="Search for images"
        />

        <ul className="flex items-center space-x-4 py-6">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.path}
                className={`${
                  idx === links.length - 1 &&
                  "bg-gray-700 duration-200 hover:bg-gray-800 text-white px-5 py-[.3rem] rounded-2xl"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </WidthWrapper>
    </nav>
  );
};

export default Navbar;
