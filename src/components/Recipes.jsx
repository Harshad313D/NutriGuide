import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [RecipeData, setRecipeData] = useState([]);
  const [totalPages, settotalPages] = useState(0);
  const [CurrentPage, setCurrentPage] = useState(1);
  const Apikey = import.meta.env.VITE_API_KEY;
  const [Loading, setLoading] = useState(false);
  const [searchName, setsearchName] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${Apikey}&number=6&offset=${
            (CurrentPage - 1) * 6
          }`
        );
        const data = await response.json();
        if (response.ok) {
          console.log("APi Data== ", Apikey);
          setRecipeData(data.results);
          settotalPages(Math.ceil(data.totalResults / 6));
          console.log("reciepe data===", data.results);
        } else {
          throw new Error(response.message || "data will not given ");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchdata();
  }, [CurrentPage]);

  useEffect(() => {
    if (!RecipeData.length && CurrentPage === 1) {
      setCurrentPage(1); // Ensures data fetch happens on reload
    }
  }, [RecipeData, CurrentPage]);

  const searchdata = async (e) => {
    e.preventDefault();
    console.log("search name =", searchName);
    try {
      if (searchName !== "") {
        setLoading(true);
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${Apikey}&query=${searchName}&number=6&offset=${
            (CurrentPage - 1) * 6
          }`
        );

        const data = await response.json();
        if (response.ok) {
          console.log("data.results==", data.results);
          setRecipeData(data.results);
          settotalPages(Math.ceil(data.totalResults / 6));
          setsearchName("");
        } else {
          throw new Error(response.message || "data will not given ");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full ">
      <div className="w-full flex  justify-center items-center   ">
        <img
          className=" relative object-cover "
          style={{ height: 700, width: "100%" }}
          src="https://images.unsplash.com/photo-1618828599549-688da17cf56c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          srcset=""
        />
        <div className="absolute lg:w-7/12 w-full px-10 my-10">
          <h1 class="text-2xl text-center font-bold tracking-tight text-gray-200 md:text-4xl lg:text-6xl my-3">
            Where Every Meal Tells a Story!
          </h1>

          <form
            class=" mx-auto  mt-5 max-w-lg"
            onSubmit={(e) => {
              searchdata(e);
            }}
          >
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block outline-none w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search Mockups, Logos..."
                required
                value={searchName}
                onChange={(e) => {
                  setsearchName(e.target.value);
                }}
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {RecipeData.length > 0 ? (
        <section class="bg-gray-50 py-8 antialiased   md:py-12">
          <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
              <div>
                <h2 class="mt-3 text-xl font-semibold text-gray-900  sm:text-2xl">
                  Similar Recipes
                </h2>
              </div>
            </div>

            <div class="mb-4 grid gap-8 sm:grid-cols-2 md:mb-8 lg:grid-cols-2 xl:grid-cols-3">
              {RecipeData.map((items) => {
                return (
                  <Link to={"/SingleRecipe"} state={{ data: items }}>
                    <div class="rounded-lg border border-gray-200  px-0  shadow-sm ">
                      <div class="h-56 w-full rounded-lg">
                        <img
                          class="mx-auto h-full object-cover  rounded-t-lg w-full"
                          src={items.image}
                          alt=""
                        />
                      </div>
                      <div class="py-6 ps-6">
                        <p class="text-lg font-semibold leading-tight text-gray-900 hover:underline ">
                          {items.title}
                        </p>

                        <div class="mt-2 flex items-center gap-2">
                          <div class="flex items-center">
                            <svg
                              class="h-4 w-4 text-yellow-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                            </svg>

                            <svg
                              class="h-4 w-4 text-yellow-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                            </svg>

                            <svg
                              class="h-4 w-4 text-yellow-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                            </svg>

                            <svg
                              class="h-4 w-4 text-yellow-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                            </svg>

                            <svg
                              class="h-4 w-4 text-yellow-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                            </svg>
                          </div>

                          <p class="text-sm font-medium text-gray-900 ">5.0</p>
                          <p class="text-sm font-medium text-gray-500 ">
                            (455)
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div class="flex w-full justify-between">
              {CurrentPage > 1 ? (
                <a
                  onClick={() => {
                    setCurrentPage(CurrentPage - 1);
                  }}
                  class="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 "
                >
                  <svg
                    class="w-3.5 h-3.5 me-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 5H1m0 0 4 4M1 5l4-4"
                    />
                  </svg>
                  Previous
                </a>
              ) : (
                <div></div>
              )}

              {CurrentPage < totalPages ? (
                <a
                  onClick={() => {
                    setCurrentPage(CurrentPage + 1);
                  }}
                  class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 "
                >
                  Next
                  <svg
                    class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <main class="grid min-h-full place-items-center bg-white px-6 py-24  sm:py-52 lg:px-8">
          <div class="text-center">
            <p class="text-base font-semibold text-indigo-600">404</p>
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Data not found
            </h1>
            <p class="mt-6 text-base leading-7 text-gray-600">
              Sorry, we couldn’t find the data you’re looking for.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={"/"}
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
              <Link to={"/"} class="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default Recipes;
