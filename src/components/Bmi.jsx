import React, { useState } from "react";
import { FaWeight } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";

const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [bodyType, setBodyType] = useState("");

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
    classifyBMI(bmiValue);
  };

  const classifyBMI = (bmiValue) => {
    if (bmiValue < 18.5) {
      setMessage("Underweight");
      setBodyType("underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("Normal weight");
      setBodyType("normal");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage("Overweight");
      setBodyType("overweight");
    } else {
      setMessage("Obesity");
      setBodyType("obesity");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  const getBodyImage = () => {
    switch (bodyType) {
      case "underweight":
        return "src/assets/under.jpg";
      case "normal":
        return "src/assets/normal.jpg";
      case "overweight":
        return "src/assets/over.jpg";
      case "obesity":
        return "src/assets/obese.jpg";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen mt-14 flex items-center justify-center bg-rose-300 p-6">
      <div className="flex justify-center space-x-6">
        {/* Left Glassmorphism Box */}
        <div className="w-full p-6 rounded-lg bg-blue-300 shadow-2xl shadow-blue-500">
          <div className="mt-8">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
              What is BMI ?
            </h3>
            <ul className="space-y-4">
              <li className="bg-green-100 p-4 rounded-lg">
                <strong>Meaning : </strong> <br /> Meaning: BMI is a numerical
                value derived from an individual's weight and height. It’s used
                to categorize people into different weight groups, such as
                underweight, normal weight, overweight, and obesity.
              </li>
              <li className="bg-blue-100 p-4 rounded-lg">
                <strong>The BMI is calculated using the formula: </strong>{" "}
                <br />
                <span className="text-red-500 font-semibold ">
                  Weight (kg) / Height (m²)
                </span>
                . It’s a quick and easy method to evaluate whether a person is
                underweight, normal weight, overweight, or obese. However, it
                doesn’t differentiate between muscle and fat.
              </li>

              <li className="bg-yellow-100 p-4 rounded-lg">
                <strong>Applications :</strong>
                <br />{" "}
                <span className="text-red-500 font-semibold ">
                  Health Indicator:
                </span>
                Assesses whether a person has a healthy body weight. Screening{" "}
                <br />
                <span className="text-red-500 font-semibold ">Tool:</span> Helps
                identify potential health risks associated with underweight,
                overweight, or obesity.
              </li>
              <li className="bg-red-100 p-4 rounded-lg">
                <strong>Obesity (BMI 30 and above):</strong> You should consider
                losing weight.
              </li>
            </ul>
          </div>
        </div>

        {/* BMI Calculator */}
        <div className="bg-purple-300 shadow-2xl shadow-purple-500 rounded-lg p-8 max-w-md w-full">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
            BMI Calculator
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center space-x-3">
              <FaWeight className="text-black text-3xl mt-5" />
              <div className="flex-1">
                <label className="block text-gray-700 font-bold">
                  Weight (kg):
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <GiBodyHeight className="text-black text-3xl mt-5" />
              <div className="flex-1">
                <label className="block text-gray-700 font-bold">
                  Height (cm):
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full border border-blue-600 text-black font-bold py-2 px-4 rounded-full hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white transition-all duration-300"
            >
              Calculate BMI
            </button>
          </form>

          {bmi && (
            <div className="mt-6 text-center">
              <p className="text-xl font-bold">
                Your BMI is: <span className="text-blue-500">{bmi}</span>
              </p>
              <p className="text-lg mt-2">{message}</p>
              {bodyType && (
                <div className="mt-4">
                  <img
                    src={getBodyImage()}
                    alt={bodyType}
                    className="mx-auto w-48 h-48"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Glassmorphism Box */}
        <div className=" w-full p-6 rounded-lg bg-green-300  border border-white border-opacity-30 shadow-xl shadow-green-400">
          <div className="mt-8">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
              BMI Types
            </h3>
            <ul className="space-y-4 font-semibold">
              <li className="bg-blue-100 p-4 rounded-lg">
                <span className="text-cyan-700 font-semibold ">
                  Underweight (BMI &lt; 18.5):
                </span>{" "}
                You may need to gain weight.
              </li>
              <li className="bg-green-100 p-4 rounded-lg">
                <span className="text-yellow-700 font-semibold ">
                  Normal weight (BMI 18.5 - 24.9):
                </span>{" "}
                You are at a healthy weight.
              </li>
              <li className="bg-yellow-100 p-4 rounded-lg">
                <span className="text-green-700 font-semibold ">
                  Overweight (BMI 25 - 29.9):
                </span>{" "}
                You may need to lose some weight.
              </li>
              <li className="bg-red-100 p-4 rounded-lg">
                <span className="text-red-500 font-semibold ">
                  Obesity (BMI 30 and above):
                </span>
                You should consider losing weight.
              </li>
            </ul>
          </div>
          <div className="mt-6 flex justify-center">
            <img
              src="src/assets/bmi.png"
              alt="BMI Chart"
              className=" object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
