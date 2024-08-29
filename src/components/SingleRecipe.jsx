import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { BiDish } from "react-icons/bi";
import { PieChart } from "@mui/x-charts";

const SingelRecipe = () => {
  const Apikey = import.meta.env.VITE_API_KEY;
  const { state } = useLocation();
  const [Data, setData] = useState([]);
  const [InfoData, setInfoData] = useState([]);
  const [extreaData, setextreaData] = useState([]);
  const [Steps, setSteps] = useState([]);
  const [similarRecipes, setsimilarRecipes] = useState([]);
  const [nutrition, setnutrition] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = state?.data;
    console.log("data", data);
    setData(data);
  }, [state]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log("data", Data.id);

        const response = await fetch(
          `https://api.spoonacular.com/recipes/${Data.id}/information?apiKey=${Apikey}`
        );
        const data = await response.json();
        if (response.ok) {
          console.log("data", data);
          setInfoData(data);
          setextreaData(data.extendedIngredients);
          setSteps(data.analyzedInstructions[0].steps);
        } else {
          throw new Error("data not fetch");
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    const fetchsimilarrecipes = async () => {
      try {
        setLoading(true);
        console.log("data", Data.id);

        const response = await fetch(
          `https://api.spoonacular.com/recipes/${Data.id}/similar?apiKey=${Apikey}&number=6`
        );
        const data = await response.json();
        if (response.ok) {
          setsimilarRecipes(data);
        } else {
          throw new Error("data not fetch");
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    const fetchnutrition = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${Data.id}/nutritionWidget.json?apiKey=${Apikey}`
        );
        const data = await response.json();
        if (response.ok) {
          setnutrition(data);
          console.log("nutrition data ", data);
        } else {
          throw new Error("data not fetch");
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchnutrition();
    fetchsimilarrecipes();
    fetchData();
  }, [Data]);

  return (
    <div>
      {loading === false ? (
        <div className="w-full ">
          {/* reciepe info */}

          <section class="bg-white flex flex-col items-center ">
            <img
              className="w-full object-cover h-96  "
              src="https://images.unsplash.com/photo-1591267789076-2ea305ab92ec?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              srcset=""
            />
            <div class="grid  pt-8    lg:gap-8 xl:gap-8 lg:pt-12 lg:pb-8  lg:grid-cols-12 w-full md:w-10/12 ">
              <div class="w-full lg:hidden justify-center items-center lg:mt-0 lg:col-span-5   flex">
                <img
                  src={Data.image}
                  className="w-10/12  h-full    object-cover rounded-lg shadow-2xl"
                  alt="loading image..."
                />
              </div>
              <div class="mr-auto  place-self-center  lg:col-span-6  mt-5 md:mt-10 ">
                <div class="max-w-2xl mb-6  font-light flex sm:w-8/12  w-full px-4   text-sm   h-20 text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                  <div className=" h-full  w-full flex flex-col items-center ">
                    <h1 className="text-base font-bold  flex justify-end ">
                      PREP TIME
                    </h1>
                    <div className="w-full  flex justify-center gap-1 sm:h-12 h-6 items-center  ">
                      <IoIosTimer className="sm:w-8 sm:h-8 w-6 h-6" />
                      <div className="flex justify-center items-end ">
                        <h1 className="lg:text-4xl sm:text-2xl text-xl  font-bold ">
                          {InfoData.preparationMinutes == null
                            ? 0
                            : InfoData.preparationMinutes}
                        </h1>
                        <h1 className="text-sm font-bold">min</h1>
                      </div>
                    </div>
                  </div>
                  <div className=" h-full w-full flex flex-col items-center">
                    <h1 className="text-base font-bold sm:pl-2 flex justify-end ">
                      COOK TIME
                    </h1>
                    <div className="w-full  flex justify-center gap-1 sm:h-12 h-6 items-center ">
                      <IoIosTimer className="w-8 h-8" />
                      <div className="flex justify-center items-end ">
                        <h1 className="lg:text-4xl sm:text-2xl text-xl  font-bold  ">
                          {InfoData.cookingMinutes == null
                            ? 0
                            : InfoData.cookingMinutes}
                        </h1>
                        <h1 className="text-sm font-bold">min</h1>
                      </div>
                    </div>
                  </div>
                  <div className=" h-full w-full flex flex-col  items-center">
                    <h1 className="text-base font-bold sm:pl-2 pl-0 flex justify-end ">
                      READY TIME
                    </h1>
                    <div className="w-full  flex justify-center gap-1 sm:h-12 h-6 items-center ">
                      <IoIosTimer className="w-8 h-8" />
                      <div className="flex justify-center items-end ">
                        <h1 className="lg:text-4xl sm:text-2xl text-xl  font-bold ">
                          {InfoData.readyInMinutes === undefined
                            ? 0
                            : InfoData.readyInMinutes}
                        </h1>
                        <h1 className="text-sm font-bold">min</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full pl-4">
                  <h1 class="max-w-2xl  px-4 mb-4 sm:text-4xl text-2xl font-extrabold tracking-tight leading-none ">
                    {Data.title}
                  </h1>
                  <p
                    class="mb-2 pl-4   pr-6 py-3 indent-6 text-gray-500 text-justify "
                    dangerouslySetInnerHTML={{ __html: InfoData.summary }}
                  ></p>
                  <div class="flex items-center px-3  gap-2">
                    <div class="flex items-center">
                      <svg
                        class="h-8 w-8 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                      </svg>

                      <svg
                        class="h-8 w-8 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                      </svg>

                      <svg
                        class="h-8 w-8 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                      </svg>

                      <svg
                        class="h-8 w-8 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                      </svg>

                      <svg
                        class="h-8 w-8 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                      </svg>
                    </div>

                    <p class="text-lg font-medium text-gray-900 ">5.0</p>
                    <p class="text-lg font-medium text-gray-500 ">(455)</p>
                  </div>
                </div>

                <div className="w-full pl-4 text-4xl font-semibold mt-10">
                  <h1>Nutrition values</h1>
                </div>

                {nutrition !== null ? (
                  <PieChart
                    className="my-5 px-4"
                    series={[
                      {
                        data: [
                          {
                            id: 0,
                            value: parseInt(nutrition.calories),
                            label: "calories",
                          },
                          {
                            id: 1,
                            value: parseInt(nutrition.fat),
                            label: "fat",
                          },
                          {
                            id: 2,
                            value: parseInt(nutrition.carbs),
                            label: "carbs",
                          },
                          {
                            id: 3,
                            value: parseInt(nutrition.protein),
                            label: "protein",
                          },
                        ],
                      },
                    ]}
                    width={400}
                    height={200}
                  />
                ) : (
                  <PieChart
                    className="my-5 px-4"
                    series={[
                      {
                        data: [
                          {
                            id: 0,
                            value: 45,
                            label: "calories",
                          },
                          { id: 1, value: 45, label: "fat" },
                          {
                            id: 2,
                            value: 30,
                            label: "carbs",
                          },
                          {
                            id: 3,
                            value: 15,
                            label: "protein",
                          },
                        ],
                      },
                    ]}
                    width={400}
                    height={200}
                  />
                )}
              </div>
              <div class="w-full hidden justify-center lg:mt-0 lg:col-span-5     lg:flex">
                <img
                  src={Data.image}
                  className="w-full  h-96 object-cover rounded-lg shadow-2xl"
                  alt="loading..."
                />
              </div>
            </div>
          </section>

          {/* Ingredients */}
          <div className="w-full  flex flex-col items-center justify-center px-4 ">
            <div className="w-full sm:w-10/12  px-4  flex justify-start ">
              <h2 class="mt-3 lg:text-4xl font-semibold text-gray-900  text-2xl">
                Ingredients
              </h2>
            </div>
            <ul
              role="list"
              class="divide-y sm:w-10/12 w-full px-2 mt-10 grid sm:grid-cols-2 grid-cols-1 gap-x-12 divide-gray-100"
            >
              {extreaData.map((items, index) => {
                return (
                  <li
                    key={index}
                    class="flex justify-between gap-x-4 py-5 col-span-1"
                  >
                    <div class="flex min-w-0 gap-x-4">
                      <div class="min-w-0 flex justify-center items-center  ">
                        <p class="text-2xl font-semibold leading-6 text-gray-900">
                          {items.name}
                        </p>
                      </div>
                    </div>
                    <div class=" shrink-0 justify-center sm:flex sm:flex-col sm:items-end">
                      <p class="text-xl font-bold leading-6 text-gray-900">
                        {items.amount} {items.unit}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Recipe header  */}
          <section class="bg-white w-full flex justify-center items-center  ">
            <div class="font-light flex  sm:w-10/12 w-full px-4  mt-9 justify-between items-center gap-5 text-gray-500 sm:text-lg ">
              <h2 class="mb-4 sm:text-4xl text-2xl tracking-tight font-extrabold text-gray-900 ">
                Recipe Steps
              </h2>
              <dl class="flex justify-end items-center sm:gap-10 gap-4  text-green-500 font-bold  ">
                <div class="flex flex-col items-start">
                  <BiDish className="h-8 w-8 " />
                  <dt class=" ">Steps 4 </dt>
                </div>
                <div class="flex flex-col items-start">
                  <IoIosTimer className="h-8 w-8 " />
                  <dt class="  ">40 min </dt>
                </div>
              </dl>
            </div>
          </section>

          {/* steps  */}
          <section className="w-full flex flex-col justify-center items-center py-6">
            {Steps.map((items) => {
              return (
                <div className="w-full md:w-10/12 flex flex-col items-center py-4 px-4 text-justify  justify-center">
                  <div className="w-full ">
                    <h1 className="w-full  text-2xl  font-bold ">
                      Step {items.number}{" "}
                    </h1>
                    <p className="w-full pr-4 px-2 text-lg pt-1 pb-2">
                      {items.step}{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>

          {/* similar recipes  */}
          <section class="bg-white  ">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
              <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                  Similar Recipes
                </h2>
              </div>
              <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                {similarRecipes.map((items) => {
                  return (
                    <div class="items-center bg-gray-50  rounded-lg shadow sm:flex ">
                      <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 ">
                          <p>{items.title}</p>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen text-gray-700">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default SingelRecipe;
