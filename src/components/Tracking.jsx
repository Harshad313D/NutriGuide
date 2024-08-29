// import React, { useState, useEffect } from "react";
// import { format, addDays, startOfWeek } from "date-fns";
// import axios from "axios";

// const API_KEY = "b9656d3027f34790bda512e9eff71166"; // Replace with your actual Spoonacular API key
// const NUTRITION_API_URL =
//   "https://api.spoonacular.com/recipes/{id}/nutritionWidget.json";

// const MealCalendar = () => {
//   const [startDate, setStartDate] = useState(
//     startOfWeek(new Date(), { weekStartsOn: 1 })
//   );
//   const [meals, setMeals] = useState({});
//   const [nutritionData, setNutritionData] = useState({});

//   useEffect(() => {
//     const savedMeals = JSON.parse(localStorage.getItem("mealData")) || {};
//     setMeals(savedMeals);
//   }, []);

//   const handleMealChange = (date, mealType, value) => {
//     const updatedMeals = {
//       ...meals,
//       [date]: { ...meals[date], [mealType]: value },
//     };
//     setMeals(updatedMeals);
//     fetchNutritionData(date, mealType, value);
//   };

//   const fetchNutritionData = async (date, mealType, mealName) => {
//     if (!mealName) return;

//     try {
//       // Replace with a real recipe ID or handle this part based on your use case
//       const recipeId = "1003464"; // Example recipe ID, should be dynamic based on mealName or user input
//       const response = await axios.get(
//         `${NUTRITION_API_URL.replace("{id}", recipeId)}?apiKey=${API_KEY}`
//       );

//       const nutrients = response.data.nutrients.reduce((acc, nutrient) => {
//         switch (nutrient.name.toLowerCase()) {
//           case "calories":
//             acc.calories = (acc.calories || 0) + nutrient.amount;
//             break;
//           case "fat":
//             acc.fat = (acc.fat || 0) + nutrient.amount;
//             break;
//           case "carbohydrates":
//             acc.carbs = (acc.carbs || 0) + nutrient.amount;
//             break;
//           case "protein":
//             acc.protein = (acc.protein || 0) + nutrient.amount;
//             break;
//           default:
//             break;
//         }
//         return acc;
//       }, {});

//       setNutritionData((prev) => ({
//         ...prev,
//         [date]: {
//           ...(prev[date] || { calories: 0, fat: 0, carbs: 0, protein: 0 }),
//           calories: (prev[date]?.calories || 0) + nutrients.calories,
//           fat: (prev[date]?.fat || 0) + nutrients.fat,
//           carbs: (prev[date]?.carbs || 0) + nutrients.carbs,
//           protein: (prev[date]?.protein || 0) + nutrients.protein,
//         },
//       }));
//     } catch (error) {
//       console.error("Error fetching nutrition data:", error);
//     }
//   };

//   const handleSubmit = () => {
//     localStorage.setItem("mealData", JSON.stringify(meals));
//     alert("Meals and notes have been saved successfully!");
//   };

//   const calculateTotals = (date) => {
//     return nutritionData[date] || { calories: 0, fat: 0, carbs: 0, protein: 0 };
//   };

//   const renderMealInput = (date, mealType) => (
//     <input
//       type="text"
//       value={meals[date]?.[mealType] || ""}
//       onChange={(e) => handleMealChange(date, mealType, e.target.value)}
//       placeholder={mealType.charAt(0).toUpperCase() + mealType.slice(1)}
//       className="p-4 text-lg text-center border rounded-md bg-lime-50 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//     />
//   );

