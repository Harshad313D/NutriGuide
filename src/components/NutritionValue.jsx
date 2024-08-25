import React, { useState } from "react";
import axios from "axios";
import { FaSearch, FaUtensils } from "react-icons/fa";
import backgroundImage from "../assets/bg.jpg";

const NutritionValue = () => {
  const [mealName, setMealName] = useState("");
  const [nutritionData, setNutritionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const searchResponse = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            query: mealName,
            number: 1,
            apiKey: "b9656d3027f34790bda512e9eff71166",
          },
        }
      );

      if (searchResponse.data.results.length === 0) {
        throw new Error("No recipes found");
      }

      const recipeId = searchResponse.data.results[0].id;

      const nutritionResponse = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json`,
        {
          params: {
            apiKey: "b9656d3027f34790bda512e9eff71166",
          },
        }
      );

      setNutritionData(nutritionResponse.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const categorizeNutrients = (nutrients) => {
    const categories = {
      Macros: ["Calories", "Fat", "Saturated Fat", "Carbohydrates", "Protein"],
      Vitamins: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
      Minerals: ["Calcium", "Iron", "Sodium", "Potassium", "Magnesium"],
      Properties: ["Glycemic Index", "Glycemic Load", "Nutrition Score"],
      Flavonoids: ["Cyanidin", "Petunidin", "Delphinidin"],
    };

    const categorized = {
      Macros: [],
      Vitamins: [],
      Minerals: [],
      Properties: [],
      Flavonoids: [],
    };

    nutrients.forEach((nutrient) => {
      for (const category in categories) {
        if (categories[category].includes(nutrient.name)) {
          categorized[category].push(nutrient);
          break;
        }
      }
    });

    return categorized;
  };

  return (
    <div
      className="min-h-screen mt-14 flex flex-col items-center p-6  "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        // backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full max-w-3xl flex flex-col items-center bg-transperent rounded-2xl  p-8 mb-10">
        <h2 className="text-3xl font-extrabold text-yellow-300 mb-6 text-center">
          {/* <FaUtensils className="mr-3 text-purple-500" /> */}
          Find Nutrition by Meal Name
        </h2>
        <div className="relative">
          <input
            type="text"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            placeholder="Enter meal name..."
            className="w-96 p-4 pl-12 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
          />
          <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
        </div>

        <button
          onClick={handleSearch}
          className="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 rounded-2xl overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 "
        >
          <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0 ">
            Search
          </span>
        </button>
        {loading && (
          <div className="mt-6 text-center text-gray-500">Loading...</div>
        )}
        {error && (
          <div className="mt-6 text-center text-red-500">Error: {error}</div>
        )}
      </div>
      {nutritionData && (
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categorizeNutrients(nutritionData.nutrients)).map(
            ([category, nutrients], index) => (
              <div key={index}>
                <h3 className="text-3xl text-center font-bold bg-white/20 backdrop-blur-md rounded-xl  text-yellow-400 mb-4">
                  {category}
                </h3>
                <div className="grid gap-4">
                  {nutrients.map((nutrient, i) => (
                    <div
                      key={i}
                      className="bg-purple-300   rounded-2xl p-6 text-center shadow-lg"
                    >
                      <h4 className="text-2xl font-bold text-">
                        {nutrient.name}
                      </h4>
                      <p className="text-xl text-red-500 mt-2">
                        {nutrient.amount} {nutrient.unit}
                      </p>
                      <p className="text-lg text-blue-600">
                        {nutrient.percentOfDailyNeeds}% of daily needs
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default NutritionValue;