import React from "react";

const MealPlan = () => {
  // Example meal plan data
  const mealPlan = [
    {
      day: "Monday",
      meals: ["Oatmeal", "Grilled Chicken Salad", "Fruit Smoothie"],
    },
    {
      day: "Tuesday",
      meals: ["Greek Yogurt", "Quinoa Bowl", "Veggie Stir-Fry"],
    },
  ];

  return (
    <div className="min-h-screen mt-14 bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Meal Plan</h2>
        {mealPlan.map((dayPlan, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{dayPlan.day}</h3>
            <ul>
              {dayPlan.meals.map((meal, idx) => (
                <li key={idx} className="text-gray-600">
                  {meal}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlan;
