import React from "react";

// Define an array of objects for your navigation items
const navItems = [
  { href: "#about", name: "About" },
  { href: "#projects", name: "Projects" },
  { href: "#digital-garden", name: "Garden" } // Added Digital Garden link
];

const NavLinks = ({ onClick }) => (
  <>
    {navItems.map((item) => (
      <a
        key={item.name}
        href={item.href}
        onClick={onClick}
        className="hover:text-teal-400 transition focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-[#0F172A] rounded px-2 py-1"
      >
        {item.name}
      </a>
    ))}
  </>
);

export default NavLinks;