//   return (
//     <div className="p-6 mt-14 bg-teal-100 min-h-screen flex flex-col items-center">
//       <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
//         Meal Tracking Calendar
//       </h2>
//       <div className="overflow-x-auto w-full  rounded-xl bg-lime-100 shadow-lg">
//         <table className="table-auto w-full">
//           <thead>
//             <tr className="bg-indigo-600 text-white">
//               <th className="p-4">Date</th>
//               <th className="p-4">Breakfast</th>
//               <th className="p-4">Lunch</th>
//               <th className="p-4">Dinner</th>
//               <th className="p-4">Snacks</th>
//               <th className="p-4">Notes</th>
//               <th className="p-4">Calories</th>
//               <th className="p-4">Fat</th>
//               <th className="p-4">Carbs</th>
//               <th className="p-4">Protein</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[...Array(7)].map((_, index) => {
//               const date = format(addDays(startDate, index), "yyyy-MM-dd");
//               const totals = calculateTotals(date);
//               return (
//                 <tr key={date} className="border-b">
//                   <td className="p-4 font-semibold text-indigo-700">
//                     {format(addDays(startDate, index), "EEE, MMM d")}
//                   </td>
//                   <td className="p-4">{renderMealInput(date, "breakfast")}</td>
//                   <td className="p-4">{renderMealInput(date, "lunch")}</td>
//                   <td className="p-4">{renderMealInput(date, "dinner")}</td>
//                   <td className="p-4">{renderMealInput(date, "snacks")}</td>
//                   <td className="p-4">{renderMealInput(date, "notes")}</td>
//                   <td className="p-4 bg-blue-200 text-center">
//                     {totals.calories.toFixed(2)}
//                   </td>
//                   <td className="p-4 bg-red-200 text-center">
//                     {totals.fat.toFixed(2)}
//                   </td>
//                   <td className="p-4 bg-green-200 text-center">
//                     {totals.carbs.toFixed(2)}
//                   </td>
//                   <td className="p-4 bg-yellow-200 text-center">
//                     {totals.protein.toFixed(2)}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//       <button
//         onClick={handleSubmit}
//         className="mt-6 py-2 px-6 border border-blue-600  font-bold rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl transition-all duration-300"
//       >
//         Save Meals & Notes
//       </button>
//     </div>
//   );
// };

// export default MealCalendar;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { format, addDays, startOfWeek } from "date-fns";

// Chart.js setup
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your actual Spoonacular API key
const NUTRITION_API_URL =
  "https://api.spoonacular.com/recipes/{id}/nutritionWidget.json";

