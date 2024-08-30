import React, { useState } from "react";
import ConditionsModal from "../components/ConditionsModal"; // Import the modal
import { FaInfoCircle } from "react-icons/fa"; // Import the icon

// Sample data with Indian meals for different health conditions
const mealsData = {
  "Weight Loss": [
    {
      title: "Peanut Butter and Chocolate Oatmeal",
      calories: 350,
      protein: 10,
      fat: 15,
      carbs: 45,
    },
    {
      title: "Grilled Chicken Salad",
      calories: 250,
      protein: 30,
      fat: 10,
      carbs: 20,
    },
    {
      title: "Vegetable Stir-fry",
      calories: 200,
      protein: 8,
      fat: 5,
      carbs: 30,
    },
    {
      title: "Quinoa and Black Bean Bowl",
      calories: 300,
      protein: 12,
      fat: 7,
      carbs: 40,
    },
    {
      title: "Greek Yogurt with Berries",
      calories: 180,
      protein: 15,
      fat: 2,
      carbs: 30,
    },
    {
      title: "Chia Pudding with Mango",
      calories: 220,
      protein: 8,
      fat: 10,
      carbs: 30,
    },
    { title: "Masoor Dal Soup", calories: 180, protein: 12, fat: 5, carbs: 25 },
    { title: "Palak Paneer", calories: 300, protein: 20, fat: 15, carbs: 20 },
    {
      title: "Vegetable Khichdi",
      calories: 250,
      protein: 10,
      fat: 8,
      carbs: 35,
    },
    {
      title: "Moong Dal Chilla",
      calories: 200,
      protein: 15,
      fat: 4,
      carbs: 25,
    },
  ],
  "Heart Health": [
    {
      title: "Rajma (Kidney Bean Curry)",
      calories: 350,
      protein: 15,
      fat: 8,
      carbs: 50,
    },
    {
      title: "Tandoori Chicken",
      calories: 300,
      protein: 25,
      fat: 12,
      carbs: 15,
    },
    { title: "Baingan Bharta", calories: 200, protein: 5, fat: 10, carbs: 25 },
    { title: "Chana Masala", calories: 350, protein: 15, fat: 8, carbs: 45 },
    {
      title: "Vegetable Sambar",
      calories: 250,
      protein: 10,
      fat: 5,
      carbs: 35,
    },
    { title: "Palak Soup", calories: 180, protein: 10, fat: 5, carbs: 20 },
    { title: "Cucumber Raita", calories: 150, protein: 6, fat: 5, carbs: 20 },
    { title: "Masoor Dal", calories: 220, protein: 12, fat: 3, carbs: 30 },
    { title: "Vegetable Idli", calories: 180, protein: 7, fat: 2, carbs: 30 },
    {
      title: "Grilled Chicken Salad",
      calories: 250,
      protein: 30,
      fat: 10,
      carbs: 20,
    },
  ],
  Diabetes: [
    {
      title: "Bhindi Masala (Okra Curry)",
      calories: 200,
      protein: 6,
      fat: 8,
      carbs: 25,
    },
    { title: "Cucumber Raita", calories: 150, protein: 6, fat: 5, carbs: 20 },
    { title: "Palak Soup", calories: 180, protein: 10, fat: 5, carbs: 20 },
    { title: "Vegetable Idli", calories: 180, protein: 7, fat: 2, carbs: 30 },
    {
      title: "Moong Dal Chilla",
      calories: 200,
      protein: 15,
      fat: 4,
      carbs: 25,
    },
    { title: "Masoor Dal", calories: 220, protein: 12, fat: 3, carbs: 30 },
    { title: "Palak Paneer", calories: 300, protein: 20, fat: 15, carbs: 20 },
    {
      title: "Rajma with Brown Rice",
      calories: 350,
      protein: 15,
      fat: 8,
      carbs: 50,
    },
    {
      title: "Vegetable Khichdi",
      calories: 250,
      protein: 10,
      fat: 8,
      carbs: 35,
    },
    { title: "Moong Dal Soup", calories: 180, protein: 12, fat: 5, carbs: 25 },
  ],
  "High Fiber": [
    {
      title: "Chia Seed Pudding",
      calories: 220,
      protein: 8,
      fat: 10,
      carbs: 30,
    },
    {
      title: "Oatmeal with Fruits",
      calories: 250,
      protein: 6,
      fat: 4,
      carbs: 40,
    },
    {
      title: "Whole Wheat Roti with Vegetable Curry",
      calories: 300,
      protein: 10,
      fat: 8,
      carbs: 45,
    },
    {
      title: "Rajma with Brown Rice",
      calories: 350,
      protein: 15,
      fat: 8,
      carbs: 50,
    },
    {
      title: "Mixed Bean Salad",
      calories: 200,
      protein: 12,
      fat: 4,
      carbs: 30,
    },
    { title: "Palak Soup", calories: 180, protein: 10, fat: 5, carbs: 20 },
    { title: "Barley Khichdi", calories: 250, protein: 10, fat: 7, carbs: 35 },
    {
      title: "Bhindi Masala (Okra Curry)",
      calories: 200,
      protein: 6,
      fat: 8,
      carbs: 25,
    },
    { title: "Green Smoothie", calories: 180, protein: 5, fat: 3, carbs: 35 },
    {
      title: "Vegetable Stir-fry",
      calories: 200,
      protein: 8,
      fat: 5,
      carbs: 30,
    },
  ],
  "High Protein": [
    { title: "Paneer Tikka", calories: 300, protein: 25, fat: 15, carbs: 20 },
    { title: "Chicken Curry", calories: 350, protein: 30, fat: 20, carbs: 25 },
    {
      title: "Moong Dal Chilla",
      calories: 200,
      protein: 15,
      fat: 4,
      carbs: 25,
    },
    { title: "Egg Bhurji", calories: 250, protein: 20, fat: 15, carbs: 10 },
    { title: "Palak Paneer", calories: 300, protein: 20, fat: 15, carbs: 20 },
    {
      title: "Tandoori Chicken",
      calories: 300,
      protein: 25,
      fat: 12,
      carbs: 15,
    },
    { title: "Chicken Kebab", calories: 250, protein: 20, fat: 10, carbs: 15 },
    {
      title: "Rajma (Kidney Bean Curry)",
      calories: 350,
      protein: 15,
      fat: 8,
      carbs: 50,
    },
    {
      title: "Vegetable Khichdi",
      calories: 250,
      protein: 10,
      fat: 8,
      carbs: 35,
    },
    {
      title: "Grilled Chicken Salad",
      calories: 250,
      protein: 30,
      fat: 10,
      carbs: 20,
    },
  ],
  "Low Sodium": [
    { title: "Palak Soup", calories: 180, protein: 10, fat: 5, carbs: 20 },
    { title: "Cucumber Raita", calories: 150, protein: 6, fat: 5, carbs: 20 },
    {
      title: "Tandoori Chicken (without salt)",
      calories: 300,
      protein: 25,
      fat: 12,
      carbs: 15,
    },
    { title: "Vegetable Idli", calories: 180, protein: 7, fat: 2, carbs: 30 },
    { title: "Moong Dal Soup", calories: 180, protein: 12, fat: 5, carbs: 25 },
    { title: "Palak Paneer", calories: 300, protein: 20, fat: 15, carbs: 20 },
    {
      title: "Grilled Chicken Salad",
      calories: 250,
      protein: 30,
      fat: 10,
      carbs: 20,
    },
    { title: "Masoor Dal Soup", calories: 180, protein: 12, fat: 5, carbs: 25 },
    {
      title: "Bhindi Masala (Okra Curry)",
      calories: 200,
      protein: 6,
      fat: 8,
      carbs: 25,
    },
    {
      title: "Vegetable Khichdi",
      calories: 250,
      protein: 10,
      fat: 8,
      carbs: 35,
    },
  ],
  "Low Carb": [
    {
      title: "Grilled Chicken Salad",
      calories: 250,
      protein: 30,
      fat: 10,
      carbs: 20,
    },
    {
      title: "Salmon with Asparagus",
      calories: 400,
      protein: 30,
      fat: 20,
      carbs: 15,
    },
    { title: "Avocado Toast", calories: 250, protein: 6, fat: 15, carbs: 30 },
    { title: "Palak Paneer", calories: 300, protein: 20, fat: 15, carbs: 20 },
    {
      title: "Tandoori Chicken",
      calories: 300,
      protein: 25,
      fat: 12,
      carbs: 15,
    },
    { title: "Egg Bhurji", calories: 250, protein: 20, fat: 15, carbs: 10 },
    {
      title: "Moong Dal Chilla",
      calories: 200,
      protein: 15,
      fat: 4,
      carbs: 25,
    },
    { title: "Chicken Kebab", calories: 250, protein: 20, fat: 10, carbs: 15 },
    {
      title: "Vegetable Stir-fry",
      calories: 200,
      protein: 8,
      fat: 5,
      carbs: 30,
    },
    { title: "Masoor Dal Soup", calories: 180, protein: 12, fat: 5, carbs: 25 },
  ],
};

