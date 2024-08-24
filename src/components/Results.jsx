import React from "react";

const Results = ({ results }) => {
  return (
    <div className="mt-6 p-4 border border-gray-300 rounded-md">
      <h2 className="text-xl font-bold mb-2">Recommendations</h2>
      <p className="mb-4">{results.message}</p>
      <h3 className="text-lg font-semibold">Meal Plan</h3>
      <p className="mb-4">{results.mealPlan}</p>
      <h3 className="text-lg font-semibold">Health Tips</h3>
      <p>{results.tips}</p>
    </div>
  );
};

export default Results;
