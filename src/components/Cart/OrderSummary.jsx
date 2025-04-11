import React, { useContext } from 'react'
import { FaLock } from 'react-icons/fa6'
import { IoIosLock } from 'react-icons/io'
import { CartContext } from '../context/CartContext'

const OrderSummary = () => {
    const shippingCharges = 10;
    const gst = 12;
    const calculateGST = (amount) => {
        return parseFloat((amount * gst) / 100).toFixed(2);
    };

    const calculateTotal = () => {
        const subtotal = getTotalPrice();
        const totalWithShipping = subtotal + shippingCharges;
        const totalWithGST = totalWithShipping + parseFloat(calculateGST(totalWithShipping));
        return totalWithGST.toFixed(2);
    };
   const {cartQuantity, getTotalPrice} = useContext(CartContext)
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm top-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">
      Order Summary
    </h3>

    <div className="space-y-4 mb-6">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Subtotal ({cartQuantity} items)</span>
        <span className="text-gray-900 font-medium">&#8377;{cartQuantity}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Shipping</span>
        <span className="text-gray-900 font-medium">&#8377;9.99</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">GST</span>
        <span className="text-gray-900 font-medium">&#8377;{calculateGST(getTotalPrice())}</span>
      </div>
      <div className="border-t border-gray-200 pt-4 flex justify-between">
        <span className="text-base font-medium text-gray-900">
          Total
        </span>
        <span className="text-base font-bold text-gray-900">
        &#8377;{calculateTotal()}
        </span>
      </div>
    </div>

    <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center mb-4">
    <IoIosLock  className="h-5 w-5 mr-2"/>
      Proceed to Checkout
    </button>

    <div className="space-y-3">
      <div className="flex items-center justify-center text-sm text-gray-500">
      <FaLock  className="h-5 w-5 mr-2 text-green-600"/>
        Secure checkout
      </div>
      <div className="flex justify-center">
        <img
          src="./React Admin Dashboard _ Data Management &amp; Shopping Cart_files/64748b(7)"
          alt="Payment methods"
          className="h-8"
        />
      </div>
    </div>
  </div>
  )
}

export default OrderSummary