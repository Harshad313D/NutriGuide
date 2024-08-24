// src/components/NutritionInfo.jsx
import React, { useState, useEffect } from "react";
import { getNutritionById } from "../fatsecretService";

const NutritionInfo = ({ foodId }) => {
  const [nutrition, setNutrition] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNutrition = async () => {
      try {
        const data = await getNutritionById(foodId);
        setNutrition(data);
      } catch (err) {
        setError("Failed to fetch nutrition information");
      } finally {
        setLoading(false);
      }
    };

    fetchNutrition();
  }, [foodId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!nutrition) return <p>No data available</p>;

  return (
    <div>
      <h2>{nutrition.food.name}</h2>
      <p>Calories: {nutrition.food.nutrition_calories} kcal</p>
      <p>Protein: {nutrition.food.nutrition_protein} g</p>
      <p>Fat: {nutrition.food.nutrition_fat} g</p>
      <p>Carbohydrates: {nutrition.food.nutrition_carbs} g</p>
    </div>
  );
};

export default NutritionInfo;
