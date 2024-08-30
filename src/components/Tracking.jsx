// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { format, addDays, startOfWeek } from "date-fns";

// // Chart.js setup
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your actual Spoonacular API key
// const NUTRITION_API_URL =
//   "https://api.spoonacular.com/recipes/{id}/nutritionWidget.json";

// const MealDashboard = () => {
//   const [startDate, setStartDate] = useState(
//     startOfWeek(new Date(), { weekStartsOn: 1 })
//   );
//   const [selectedDate, setSelectedDate] = useState(
//     format(new Date(), "yyyy-MM-dd")
//   );
//   const [meals, setMeals] = useState({});
//   const [nutritionData, setNutritionData] = useState({});
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Calories",
//         data: [],
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//       },
//     ],
//   });

//   useEffect(() => {
//     const savedMeals = JSON.parse(localStorage.getItem("mealData")) || {};
//     setMeals(savedMeals);
//     updateChartData(savedMeals);
//   }, []);

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//     updateChartData(meals);
//   };

//   const handleMealChange = (mealType, value) => {
//     const updatedMeals = {
//       ...meals,
//       [selectedDate]: { ...meals[selectedDate], [mealType]: value },
//     };
//     setMeals(updatedMeals);
//     fetchNutritionData(selectedDate, mealType, value);
//   };

//   const fetchNutritionData = async (date, mealType, mealName) => {
//     if (!mealName) return;

//     try {
//       const recipeId = "1003464"; // Example recipe ID, should be dynamic
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

//       updateChartData({
//         ...meals,
//         [date]: { ...meals[date], [mealType]: mealName },
//       });
//     } catch (error) {
//       console.error("Error fetching nutrition data:", error);
//     }
//   };

//   const updateChartData = (data) => {
//     const labels = [];
//     const caloriesData = [];

//     for (let i = 0; i < 7; i++) {
//       const date = format(addDays(startDate, i), "yyyy-MM-dd");
//       labels.push(format(addDays(startDate, i), "EEE, MMM d"));
//       caloriesData.push(calculateTotals(date).calories);
//     }

//     setChartData({
//       labels,
//       datasets: [
//         {
//           label: "Calories",
//           data: caloriesData,
//           borderColor: "rgba(75, 192, 192, 1)",
//           backgroundColor: "rgba(75, 192, 192, 0.2)",
//         },
//       ],
//     });
//   };

//   const calculateTotals = (date) => {
//     return nutritionData[date] || { calories: 0, fat: 0, carbs: 0, protein: 0 };
//   };

//   const renderMealInput = (mealType) => (
//     <input
//       type="text"
//       value={meals[selectedDate]?.[mealType] || ""}
//       onChange={(e) => handleMealChange(mealType, e.target.value)}
//       placeholder={mealType.charAt(0).toUpperCase() + mealType.slice(1)}
//       className="p-2 text-sm text-center border rounded-md bg-gray-100 hover:bg-indigo-200 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//     />
//   );

//   return (
//     <div className="flex w-full mt-16 h-screen bg-gray-100">
//       {/* Left Drawer */}
//       <div className="w-1/6 bg-white border-r border-gray-300 p-4">
//         <h2 className="text-lg font-semibold text-indigo-500 mb-4">
//           Select Day
//         </h2>
//         <ul className="space-y-2">
//           {[...Array(7)].map((_, index) => {
//             const date = format(addDays(startDate, index), "yyyy-MM-dd");
//             return (
//               <li
//                 key={date}
//                 className={`p-2 cursor-pointer rounded-md hover:bg-indigo-200 ${
//                   selectedDate === date ? "bg-gray-100" : ""
//                 }`}
//                 onClick={() => handleDateSelect(date)}
//               >
//                 {format(addDays(startDate, index), "EEE, MMM d")}
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       {/* Main Screen */}

//       <div className="w-2/3 p-6 bg-indigo-100 flex flex-col items-center justify-center">
//         <h2 className="text-3xl font-bold mb-6">Weekly Nutrition Intake</h2>

