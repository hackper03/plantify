import React from 'react'

const PromoCode = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
    <h3 className="text-base font-semibold text-gray-800 mb-4">
      Apply Promo Code
    </h3>
    <div className="flex">
      <input
        type="text"
        placeholder="Enter code"
        className="flex-1 border border-gray-300 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors duration-200">
        Apply
      </button>
    </div>
  </div>
  )
}

export default PromoCode