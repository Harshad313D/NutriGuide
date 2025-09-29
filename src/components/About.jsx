import React from "react";
import { FaLeaf, FaAppleAlt, FaHeartbeat } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-20 min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-12 xl:px-24 text-gray-700">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
          About{" "}
          <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 text-transparent bg-clip-text">
            NutriGuide
          </span>
        </h1>

        <div className="md:flex md:items-center md:gap-12">
          {/* Left Image */}
          <div className="md:w-5/12 mb-8 md:mb-0">
            <img
              src="https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg"
              alt="NutriGuide"
              loading="lazy"
              className="w-full h-auto rounded-xl "
            />
          </div>

          {/* Right Text */}
          <div className="md:w-7/12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Empowering Your Health Journey with Personalized Nutrition
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              NutriGuide helps you achieve your health goals with
              <b>
                {" "}
                science-backed meal plans, expert guidance, and easy-to-use
                tracking tools
              </b>
              . Whether your goal is weight management, managing a health
              condition, or simply improving your nutrition, NutriGuide is
              tailored for you.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to make healthy eating{" "}
              <b>  accessible, simple, and enjoyable</b> . Track your meals,
              monitor your progress, and get insights that help you make smarter
              choices—one meal at a time.
            </p>

            {/* Optional Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center">
                <FaLeaf className="text-green-500 w-8 h-8 mb-2" />
                <span className="font-semibold text-gray-900">
                  Personalized Plans
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <FaAppleAlt className="text-red-400 w-8 h-8 mb-2" />
                <span className="font-semibold text-gray-900">
                  Healthy Recipes
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <FaHeartbeat className="text-pink-500 w-8 h-8 mb-2" />
                <span className="font-semibold text-gray-900">
                  Track Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
