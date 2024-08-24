import React from "react";

const About = () => {
  return (
    <div className="min-h-screen mt-14 bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600">
          NutriGuide is dedicated to helping you achieve your health goals
          through personalized nutrition advice and meal planning. Our team of
          experts is committed to providing accurate and effective
          recommendations based on your health conditions and preferences.
        </p>
        <h3 className="text-xl font-semibold mt-4">Meet the Team</h3>
        <ul>
          <li className="mt-2">
            <strong>Jane Doe:</strong> Nutritionist
          </li>
          <li className="mt-2">
            <strong>John Smith:</strong> Developer
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
