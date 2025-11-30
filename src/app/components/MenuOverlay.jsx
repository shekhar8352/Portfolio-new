import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";

const MenuOverlay = ({ links }) => {
  return (
    <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-blue-500/10">
      <ul className="flex flex-col py-4 px-4 space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              className="block px-4 py-3 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-slate-800/50 transition-all duration-300"
            >
              {link.title}
            </Link>
          </li>
        ))}
        <li className="pt-2">
          <Link
            href="#contact"
            className="block text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Hire Me
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuOverlay;