const MealDashboard = () => {
  const [startDate, setStartDate] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [meals, setMeals] = useState({});
  const [nutritionData, setNutritionData] = useState({});
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Calories",
        data: [],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  });

  useEffect(() => {
    const savedMeals = JSON.parse(localStorage.getItem("mealData")) || {};
    setMeals(savedMeals);
    updateChartData(savedMeals);
  }, []);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    updateChartData(meals);
  };

  const handleMealChange = (mealType, value) => {
    const updatedMeals = {
      ...meals,
      [selectedDate]: { ...meals[selectedDate], [mealType]: value },
    };
    setMeals(updatedMeals);
    fetchNutritionData(selectedDate, mealType, value);
  };

  const fetchNutritionData = async (date, mealType, mealName) => {
    if (!mealName) return;

    try {
      const recipeId = "1003464"; // Example recipe ID, should be dynamic
      const response = await axios.get(
        `${NUTRITION_API_URL.replace("{id}", recipeId)}?apiKey=${API_KEY}`
      );

      const nutrients = response.data.nutrients.reduce((acc, nutrient) => {
        switch (nutrient.name.toLowerCase()) {
          case "calories":
            acc.calories = (acc.calories || 0) + nutrient.amount;
            break;
          case "fat":
            acc.fat = (acc.fat || 0) + nutrient.amount;
            break;
          case "carbohydrates":
            acc.carbs = (acc.carbs || 0) + nutrient.amount;
            break;
          case "protein":
            acc.protein = (acc.protein || 0) + nutrient.amount;
            break;
          default:
            break;
        }
        return acc;
      }, {});

      setNutritionData((prev) => ({
        ...prev,
        [date]: {
          ...(prev[date] || { calories: 0, fat: 0, carbs: 0, protein: 0 }),
          calories: (prev[date]?.calories || 0) + nutrients.calories,
          fat: (prev[date]?.fat || 0) + nutrients.fat,
          carbs: (prev[date]?.carbs || 0) + nutrients.carbs,
          protein: (prev[date]?.protein || 0) + nutrients.protein,
        },
      }));

      updateChartData({
        ...meals,
        [date]: { ...meals[date], [mealType]: mealName },
      });
    } catch (error) {
      console.error("Error fetching nutrition data:", error);
    }
  };

  const updateChartData = (data) => {
    const labels = [];
    const caloriesData = [];

    for (let i = 0; i < 7; i++) {
      const date = format(addDays(startDate, i), "yyyy-MM-dd");
      labels.push(format(addDays(startDate, i), "EEE, MMM d"));
      caloriesData.push(calculateTotals(date).calories);
    }

    setChartData({
      labels,
      datasets: [
        {
          label: "Calories",
          data: caloriesData,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    });
  };

  const calculateTotals = (date) => {
    return nutritionData[date] || { calories: 0, fat: 0, carbs: 0, protein: 0 };
  };

  const renderMealInput = (mealType) => (
    <input
      type="text"
      value={meals[selectedDate]?.[mealType] || ""}
      onChange={(e) => handleMealChange(mealType, e.target.value)}
      placeholder={mealType.charAt(0).toUpperCase() + mealType.slice(1)}
      className="p-2 text-sm text-center border rounded-md bg-lime-50 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );

  return (
    <div className="flex w-full mt-16 h-screen bg-gray-100">
      {/* Left Drawer */}
      <div className="w-1/6 bg-white border-r border-gray-300 p-4">
        <h2 className="text-lg font-semibold mb-4">Select Day</h2>
        <ul className="space-y-2">
          {[...Array(7)].map((_, index) => {
            const date = format(addDays(startDate, index), "yyyy-MM-dd");
            return (
              <li
                key={date}
                className={`p-2 cursor-pointer rounded-md hover:bg-gray-200 ${
                  selectedDate === date ? "bg-gray-300" : ""
                }`}
                onClick={() => handleDateSelect(date)}
              >
                {format(addDays(startDate, index), "EEE, MMM d")}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main Screen */}
      <div className="w-2/3 p-6">
        <h2 className="text-3xl font-bold mb-6">Weekly Nutrition Intake</h2>
        <div className="flex justify-between mb-6">
          <div className="bg-white p-4 shadow-lg rounded-lg w-1/4">
            <h3 className="text-lg font-semibold mb-2">Weekly Totals</h3>
            <p>
              <strong>Calories:</strong>{" "}
              {Object.values(nutritionData)
                .reduce((acc, curr) => acc + (curr.calories || 0), 0)
                .toFixed(2)}
            </p>
            <p>
              <strong>Fat:</strong>{" "}
              {Object.values(nutritionData)
                .reduce((acc, curr) => acc + (curr.fat || 0), 0)
                .toFixed(2)}
            </p>
            <p>
              <strong>Carbs:</strong>{" "}
              {Object.values(nutritionData)
                .reduce((acc, curr) => acc + (curr.carbs || 0), 0)
                .toFixed(2)}
            </p>
            <p>
              <strong>Protein:</strong>{" "}
              {Object.values(nutritionData)
                .reduce((acc, curr) => acc + (curr.protein || 0), 0)
                .toFixed(2)}
            </p>
          </div>

          <div className="bg-white p-4 shadow-lg rounded-lg w-2/3">
            <h3 className="text-lg font-semibold mb-2">Weekly Chart</h3>
            <div className="h-72">
              <Line
                data={chartData}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Panel */}
      <div className="w-1/6 bg-white border-l border-gray-300 p-4">
        <h2 className="text-lg font-semibold mb-4">
          Meal Details for {format(new Date(selectedDate), "EEE, MMM d")}
        </h2>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold">Breakfast</h5>
            {renderMealInput("breakfast")}
          </div>
          <div>
            <h5 className="font-semibold">Lunch</h5>
            {renderMealInput("lunch")}
          </div>
          <div>
            <h5 className="font-semibold">Dinner</h5>
            {renderMealInput("dinner")}
          </div>
          <div>
            <h5 className="font-semibold">Snacks</h5>
            {renderMealInput("snacks")}
          </div>
          {meals[selectedDate] && (
            <div className="mt-4">
              <h5 className="font-semibold">Nutritional Breakdown</h5>
              <p>
                <strong>Calories:</strong>{" "}
                {calculateTotals(selectedDate).calories.toFixed(2)}
              </p>
              <p>
                <strong>Fat:</strong>{" "}
                {calculateTotals(selectedDate).fat.toFixed(2)}
              </p>
              <p>
                <strong>Carbs:</strong>{" "}
                {calculateTotals(selectedDate).carbs.toFixed(2)}
              </p>
              <p>
                <strong>Protein:</strong>{" "}
                {calculateTotals(selectedDate).protein.toFixed(2)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealDashboard;
