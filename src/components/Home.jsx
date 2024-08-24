import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLightbulb,
  FaCalendarCheck,
  FaChartLine,
  FaTools,
} from "react-icons/fa";

const images = [
  "src/assets/healthy1.jpg",
  "src/assets/healthy2.jpg",
  "src/assets/healthy3.jpg",
  "src/assets/healthy4.jpg",
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Home = () => {
  const [heroImage, setHeroImage] = useState(getRandomImage());

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImage(getRandomImage());
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="flex items-center justify-center h-full relative z-10 text-center text-white p-6">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">
              Transform Your Health with{" "}
              <span className="text-green-400">Personalized Nutrition</span>
            </h1>
            <p className="text-lg mb-6">
              Discover tailored meal plans and expert nutrition advice to
              achieve your health goals.
            </p>
            <Link
              to="/get-input"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <FaLightbulb className="mx-auto mb-4 w-16 h-16 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">
                Personalized Recommendations
              </h3>
              <p>
                Get tailored food and nutrition tips based on your health
                conditions.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <FaCalendarCheck className="mx-auto mb-4 w-16 h-16 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">Meal Planning</h3>
              <p>
                Create and manage meal plans aligned with your dietary goals.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <FaChartLine className="mx-auto mb-4 w-16 h-16 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">
                Tracking & Insights
              </h3>
              <p>
                Monitor your progress and gain insights to improve your health.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <FaTools className="mx-auto mb-4 w-16 h-16 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">Interactive Tools</h3>
              <p>
                Use interactive tools to input your health conditions and
                receive advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Users Say
          </h2>
          <div className="flex flex-wrap justify-center">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg mx-4 mb-6 w-full md:w-1/3 text-center">
              <p className="italic mb-4">
                “This app has transformed my eating habits and helped me achieve
                my health goals!”
              </p>
              <p className="font-semibold">Jane Doe</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg mx-4 mb-6 w-full md:w-1/3 text-center">
              <p className="italic mb-4">
                “The personalized meal plans are fantastic and easy to follow.”
              </p>
              <p className="font-semibold">John Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="flex flex-wrap justify-center">
            {/* Step 1 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-lg mx-4 mb-6 w-full md:w-1/4 text-center">
              <FaLightbulb className="mx-auto mb-4 w-16 h-16 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">
                Enter Your Health Conditions
              </h3>
            </div>
            {/* Step 2 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-lg mx-4 mb-6 w-full md:w-1/4 text-center">
              <FaCalendarCheck className="mx-auto mb-4 w-16 h-16 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">
                Receive Personalized Recommendations
              </h3>
            </div>
            {/* Step 3 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-lg mx-4 mb-6 w-full md:w-1/4 text-center">
              <FaChartLine className="mx-auto mb-4 w-16 h-16 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">Plan Your Meals</h3>
            </div>
            {/* Step 4 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-lg mx-4 mb-6 w-full md:w-1/4 text-center">
              <FaTools className="mx-auto mb-4 w-16 h-16 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// src/pages/Home.jsx
// import React from "react";
// import { Parallax } from "react-parallax";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const images = [
//   "src/assets/healthy1.jpg",
//   "src/assets/healthy2.jpg",
//   "src/assets/healthy3.jpg",
//   "src/assets/healthy4.jpg",
// ];

// const getRandomImage = () => {
//   const randomIndex = Math.floor(Math.random() * images.length);
//   return images[randomIndex];
// };

// const Home = () => {
//   const heroImage = getRandomImage();

//   return (
//     <div className="bg-gray-100">
//       {/* Hero Section */}
//       <Parallax
//         bgImage={heroImage}
//         strength={500}
//         className="relative h-screen bg-cover bg-center"
//       >
//         {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
//         <div className="flex items-center justify-center h-full relative z-10 text-center text-white p-6">
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-3xl"
//           >
//             <h1 className="text-4xl font-extrabold mb-4 leading-tight">
//               Transform Your Health with{" "}
//               <span className="text-green-400">Personalized Nutrition</span>
//             </h1>
//             <p className="text-lg mb-6">
//               Discover tailored meal plans and expert nutrition advice to
//               achieve your health goals.
//             </p>
//             <Link
//               to="/get-input"
//               className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
//             >
//               Get Started
//             </Link>
//           </motion.div>
//         </div>
//       </Parallax>

//       {/* Features Section */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-8">
//             Our Key Features
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <motion.div
//               className="bg-green-50 p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <i className="fa fa-lightbulb mx-auto mb-4 w-16 h-16 text-green-500"></i>
//               <h3 className="text-xl font-semibold mb-2">
//                 Personalized Recommendations
//               </h3>
//               <p>
//                 Get tailored food and nutrition tips based on your health
//                 conditions.
//               </p>
//             </motion.div>
//             <motion.div
//               className="bg-green-50 p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <i className="fa fa-calendar-check mx-auto mb-4 w-16 h-16 text-green-500"></i>
//               <h3 className="text-xl font-semibold mb-2">Meal Planning</h3>
//               <p>
//                 Create and manage meal plans aligned with your dietary goals.
//               </p>
//             </motion.div>
//             <motion.div
//               className="bg-green-50 p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <i className="fa fa-chart-line mx-auto mb-4 w-16 h-16 text-green-500"></i>
//               <h3 className="text-xl font-semibold mb-2">
//                 Tracking & Insights
//               </h3>
//               <p>
//                 Monitor your progress and gain insights to improve your health.
//               </p>
//             </motion.div>
//             <motion.div
//               className="bg-green-50 p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <i className="fa fa-tools mx-auto mb-4 w-16 h-16 text-green-500"></i>
//               <h3 className="text-xl font-semibold mb-2">Interactive Tools</h3>
//               <p>
//                 Use interactive tools to input your health conditions and
//                 receive advice.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="bg-green-100 py-12">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-8">
//             What Our Users Say
//           </h2>
//           <div className="flex flex-wrap justify-center">
//             <motion.div
//               className="bg-white p-6 rounded-lg shadow-lg mx-4 mb-6 w-full md:w-1/3 text-center transform transition-transform duration-300 hover:scale-105"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <p className="italic mb-4">
//                 “This app has transformed my eating habits and helped me achieve
//                 my health goals!”
//               </p>
//               <p className="font-semibold">Jane Doe</p>
//             </motion.div>
//             <motion.div
//               className="bg-white p-6 rounded-lg shadow-lg mx-4 mb-6 w-full md:w-1/3 text-center transform transition-transform duration-300 hover:scale-105"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <p className="italic mb-4">
//                 “The personalized meal plans are fantastic and easy to follow.”
//               </p>
//               <p className="font-semibold">John Smith</p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
//           <div className="flex flex-wrap justify-center">
//             <motion.div
//               className="bg-green-50 p-6 rounded-lg shadow-lg mx-4 mb-6 w-full md:w-1/4 text-center transform transition-transform duration-300 hover:scale-105"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <i className="fa fa-lightbulb mx-auto mb-4 w-16 h-16 text-green-500"></i>
//               <h3 className="text-xl font-semibold mb-2">
//                 Enter Your Health Conditions
//               </h3>
//             </motion.div>
//             <motion.div
//               className="bg-green-50 p-6 rounded-lg shadow-lg mx-4 mb-6 w-full md:w-1/4 text-center transform transition-transform duration-300 hover:scale-105"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <i className="fa fa-calendar-check mx-auto mb-4 w-16 h-16 text-green-500"></i>
//               <h3 className="text-xl font-semibold mb-2">
//                 Receive Personalized Recommendations
//               </h3>
//             </motion.div>
//             <motion.div
//               className="bg-green-50 p-6 rounded-lg shadow-lg mx-4 mb-6 w-full md:w-1/4 text-center transform transition-transform duration-300 hover:scale-105"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <i className="fa fa-calendar-alt mx-auto mb-4 w-16 h-16 text-green-500"></i>
//               <h3 className="text-xl font-semibold mb-2">
//                 Implement Your Plan
//               </h3>
//             </motion.div>
//             <motion.div
//               className="bg-green-50 p-6 rounded-lg shadow-lg mx-4 mb-6 w-full md:w-1/4 text-center transform transition-transform duration-300 hover:scale-105"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <i className="fa fa-chart-line mx-auto mb-4 w-16 h-16 text-green-500"></i>
//               <h3 className="text-xl font-semibold mb-2">
//                 Track Your Progress
//               </h3>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
