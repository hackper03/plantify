import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const SavedItem = (props) => {
  const {moveToCart} = useContext(CartContext)
  return (
    <div className="flex flex-col sm:flex-row border-b border-gray-200 pb-6">
    <div className="flex-shrink-0 w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden mb-4 sm:mb-0">
      <img
        src={props.image_url}
        alt="Mechanical Keyboard"
        className="w-full h-full object-cover object-center"
      />
    </div>
    <div className="sm:ml-6 flex-1">
      <div className="flex justify-between mb-2">
        <h4 className="text-base font-medium text-gray-900">
          {props.name}
        </h4>
        <p className="text-base font-medium text-gray-900">
        &#8377;{props.price}
        </p>
      </div>
      <p className="text-sm text-gray-500 mb-2">
        {props.description}
      </p>
      <div className="flex items-center justify-between">
        <button className="text-green-600 hover:text-green-700 text-sm" onClick={() => moveToCart(props)}>
          Move to Cart
        </button>
        <button className="text-red-600 hover:text-red-700 text-sm">
          Remove
        </button>
      </div>
    </div>
  </div>
  )
}

export default SavedItem;