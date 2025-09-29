import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLightbulb,
  FaCalendarCheck,
  FaChartLine,
  FaTools,
  FaReceipt,
} from "react-icons/fa";
import {
  FaApple,
  FaUtensils,
  FaCalendarPlus,
  FaWeight,
  FaHeartbeat,
  FaPalette,
} from "react-icons/fa";

const images = [
  "/healthy1.jpg",
  "/healthy2.jpg",
  "/healthy3.jpg",
  "/healthy4.jpg",
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Home = () => {
  const [heroImage, setHeroImage] = useState(getRandomImage());

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImage(getRandomImage());
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col items-center bg-white overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="flex items-center justify-center h-full relative z-10 text-center text-white p-6">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">
              Transform Your Health with{" "}
              <span className="bg-gradient-to-r from-green-500 via-lime-400 to-emerald-500 text-transparent bg-clip-text">
                Personalized Nutrition
              </span>
            </h1>
            <p className="text-lg mb-6">
              Discover tailored meal plans and expert nutrition advice to
              achieve your health goals.
            </p>
            <Link
              to="/Login"
              className="inline-block border-2 border-green-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 w-11/12 mx-auto">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            Your{" "}
            <span className="bg-gradient-to-r from-green-500 via-lime-400 to-emerald-500 text-transparent bg-clip-text">
              Nutrition, Simplified
            </span>
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Feature 1 */}
            <Link
              to="/health-input"
              className="group flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-yellow-100 to-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-200 text-yellow-500 group-hover:scale-110 transition-transform mb-6">
                <FaLightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Personalized Recommendations
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Tailored food & nutrition tips based on your unique health
                profile.
              </p>
            </Link>

            {/* Feature 2 */}
            <Link
              to="/meal-plan"
              className="group flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-blue-100 to-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-200 text-blue-500 group-hover:scale-110 transition-transform mb-6">
                <FaCalendarCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Smart Meal Planning
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Build flexible, weekly meal plans aligned with your lifestyle &
                goals.
              </p>
            </Link>

            {/* Feature 3 */}
            <Link
              to="/tracking"
              className="group flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-green-100 to-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-200 text-green-500 group-hover:scale-110 transition-transform mb-6">
                <FaChartLine className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Tracking & Insights
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Visualize your journey with clear insights & progress tracking.
              </p>
            </Link>

            {/* Feature 4 */}
            <Link
              to="/bmi"
              className="group flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-purple-200 to-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-300 text-purple-600 group-hover:scale-110 transition-transform mb-6">
                <FaTools className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Interactive Tools</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Explore BMI checkers, nutrition calculators & health tools.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* which nutrient Section */}
      <section className="py-12 w-11/12 ">
        <div class="relative w-11/12 overflow-hidden mt-20 ">
          <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div class="sm:max-w-lg">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Which{" "}
                  <span className="bg-gradient-to-r pr-2 from-green-500 via-emerald-500 to-lime-500 text-transparent bg-clip-text">
                    Nutrients
                  </span>{" "}
                  Are on Your{" "}
                  <span className="bg-gradient-to-r pr-2 from-green-500 via-emerald-500 to-lime-500 text-transparent bg-clip-text">
                    Plate?
                  </span>{" "}
                </h1>

                <p class="mt-4 text-xl text-gray-500">
                  "Explore the full nutritional profile of your favorite meals
                  with ease. Our tool provides detailed insights into calories,
                  macronutrients, and essential vitamins and minerals to help
                  you make informed dietary choices."
                </p>
              </div>
              <div>
                <div class="mt-10">
                  {/* <!-- Decorative image grid --> */}
                  <div
                    aria-hidden="true"
                    class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div class="flex items-center space-x-6 lg:space-x-8">
                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src="https://plus.unsplash.com/premium_photo-1673809798970-30c14cfd0ab6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                              class="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://images.unsplash.com/photo-1478369402113-1fd53f17e8b4?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                              class="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://images.unsplash.com/photo-1505253668822-42074d58a7c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                              class="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                              class="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                              class="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://images.unsplash.com/photo-1506802913710-40e2e66339c9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                              class="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                              class="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={"/NutritionValue"}
                    className="inline-block border-2 border-green-600 text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section class="w-10/12  p-4 ">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div class="lg:col-start-2 md:pl-20">
            <h4 class="text-4xl font-bold leading-8 tracking-tight text-gray-900  sm:leading-9">
              How It Works
            </h4>
            <ul class="mt-10">
              <li>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-md">
                      <FaLightbulb className="w-6 h-6" />
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg font-bold leading-6 text-gray-900 ">
                      Enter Your Health Conditions
                    </h5>
                    <p class="mt-2 text-base leading-6 text-gray-500 ">
                      Provide details about your health conditions to get
                      personalized recommendations.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-md">
                      <FaCalendarCheck className="w-6 h-6" />
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg font-bold leading-6 text-gray-900 ">
                      Receive Personalized Recommendations
                    </h5>
                    <p class="mt-2 text-base leading-6 text-gray-500 ">
                      Get tailored meal suggestions based on your health goals
                      and conditions.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-md">
                      <FaChartLine className="w-6 h-6" />
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg font-bold leading-6 text-gray-900 ">
                      Plan Your Meals
                    </h5>
                    <p class="mt-2 text-base leading-6 text-gray-500 ">
                      Organize your meals to meet your dietary requirements and
                      maintain a healthy lifestyle.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-md">
                      <FaTools className="w-6 h-6" />
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg font-bold leading-6 text-gray-900 ">
                      Track Progress
                    </h5>
                    <p class="mt-2 text-base leading-6 text-gray-500 ">
                      Monitor your progress and make adjustments to your meal
                      plans as needed.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* images */}
          <div class="relative space-y-4 overflow-hidden ml-10 ">
            <div class="flex items-end justify-center ml-8 space-x-4 lg:justify-start">
              <img
                class="w-30 object-cover rounded-lg shadow-lg md:w-56"
                width="200"
                src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="1"
              />
              <img
                class="w-40 h-full object-cover rounded-lg shadow-lg md:w-64"
                width="260"
                src="https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="2"
              />
            </div>
            <div class="flex items-start justify-center ml-32 space-x-4 lg:justify-start">
              <img
                class="w-24 object-cover rounded-lg shadow-lg md:w-40"
                width="170"
                src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="3"
              />
              <img
                class="w-32 object-cover rounded-lg shadow-lg md:w-56"
                width="200"
                src="https://images.unsplash.com/photo-1621792907789-666f0e69ea03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <div
        className="relative "
        // style={{ backgroundImage: "url('your-background-image-url.jpg')" }}
      >
        <div className="relative container p-6 px-6 mx-auto">
          <div className="mb-16 text-center">
            {/* <h2 className="text-base font-semibold tracking-wide text-green-600 uppercase">
              Our Services
            </h2> */}
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-black sm:text-4xl">
              Tailored Solutions for Your{" "}
              <span className="bg-gradient-to-r pr-2 from-green-500 via-emerald-500 to-lime-500 text-transparent bg-clip-text">
                Health
              </span>
              and
              <span className="bg-gradient-to-r pl-2 from-green-500 via-emerald-500 to-lime-500 text-transparent bg-clip-text">
                Wellness
              </span>
            </p>
          </div>
          <div className="flex flex-wrap my-12 ">
            <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 backdrop-blur-sm bg-white/30 border border-white/20 rounded-lg">
              <div className="flex items-center mb-6">
                <FaApple className="text-rose-500 text-3xl" />
                <div className="ml-4 text-xl">
                  Health-Based Meal Recommendations
                </div>
              </div>
              <p className="leading-loose text-gray-500  text-md">
                Get personalized meal recommendations based on your health goals
                and dietary needs, helping you make informed food choices.
              </p>
            </div>
            <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r backdrop-blur-sm bg-white/30 border border-white/20 rounded-lg">
              <div className="flex items-center mb-6">
                <FaUtensils className="text-amber-900 text-3xl" />
                <div className="ml-4 text-xl">Nutrition Value Finder</div>
              </div>
              <p className="leading-loose text-gray-500  text-md">
                Discover the nutritional value of any meal, including detailed
                information on calories, vitamins, and minerals.
              </p>
            </div>
            <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r-0 backdrop-blur-sm bg-white/30 border border-white/20 rounded-lg">
              <div className="flex items-center mb-6">
                <FaCalendarPlus className="text-indigo-500 text-3xl" />
                <div className="ml-4 text-xl">Meal Planning</div>
              </div>
              <p className="leading-loose text-gray-500  text-md">
                Create detailed meal plans tailored to your dietary needs and
                preferences, ensuring a balanced and healthy diet.
              </p>
            </div>
            <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 backdrop-blur-sm bg-white/30 border border-white/20 rounded-lg">
              <div className="flex items-center mb-6">
                <FaWeight className="text-yellow-500 text-3xl" />
                <div className="ml-4 text-xl">BMI Report</div>
              </div>
              <p className="leading-loose text-gray-500  text-md">
                Generate detailed BMI reports to track your body mass index and
                get insights into your overall health.
              </p>
            </div>
            <div className="w-full p-8 md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 backdrop-blur-sm bg-white/30 border border-white/20 rounded-lg">
              <div className="flex items-center mb-6">
                <FaReceipt className="text-pink-500 text-3xl" />
                <div className="ml-4 text-xl">Get delicious Recipes</div>
              </div>
              <p className="leading-loose text-gray-500  text-md">
                "Discover mouthwatering recipes to satisfy your cravings. From
                quick meals to indulgent desserts, elevate your cooking with
                every bite!"
              </p>
            </div>
            <div className="w-full p-8 md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 backdrop-blur-sm bg-white/30 border border-white/20 rounded-lg">
              <div className="flex items-center mb-6">
                <FaPalette className="text-fuchsia-700 text-3xl" />
                <div className="ml-4 text-xl">Meal Plans</div>
              </div>
              <p className="leading-loose text-gray-500  text-md">
                Explore curated meal plans tailored to your needs. Simplify your
                daily meals and enjoy balanced, delicious options every day!.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
