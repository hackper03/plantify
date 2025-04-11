import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import Category from "./Categry";
import CartProvider, { CartContext } from "../context/CartContext";
import axios from "axios";
import { FeaturedContent, FeaturedProvider } from "./FeaturedContent";
import { ProductProvider } from "../context/ProductContent";

const Featured = () => {
  const [cardDetails, setCardDetails] = useState([])
  const [visiblePlants, setVisiblePlants] = useState(8); // Initial number of plants to display
  const { plants } = useContext(FeaturedContent);
  const handleLoadMore = () => {
    setVisiblePlants((prevVisiblePlants) => prevVisiblePlants + 8); // Load 8 more plants
  };
  const {cartItems} = useContext(CartContext)
  return (
    <div id="root">
      <section id="featured-products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* <!-- Section Header --> */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Plants
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our collection of beautiful plants that will transform
              your space into a green sanctuary.
            </p>
          </div>

          {/* <!-- Category Filter --> */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Category />
          </div>

          {/* <!-- Products Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {/* <!-- Product Cards --> */}
            <ProductProvider >
            <CartProvider >
            {plants.slice(0, visiblePlants).map((product, index) => (
                <Card key={index} {...product} />
            ))}
            </CartProvider>
            </ProductProvider>
          </div>
          <div className="text-center mt-12">
           
              <button
                onClick={handleLoadMore}
                className="inline-block bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                View All Plants
              </button>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