//         <div className=" p-2  mb-6 w-full">
//           <h3 className="text-lg text-indigo-500 font-semibold mb-2 text-center">
//             Weekly Totals
//           </h3>
//           <div className="flex justify-around ">
//             <p className="flex flex-col items-center bg-white shadow-lg  p-4 border-t-4 border-yellow-500 rounded-lg ">
//               <strong>Calories:</strong>
//               {Object.values(nutritionData)
//                 .reduce((acc, curr) => acc + (curr.calories || 0), 0)
//                 .toFixed(2)}
//             </p>
//             <p className="flex flex-col items-center p-4 bg-white shadow-lg border-t-4 border-indigo-500 rounded-lg">
//               <strong>Fat:</strong>{" "}
//               {Object.values(nutritionData)
//                 .reduce((acc, curr) => acc + (curr.fat || 0), 0)
//                 .toFixed(2)}
//             </p>
//             <p className="flex flex-col items-center p-4 bg-white shadow-lg border-t-4 border-green-500 rounded-lg">
//               <strong>Carbs:</strong>{" "}
//               {Object.values(nutritionData)
//                 .reduce((acc, curr) => acc + (curr.carbs || 0), 0)
//                 .toFixed(2)}
//             </p>
//             <p className="flex flex-col items-center p-4 bg-white shadow-lg border-t-4 border-red-500 rounded-lg">
//               <strong>Protein:</strong>{" "}
//               {Object.values(nutritionData)
//                 .reduce((acc, curr) => acc + (curr.protein || 0), 0)
//                 .toFixed(2)}
//             </p>
//           </div>
//         </div>

