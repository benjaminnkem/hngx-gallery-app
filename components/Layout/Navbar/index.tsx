"use client";

import WidthWrapper from "@/components/Common/width-wrapper";
import Link from "next/link";

interface NavLinks {
  label: string;
  path: string;
  icon?: JSX.Element;
}

const Navbar = () => {
  const links: NavLinks[] = [
    { label: "Github", path: "#" },
    { label: "Slack", path: "#" },
    { label: "Sign up", path: "#" },
    { label: "Login", path: "#" },
  ];

  return (
    <nav>
      <WidthWrapper addClass="flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-slate-800">
          B Gallery<span className="text-purple-600">.</span>
        </Link>

        <ul className="flex items-center space-x-4 py-6">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.path}
                className={`${
                  idx === links.length - 1 &&
                  "bg-slate-800 duration-200 hover:bg-slate-700 text-white px-5 py-[.3rem] rounded-2xl"
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
