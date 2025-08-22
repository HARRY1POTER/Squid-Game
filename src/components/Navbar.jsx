import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Characters", "Games", "Gallery", "Join"];

  return (
    <nav className="bg-black text-white border-b-2 border-pink-600 sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-pink-600 text-xl font-bold">🦑 Squid Game</div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex gap-6 text-sm">
          {navItems.map((item, index) => (
            <li key={item}>
              <a
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="hover:text-pink-500 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */} 
      <div
        className={`md:hidden px-6 pb-4 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 text-sm">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-pink-500 block transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
