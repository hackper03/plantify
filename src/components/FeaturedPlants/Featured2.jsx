import React from "react";
import FeaturedProvider from "./FeaturedContent";
import Featured from "./Featured";
import CartProvider from "../context/CartContext";
import { ProductProvider } from "../context/ProductContent";

const Featured2 = () => {
  return (
    <>
      <CartProvider>
        {/* <ProductProvider> */}
          <FeaturedProvider>
            <Featured />
          </FeaturedProvider>
        {/* </ProductProvider> */}
      </CartProvider>
    </>
  );
};

export default Featured2;
