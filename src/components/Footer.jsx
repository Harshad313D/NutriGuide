import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full px-10 text-white py-4">
      <div className="container flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} NutriGuide. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
