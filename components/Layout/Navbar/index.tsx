"use client";

import WidthWrapper from "@/components/Common/width-wrapper";
import { useUser } from "@/lib/contexts/UserProvider";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface NavLinks {
  label: string;
  path: string;
  icon?: JSX.Element;
  external?: boolean;
}

interface NavProps {
  isTransparent?: boolean;
  tailwindColor?: string;
}

const Navbar = ({ isTransparent, tailwindColor }: NavProps) => {
  const { name } = useUser();

  const links: NavLinks[] = [
    {
      label: "Github",
      path: "https://github.com/benjaminnkem/hngx-gallery-app",
      icon: <i className="ri-github-line text-base"></i>,
      external: true,
    },
    { label: "Slack", path: "#", icon: <i className="ri-slack-line text-base"></i>, external: true },
  ];

  const actionLinks: NavLinks[] = [
    { label: "Sign up", path: "/signup" },
    { label: "Login", path: "/login" },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-[1000] ${isTransparent && "bg-transparent"} ${tailwindColor && tailwindColor}`}
    >
      <WidthWrapper addClass="flex items-center gap-28 justify-between">
        <Link href="/" className="text-lg">
          BG<span className="text-purple-600">.</span>
        </Link>

        <ul className="flex items-center space-x-4 py-3">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link href={link.path} target={link.external ? "_blank" : "_self"}>
                {link.icon ? link.icon : link.label}
              </Link>
            </li>
          ))}

          {name ? (
            <li>
              <button
                className="bg-gray-700 duration-200 flex-shrink-0 hover:bg-gray-800 text-white px-5 text-sm py-[.3rem] cursor-pointer rounded-2xl"
                onClick={() => signOut()}
              >
                Logout <i className="ri-logout-box-r-line"></i>
              </button>
            </li>
          ) : (
            <>
              {actionLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.path}
                    className={`${
                      idx === links.length - 1 &&
                      "bg-gray-700 duration-200 flex-shrink-0 hover:bg-gray-800 text-white px-5 text-sm py-[.3rem] rounded-2xl"
                    }`}
                    target={link.external ? "_blank" : "_self"}
                  >
                    {link.icon ? link.icon : link.label}
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
      </WidthWrapper>
    </nav>
  );
};

export default Navbar;
