import React from "react";
import { NavLink } from "react-router-dom";
import { BarChart3 } from "lucide-react";

const Homepage = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-blue-50 px-4">
        <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <BarChart3 className="w-10 h-10 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Welcome to your GoldTree Dashboard
          </h1>
          <p className="text-gray-500 mb-6">Click to get started.</p>
          <NavLink
            to="./report"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded transition duration-200"
          >
            Go to Report
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Homepage;
