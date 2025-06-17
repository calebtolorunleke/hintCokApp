import React from "react";
import Nigeria from "./Nigeria";
import Canada from "./Canada";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row gap-5 w-full max-w-5xl">
        <Nigeria />
        <Canada />
      </div>
    </div>
  );
};

export default Home;
