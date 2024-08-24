// src/api/fatsecret.js
import axios from 'axios';

const API_URL = 'https://platform.fatsecret.com/rest/server.api';
const ACCESS_TOKEN = '7215cc26dacb48e9b469ce5b490d002c'; // Replace with your actual access token

export const getNutritionById = async (foodId) => {
  try {
    const response = await axios.post(API_URL, null, {
      params: {
        method: 'food.get.v2',
        food_id: foodId,
        format: 'json'
      },
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching nutrition data:', error);
    throw error;
  }
};
