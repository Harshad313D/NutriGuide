import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full px-4 py-4 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <p className="text-sm mb-4 lg:mb-0">
          &copy; {new Date().getFullYear()} NutriGuide. All rights reserved.
        </p>
        {/* <div className="flex flex-col lg:flex-row justify-center space-y-2 lg:space-y-0 lg:space-x-4">
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
        </div> */}
        <p className="text-sm mt-4 lg:mt-0">Made with ❤️! from India.</p>
      </div>
    </footer>
  );
};

export default Footer;