const GetInput = () => {
  const [condition, setCondition] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [noResult, setNoResult] = useState(true);
  const [showImage, setShowImage] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedCondition = condition.trim().toLowerCase();

    const lowerCaseMealsData = Object.keys(mealsData).reduce((acc, key) => {
      acc[key.toLowerCase()] = mealsData[key];
      return acc;
    }, {});

    if (lowerCaseMealsData[trimmedCondition]) {
      setRecommendations(lowerCaseMealsData[trimmedCondition]);
      setNoResult(false);
      setShowImage(true);
    } else {
      setRecommendations([]);
      setNoResult(true);
      setShowImage(false);
    }
  };

  return (
    <div className="h-full rounded-lg shadow-lg overflow-hidden ">
      <div className="w-full h-full flex items-center justify-center ">
        <img
          className="w-full relative object-cover"
          src="https://img.freepik.com/free-photo/crop-plate-with-salad_23-2147753678.jpg?t=st=1724962127~exp=1724965727~hmac=c7ab0028c1878b7f32bfc1916609ceb7a1a53ec6217293a33b1d1f985f7def09&w=1380"
          alt=""
          style={{
            height: 750,
          }}
        />

        <div className="absolute w-full sm:w-10/12 md:w-8/12 pt-36 px-4 sm:px-6 md:px-10">
          <h1 className="text-3xl font-extrabold text-white mb-6 text-center lg:text-white sm:text-green-500 md:text-red-600">
            Meal Recommendations
          </h1>
          <form
            onSubmit={handleSubmit}
            className="mb-6 flex flex-col items-center"
          >
            <input
              type="text"
              placeholder="Enter your health condition (e.g., Weight Loss, Heart Health, Diabetes, etc.)"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="w-full sm:w-10/12 md:w-7/12 p-4 border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 rounded-2xl overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0">
                Get Recommendations
              </span>
            </button>
            {/* standard conditions open */}
            <div className="mt-2">
              <div
                onClick={openModal}
                className="flex items-center cursor-pointer text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
              >
                <FaInfoCircle size={14} />
                <p className="text-sm ml-1">Show Standard Conditions</p>
              </div>
              <ConditionsModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
            {/* standard conditions closed */}
          </form>
          <div className="flex flex-col items-center mt-20">
            {showImage && (
              <img
                className="w-1/2 h-auto mt-6"
                src="https://static.wixstatic.com/media/ccfa0a_fe53f90f0cd648aea537ee95106b4680~mv2.gif"
                alt="Scroll Down"
              />
            )}
          </div>
        </div>
      </div>

      {noResult ? (
        <p className="text-gray-400  mt-5  text-md text-center">
          No results found for the entered condition. Please try another
          condition.
        </p>
      ) : (
        <div className="mt-12 p-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <br />
          {showImage && (
            <h2 className="text-2xl font-bold text-center text-black mb-3">
              Recommended Meals for
              <span className=" text-indigo-500"> {condition}</span>
            </h2>
          )}
          <br />
          {/* meals result */}

          {recommendations.length > 0 ? (
            recommendations.map((meal, index) => (
              <div
                key={index}
                className={`p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out ${
                  index % 2 === 0
                    ? "bg-gradient-to-br from-purple-300 to-red-300"
                    : "bg-gradient-to-br from-blue-300 to-green-300"
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {meal.title}
                </h2>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">
                    Calories:{" "}
                    <span className="text-red-500">{meal.calories}</span>
                  </p>
                  <p className="text-gray-700 font-medium">
                    Protein:{" "}
                    <span className="text-green-500">{meal.protein}g</span>
                  </p>
                  <p className="text-gray-700 font-medium">
                    Fat: <span className="text-blue-500">{meal.fat}g</span>
                  </p>
                  <p className="text-gray-700 font-medium">
                    Carbs:{" "}
                    <span className="text-orange-500">{meal.carbs}g</span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      )}
    </div>
  );
};

export default GetInput;
