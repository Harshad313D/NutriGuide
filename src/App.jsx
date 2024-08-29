import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "animate.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer
import Home from "./components/Home";
import Profile from "./components/Profile";
import GetInput from "./components/GetInput";
import NutritionValue from "./components/NutritionValue";
import MealPlan from "./components/MealPlan";
import Tracking from "./components/Tracking";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NutritionInfo from "./components/NutritionInfo";
import Bmi from "./components/Bmi";
import Recipes from "./components/Recipes";
import SingleRecipe from "./components/SingleRecipe";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/health-input" element={<GetInput />} />
        <Route path="/NutritionValue" element={<NutritionValue />} />
        <Route path="/meal-plan" element={<MealPlan />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/nutrition-info/:id" element={<NutritionInfo />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/SingleRecipe" element={<SingleRecipe />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
