// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [scrolling, setScrolling] = useState(false);
//   const location = useLocation();

//   const toggleDropdown = (section) => {
//     setDropdownOpen(dropdownOpen === section ? null : section);
//   };

//   // Determine if the current route is the home page
//   const isHomePage = location.pathname === "/";

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-md transition-colors duration-300 ${
//         isHomePage && !scrolling
//           ? "   bg-opacity-30 backdrop-blur-lg"
//           : "bg-gray-800"
//       }`}
//     >
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img src={logo} className="h-8" alt="NutriGuide Logo" />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
//             NutriGuide
//           </span>
//         </a>
//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <button
//             type="button"
//             className="hidden md:block sm:block text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 sm:hidden"
//           >
//             <Link to="/Login">Get Started</Link>
//           </button>
//           <button
//             data-collapse-toggle="navbar-sticky"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-sticky"
//             aria-expanded={isOpen}
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span className="sr-only">Open main menu</span>
//             {isOpen ? (
//               <FaTimes className="w-5 h-5 text-white" />
//             ) : (
//               <FaBars className="w-5 h-5 text-white" />
//             )}
//           </button>
//         </div>
//         <div
//           className={`items-center justify-between ${
//             isOpen ? "flex" : "hidden"
//           } w-full md:flex md:w-auto md:order-1`}
//           id="navbar-sticky"
//         >
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <Link
//                 to="/"
//                 className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 aria-current="page"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/health-input"
//                 className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Health Based
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/NutritionValue"
//                 className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Nutrition Values
//               </Link>
//             </li>

//             <li>
//               <button
//                 onClick={() => toggleDropdown("services")}
//                 className="flex items-center py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 w-full text-left"
//               >
//                 Services
//                 <FaChevronDown className="ml-2 text-white" />
//               </button>
//               {dropdownOpen === "services" && (
//                 <ul className="absolute bg-gray-50 border border-gray-200 rounded-lg mt-2 shadow-lg">
//                   <li>
//                     <Link
//                       to="/meal-plan"
//                       className="block py-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100 hover:text-green-500"
//                     >
//                       Meal Plan
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/tracking"
//                       className="block py-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100 hover:text-green-500"
//                     >
//                       Tracking
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/bmi"
//                       className="block py-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100 hover:text-green-500"
//                     >
//                       BMI
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/recipes"
//                       className="block py-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100 hover:text-green-500"
//                     >
//                       Recipes
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  const toggleDropdown = (section) => {
    setDropdownOpen(dropdownOpen === section ? null : section);
  };

  // Determine if the current route is the home page
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-md transition-colors duration-300 ${
        isHomePage && !scrolling
          ? "bg-opacity-30 backdrop-blur-lg"
          : "bg-gray-800"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="NutriGuide Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            NutriGuide
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Get Started button for larger screens */}
          <button
            type="button"
            className="hidden md:block text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <Link to="/Login">Get Started</Link>
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <FaTimes className="w-5 h-5 text-white" />
            ) : (
              <FaBars className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/health-input"
                className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Health Based
              </Link>
            </li>
            <li>
              <Link
                to="/NutritionValue"
                className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Nutrition Values
              </Link>
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 w-full text-left"
              >
                Services
                <FaChevronDown className="ml-2 text-white" />
              </button>
              {dropdownOpen === "services" && (
                <ul
                  className="absolute bg-gray-50 border border-gray-200 rounded-lg mt-2 shadow-lg 
                  "
                >
                  <li>
                    <Link
                      to="/meal-plan"
                      className="block py-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100 hover:text-green-500"
                    >
                      Meal Plan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tracking"
                      className="block py-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100 hover:text-green-500"
                    >
                      Tracking
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bmi"
                      className="block py-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100 hover:text-green-500"
                    >
                      BMI
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/recipes"
                      className="block py-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100 hover:text-green-500"
                    >
                      Recipes
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
            {/* Get Started button for smaller screens */}
            {isOpen && (
              <li>
                <Link
                  to="/Login"
                  className="block md:hidden  py-2 px-3 text-white bg-green-700 rounded-lg text-center"
                >
                  Get Started
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
