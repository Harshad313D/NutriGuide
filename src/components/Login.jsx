import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [alertMessage, setAlertMessage] = useState(""); // Add this line

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlertMessage("Invalid username or password !");
  };

  return (
    <div
      className="min-h-screen pt-40 bg-gray-100 flex flex-col items-center p-4"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1600676074626-e1f6b5981f25?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl text-black font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-black font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Login
        </button>
        <p className="mt-4 text-gray-700">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 ">
            Sign Up
          </a>
        </p>
      </form>
      {alertMessage && (
        <div className="mt-4 p-4 text-red-600 bg-red-100 border border-red-300 rounded">
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default Login;