//         {/* chart  */}
//         <div className="bg-white p-4 shadow-lg rounded-lg w-full flex justify- border-t-4 border-b-4 border-gray-500">
//           <div className="w-full">
//             <h3 className="text-lg font-semibold text-indigo-500 mb-2">
//               Weekly Chart
//             </h3>
//             <div className="h-72">
//               <Line
//                 data={chartData}
//                 options={{ responsive: true, maintainAspectRatio: false }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Side Panel */}
//       <div className="w-1/6 bg-white border-l border-gray-300 p-4">
//         <h2 className="text-lg font-semibold text-indigo-500 mb-4">
//           Meal Details for {format(new Date(selectedDate), "EEE, MMM d")}
//         </h2>
//         <div className="space-y-4">
//           <div>
//             <h5 className="font-semibold">Breakfast</h5>
//             {renderMealInput("breakfast")}
//           </div>
//           <div>
//             <h5 className="font-semibold">Lunch</h5>
//             {renderMealInput("lunch")}
//           </div>
//           <div>
//             <h5 className="font-semibold">Dinner</h5>
//             {renderMealInput("dinner")}
//           </div>
//           <div>
//             <h5 className="font-semibold">Snacks</h5>
//             {renderMealInput("snacks")}
//           </div>
//           {meals[selectedDate] && (
//             <div className="mt-4  border-t-4  p-2 shadow-lg rounded-lg border-blue-500">
//               <h5 className="font-semibold text-indigo-500">
//                 Nutritional Breakdown
//               </h5>
//               <p>
//                 <strong>Calories:</strong>{" "}
//                 {calculateTotals(selectedDate).calories.toFixed(2)}
//               </p>
//               <p>
//                 <strong>Fat:</strong>{" "}
//                 {calculateTotals(selectedDate).fat.toFixed(2)}
//               </p>
//               <p>
//                 <strong>Carbs:</strong>{" "}
//                 {calculateTotals(selectedDate).carbs.toFixed(2)}
//               </p>
//               <p>
//                 <strong>Protein:</strong>{" "}
//                 {calculateTotals(selectedDate).protein.toFixed(2)}
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MealDashboard;

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
    <div className="flex-1 p-2">
      <input
        type="text"
        value={meals[selectedDate]?.[mealType] || ""}
        onChange={(e) => handleMealChange(mealType, e.target.value)}
        placeholder={mealType.charAt(0).toUpperCase() + mealType.slice(1)}
        className="p-2 text-sm text-center border rounded-md bg-gray-100 hover:bg-indigo-200 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
      />
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row w-full mt-16 h-full md:h-screen bg-gray-100 overflow-hidden">
      {/* Left Drawer */}
      <div className="w-full md:w-1/6 bg-white border-b md:border-b-0 md:border-r border-gray-300 p-4">
        <h2 className="text-lg font-semibold text-indigo-500 mb-4 text-center md:text-left">
          Select Day
        </h2>
        <ul className="space-y-2 flex md:flex-col justify-around">
          {[...Array(7)].map((_, index) => {
            const date = format(addDays(startDate, index), "yyyy-MM-dd");
            return (
              <li
                key={date}
                className={`p-2 cursor-pointer rounded-md hover:bg-indigo-200 ${
                  selectedDate === date ? "bg-gray-100" : ""
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
      <div className="w-full md:w-2/3 p-6 bg-indigo-100 flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Weekly Nutrition Intake
        </h2>

        <div className="p-2 mb-6 w-full">
          <h3 className="text-lg text-indigo-500 font-semibold mb-2 text-center">
            Weekly Totals
          </h3>
          <div className="flex flex-col md:flex-row justify-around space-y-4 md:space-y-0">
            <p className="flex flex-col items-center bg-white shadow-lg p-4 border-t-4 border-yellow-500 rounded-lg">
              <strong>Calories:</strong>
              {Object.values(nutritionData)
                .reduce((acc, curr) => acc + (curr.calories || 0), 0)
                .toFixed(2)}
            </p>
            <p className="flex flex-col items-center p-4 bg-white shadow-lg border-t-4 border-indigo-500 rounded-lg">
              <strong>Fat:</strong>{" "}
              {Object.values(nutritionData)
                .reduce((acc, curr) => acc + (curr.fat || 0), 0)
                .toFixed(2)}
            </p>
            <p className="flex flex-col items-center p-4 bg-white shadow-lg border-t-4 border-green-500 rounded-lg">
              <strong>Carbs:</strong>{" "}
              {Object.values(nutritionData)
                .reduce((acc, curr) => acc + (curr.carbs || 0), 0)
                .toFixed(2)}
            </p>
            <p className="flex flex-col items-center p-4 bg-white shadow-lg border-t-4 border-red-500 rounded-lg">
              <strong>Protein:</strong>{" "}
              {Object.values(nutritionData)
                .reduce((acc, curr) => acc + (curr.protein || 0), 0)
                .toFixed(2)}
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white p-4 shadow-lg rounded-lg w-full flex justify-center border-t-4 border-b-4 border-gray-500">
          <div className="w-full">
            <h3 className="text-xl text-indigo-500 font-semibold mb-4 text-center">
              Calorie Trends
            </h3>
            <div className="w-full h-80">
              <Line data={chartData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
      </div>

      {/* Right Drawer */}
      <div className="w-full md:w-1/6 bg-white border-t md:border-t-0 md:border-l border-gray-300 p-4">
        <h2 className="text-lg font-semibold text-indigo-500 mb-4 text-center md:text-left">
          Meals
        </h2>
        <div className="flex flex-col space-y-4">
          {/* Two Rows Layout for Meals */}
          <div className="flex flex-wrap">
            {["breakfast", "lunch", "dinner", "snacks"]
              .slice(0, 2)
              .map((mealType) => (
                <div key={mealType} className="flex-1 p-2">
                  {renderMealInput(mealType)}
                </div>
              ))}
          </div>
          <div className="flex flex-wrap">
            {["breakfast", "lunch", "dinner", "snacks"]
              .slice(2)
              .map((mealType) => (
                <div key={mealType} className="flex-1 p-2">
                  {renderMealInput(mealType)}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDashboard;
