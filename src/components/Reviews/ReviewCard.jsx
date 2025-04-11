import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = (props) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 flex-1 transform transition duration-500 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center mb-6">
        <div className="mr-4">
          <img
            src={props.imageUrl}
            alt="Customer"
            className="w-16 h-16 rounded-full object-cover border-2 border-green-200"
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{props.name}</h4>
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[...Array(props.rating)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400 h-5 w-5" />
              ))}
            </div>
            <span className="text-gray-500 text-sm ml-2">
              Balcony Garden Design
            </span>
          </div>
        </div>
      </div>
      <blockquote className="text-gray-600 italic mb-4">
        "{props.description}"
      </blockquote>
      <p className="text-sm text-gray-500">Customer since {props.year}</p>
    </div>
  );
};

export default ReviewCard;
