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
    { label: "Github", path: "#", icon: <i className="ri-github-line text-base"></i> },
    { label: "Slack", path: "#", icon: <i className="ri-slack-line text-base"></i> },
    { label: "Sign up", path: "#" },
    { label: "Login", path: "#" },
  ];

  return (
    <nav className={`${isTransparent && "bg-transparent"} ${tailwindColor && tailwindColor}`}>
      <WidthWrapper addClass="flex items-center gap-28 justify-between">
        <Link href="/" className="text-lg">
          BG<span className="text-purple-600">.</span>
        </Link>

        <ul className="flex items-center space-x-4 py-3">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.path}
                className={`${
                  idx === links.length - 1 &&
                  "bg-gray-700 duration-200 hover:bg-gray-800 text-white px-5 text-sm py-[.3rem] rounded-2xl"
                }`}
              >
                {link.icon ? link.icon : link.label}
              </Link>
            </li>
          ))}
        </ul>
      </WidthWrapper>
    </nav>
  );
};

export default Navbar;
