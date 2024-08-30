import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Function to fetch meal plan from the Spoonacular API
const getMealPlan = async (
  timeFrame,
  targetCalories,
  diet,
  exclude,
  include
) => {
  const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your actual API key
  try {
    const response = await axios.get(
      "https://api.spoonacular.com/mealplanner/generate",
      {
        params: {
          timeFrame,
          targetCalories,
          diet,
          exclude,
          include,
          apiKey: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching the meal plan", error);
    return null;
  }
};

// Component to display individual meal cards
const MealCard = ({ meal }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-4 w-80">
      <img
        src={`https://spoonacular.com/recipeImages/${meal.id}-312x231.${meal.imageType}`}
        alt={meal.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{meal.title}</h2>
        <p className="text-gray-700">Servings: {meal.servings}</p>
        <p className="text-gray-700">Ready in: {meal.readyInMinutes} mins</p>
        <Link
          to="/SingleRecipe"
          state={{ data: meal }} // Pass the meal data
          className="text-blue-500 hover:underline mt-4 block"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

// Main component to display the meal plan
const MealPlan = () => {
  const [mealPlan, setMealPlan] = useState(null);
  const [preferences, setPreferences] = useState({
    timeFrame: "day", // Options: 'day' or 'week'
    targetCalories: 2000, // Caloric target
    diet: "", // Optional: 'vegetarian', 'vegan', etc.
    exclude: "", // Optional: Comma-separated list of allergens or ingredients to exclude
    include: "", // Optional: Comma-separated list of ingredients to include
  });

  useEffect(() => {
    getMealPlan(
      preferences.timeFrame,
      preferences.targetCalories,
      preferences.diet,
      preferences.exclude,
      preferences.include
    ).then((data) => {
      console.log(data); // Log data to see if it is being fetched correctly
      setMealPlan(data);
    });
  }, [preferences]);

  if (!mealPlan) {
    return <p className="text-center text-gray-700">Loading...</p>;
  }

  return (
    <div className="h-full mt-10 p-8 bg-white items-center ">
      <h1 className="text-4xl font-bold text-center mb-12">Daily Meal Plan</h1>

      {/* Preferences Form */}
      <div className="max-w-6xl mx-auto bg-green-100 shadow-lg rounded-lg p-6 mb-12">
        <h2 className="text-xl font-bold mb-6">Customize Your Meal Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg mb-2 font-medium">
              Caloric Target
            </label>
            <input
              type="number"
              value={preferences.targetCalories}
              onChange={(e) =>
                setPreferences({
                  ...preferences,
                  targetCalories: e.target.value,
                })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg mb-2 font-medium">Diet</label>
            <input
              type="text"
              placeholder="e.g., vegetarian"
              value={preferences.diet}
              onChange={(e) =>
                setPreferences({ ...preferences, diet: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg mb-2 font-medium">
              Exclude Ingredients
            </label>
            <input
              type="text"
              placeholder="e.g., shellfish, olives"
              value={preferences.exclude}
              onChange={(e) =>
                setPreferences({ ...preferences, exclude: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg mb-2 font-medium">
              Include Ingredients
            </label>
            <input
              type="text"
              placeholder="e.g., chicken, broccoli"
              value={preferences.include}
              onChange={(e) =>
                setPreferences({ ...preferences, include: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Meal Cards */}
      {/* <div className=" border-t-4 border-b-4 rounded-lg border-green-500"> */}
      <h1 className="text-3xl font-bold text-center m-1  ">
        Enjoy your todays meal
      </h1>
      <div className="flex flex-wrap justify-center">
        {mealPlan.meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
      {/* </div> */}

      {/* Nutritional Information */}
      <div className="max-w-6xl mx-auto p-6 mt-12 bg-green-100 shadow-xl rounded-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Nutritional Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-md flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-700">
              Calories:
            </span>
            <span className="text-lg font-medium text-gray-900">
              {mealPlan.nutrients.calories} kcal
            </span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-md flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-700">
              Carbohydrates:
            </span>
            <span className="text-lg font-medium text-gray-900">
              {mealPlan.nutrients.carbohydrates} g
            </span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-md flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-700">Fat:</span>
            <span className="text-lg font-medium text-gray-900">
              {mealPlan.nutrients.fat} g
            </span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-md flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-700">
              Protein:
            </span>
            <span className="text-lg font-medium text-gray-900">
              {mealPlan.nutrients.protein} g
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
