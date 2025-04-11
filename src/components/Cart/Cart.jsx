
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { MdDelete } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import OrderSummary from "./OrderSummary";
import PromoCode from "./PromoCode";
import SavedItem from "./SavedItem";

const Cart = () => {

  const { cartItems, clearCart , cartQuantity, getTotalPrice, saveForLaterItems, getTotalSaveForLaterItems} = useContext(CartContext);

  return (
    
    <div id="cart" className="page-section  min-h-screen bg-white p-6">
    <div className="max-w-7xl mx-auto">
      {/* <!-- Cart Header --> */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Your Cart</h2>
        <p className="text-gray-600 mt-1">
          Review and manage your purchased items
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* <!-- Cart Items Section --> */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Cart Items ({cartQuantity})
              </h3>
              <div className="flex items-center text-sm">
                <button className="text-green-600 hover:text-green-700 flex items-center mr-4">
                <LuRefreshCcw  className="h-4 w-4 mr-1"/>
                  Refresh
                </button>
                <button className="text-red-600 hover:text-red-700 flex items-center" onClick={() => clearCart()}>
                  <MdDelete   className="h-4 w-4 mr-1" />
                  Clear Cart
                </button>
              </div>
            </div>

            {/* <!-- Cart Items List --> */}
            <div className="space-y-6">
              {/* <!-- Cart Item 1 --> */}
             {cartItems.map((details, item) => (
                <CartItem key={item} {...details} />
             ) )}

            </div>
          </div>

          {/* <!-- Saved For Later Section --> */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Saved For Later ({getTotalSaveForLaterItems()})
              </h3>
            </div>

            <div className="space-y-6">
              {/* <!-- Saved Item 1 --> */}
              {saveForLaterItems.map((details, item) => (
                <SavedItem key={item} {...details} />
             ) )}
            </div>
          </div>
        </div>

        {/* <!-- Order Summary Section --> */}
        <div className="lg:col-span-1 space-y-6">
             <OrderSummary />

          {/* <!-- Promo Code --> */}
          <PromoCode />

          {/* <!-- Shipping Estimate --> */}
          {/* <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-base font-semibold text-gray-800 mb-4">
              Shipping Estimate
            </h3>
            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="postal_code"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Postal Code
              </label>
              <input
                type="text"
                id="postal_code"
                name="postal_code"
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter postal code"
              />
            </div>
            <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200">
              Calculate Shipping
            </button>
          </div> */}
        </div>
      </div>
    </div>
  </div>
 
  );
};

export default Cart;
