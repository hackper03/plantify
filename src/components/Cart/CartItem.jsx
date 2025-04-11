import React, { useContext } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'


const CartItem = (props) => {
 const {removeFromCart, incrementItemQuantity, decrementItemQuantity, saveForLater  } = useContext(CartContext)

 return (
    <div className="flex flex-col sm:flex-row border-b border-gray-200 pb-6">
      <div className="flex-shrink-0 w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden mb-4 sm:mb-0">
        <img
          src={props.image_url}
          alt="Wireless Headphones"
          className="w-full h-full object-cover object-center hover:cursor-crosshair"
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
          <div className="flex items-center">
            <button className="p-1 rounded-md bg-green-600 hover:bg-green-700" onClick={() => decrementItemQuantity(props.plant_id)}>
              <FaMinus className="h-4 w-4 text-white" />
            </button>
            <span className="mx-2 text-gray-700">{props.quantity}</span>
            <button className="p-1 rounded-md bg-green-600 hover:bg-green-700" onClick={() => incrementItemQuantity(props.plant_id)}>
              <FaPlus className="h-4 w-4 text-white" />
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="text-green-600 hover:text-green-700 text-sm" onClick={() => saveForLater(props)}>
              Save for later
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => removeFromCart(props)}
              className="text-red-600 hover:text-red-700 text-sm"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem