import React, { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import ProductContent from "../context/ProductContent";

const Card = (props) => {
  const { addToCart } = useContext(CartContext)
  const {setProductID} =  useContext(ProductContent)
  const navigate = useNavigate();

  const handleViewProduct = () => {
    console.log("Product ID in cart:", props.plant_id);
    setProductID(props.plant_id)
    navigate(`/plant/${props.plant_id}`, { state: { product: props } });
  };
 
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 bg-green-100 overflow-hidden">
        {/* <!-- Plant image placeholder --> */}
        <div className="w-full h-full bg-green-50 flex items-center justify-center">
          <img
            src={props.image_url}
            alt={props.name}
            onClick={handleViewProduct}
            className="h-full w-full object-cover hover:cursor-pointer" 
          />
        </div>

        {/* <!-- Badge --> */}
        <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
          {props.badge_text}
        </div>
          {/* <!-- Quick actions -->  */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
              <button
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300"
                aria-label="Quick view" onClick={handleViewProduct}
              >
                <FiEye className="h-5 w-5 text-green-700" />
              </button>
              <button
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300"
                aria-label="Add to wishlist"
              >
                <FaHeartCirclePlus className="h-5 w-5 text-green-700" />
              </button>
              </div>
                </div>
                <div className="p-4">
              <div className="flex justify-between items-start mb-1" onClick={handleViewProduct}>
              <h3 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300 hover:cursor-pointer" >
                {props.name}
              </h3> 
              <div className="flex items-center">
                {Array.from({ length: Math.round(props.rating) }, (_, index) => (
                <FaStar key={index} className="h-4 w-4 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-600 ml-1">{props.rating}</span>
              </div>
              </div>
              <div className="text-gray-600 text-sm mb-3">{props.description}</div>
              <div className="flex items-center justify-between">
              <div>
                <span className="text-green-600 font-bold">&#8377;{props.price}</span>
                <span className="text-gray-400 text-sm line-through ml-2">
                &#8377;{props.original_price}
                </span>
              </div>
              <button
                className="bg-green-50 hover:bg-green-100 text-green-700 font-medium py-2 px-4 transition duration-300 flex items-center rounded-lg border-2 border-green-600"
                onClick={() => addToCart(props)}
              >
                <FaCartPlus className="h-5 w-5 mr-1" />
                Add
              </button>
              </div>
                </div>
              </div>
    // console.log(props)
  );
};

export default Card;
