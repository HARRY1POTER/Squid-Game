import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="text-center">
        <p>&copy; {currentYear} Squid Game</p>
      </footer>
    </div>
  );
};

export default Footer;
