import React, { useContext } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { ImHeart } from "react-icons/im";
import { MdUnfoldMoreDouble } from "react-icons/md";
import { RiPlantFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CartProvider, { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartQuantity} = useContext(CartContext);
  return (
    <>
      <div id="root">
        <nav
          id="header"
          className="bg-white shadow-md py-4 px-4 md:px-6 flex items-center justify-between relative z-50"
        >
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-green-700 flex items-center"
            >
              <RiPlantFill className="h-8 w-8 mr-2" />
              PlantOasis
            </Link>
          </div>

          {/* <!-- Mobile Navigation Toggle --> */}
          <button
            aria-label="Toggle navigation menu"
            id="mobile-menu-button"
            className="md:hidden text-green-700 focus:outline-none"
          >
            <MdUnfoldMoreDouble className="h-6 w-6" />
          </button>

          {/* <!-- Desktop Navigation --> */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/featured-products"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/plant-care-tips"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
              >
                Plant Care
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
              >
                Contact
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="#"
                aria-label="Search"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 mr-4"
              >
                <FaSearch className="h-5 w-5" />
              </Link>
              <Link
                to="/cart"
                aria-label="Cart"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 relative"
              >
                <FaShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                 <CartProvider >
                  {cartQuantity}
                  </CartProvider>
                </span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="login"
                aria-label="Login"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 mr-4"
              >
                <FaUserLarge className="h-5 w-5" />
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="wishlist"
                aria-label="Wishlist"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 mr-4"
              >
                <ImHeart className="h-7 w-7 text-green-600" />
                <span className="absolute bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                <CartProvider >
                  {cartQuantity}
                  </CartProvider>
                </span>
              </Link>
            </li>
          </ul>

          {/* <!-- Mobile Navigation Menu --> */}
          <div
            id="mobile-menu"
            className="hidden absolute top-full left-0 right-0 bg-white shadow-md mt-1 p-4 md:hidden"
          >
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="block text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/featured-products"
                  className="block text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/plant-care-tips"
                  className="block text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
                >
                  Plant Care
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
                >
                  Contact
                </Link>
              </li>
              <li className="flex items-center space-x-4 pt-2 border-t border-gray-200 mt-2">
                <Link
                  to="/"
                  aria-label="Search"
                  className="text-gray-700 hover:text-green-600 transition-colors duration-300"
                >
                  <FaSearch className="h-5 w-5" />
                </Link>
                <Link
                  to="/cart"
                  aria-label="Cart"
                  className="text-gray-700 hover:text-green-600 transition-colors duration-300 relative"
                >
                  <FaShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  <CartProvider >
                  {cartQuantity}
                  </CartProvider>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
