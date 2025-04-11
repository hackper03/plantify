import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { FeaturedContent } from "./FeaturedContent";

const Category = () => {
  const {category, setCategoryID } = useContext(FeaturedContent);
  const [activeCategory, setActiveCategory] = useState("All Products");
  const setCategoryDetails = (categoryName, category) => {
    setActiveCategory(categoryName);
    setCategoryID(categoryName === "All Products" ? 0 : category.category_id);
  }
  return (
    <>
      <button
        className={`px-6 py-2 rounded-full text-sm font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
          activeCategory === "All Products"
            ? "bg-green-600 text-white focus:ring-green-500 hover:bg-green-700"
            : "bg-gray-100 text-gray-700 focus:ring-gray-300 hover:bg-gray-200"
        }`}
        onClick={() => setCategoryDetails("All Products", 0)}
      >
        All Products
      </button>
      {category.map((item) => (
        <button
          key={item.name}
          className={`px-6 py-2 rounded-full text-sm font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
            activeCategory === item.name
              ? "bg-green-600 text-white focus:ring-green-500 hover:bg-green-700"
              : "bg-gray-100 text-gray-700 focus:ring-gray-300 hover:bg-gray-200"
          }`}
          onClick={() => setCategoryDetails(item.name, item)}
        >
          {item.name}
        </button>
      ))}
    </>
  );
};

export default Category;

// <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-medium transition duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
// Indoor
// </button>