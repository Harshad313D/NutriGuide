// src/components/ConditionsModal.jsx

import React from "react";

const ConditionsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Standard Health Conditions</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Weight Loss</li>
          <li>Heart Health</li>
          <li>Diabetes</li>
          <li>High Fiber</li>
          <li>Low Energy</li>
          <li>High Protein</li>
          <li>Low Sodium</li>
          <li>Gut Health</li>
          <li>Digestive Health</li>
          <li>Muscle Gain</li>
        </ul>

        <button
          onClick={onClose}
          className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 rounded-2xl overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 "
        >
          <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0 ">
            Close
          </span>
        </button>
      </div>
    </div>
  );
};

export default ConditionsModal;
