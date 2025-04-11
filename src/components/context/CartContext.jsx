import React, { createContext, useMemo, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartQuantity, setcartQuantity] = useState(0)
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.plant_id === item.plant_id
    );
    const itemQuantity = Number(item.quantity) || 1; // Ensure quantity is a valid number

    if (existingItemIndex !== -1) {
      // If the item already exists, update its quantity
      const updatedCart = cartItems.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + itemQuantity }
          : cartItem
      );
      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    } else {
      // If the item does not exist, add it to the cart
      const updatedCart = [...cartItems, { ...item, quantity: itemQuantity }];
      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter(
      (cartItem) => cartItem.plant_id !== item.plant_id
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  React.useEffect(() => {
    const totalQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setcartQuantity(totalQuantity);
  }, [cartItems]);

  const getTotalPrice = React.useCallback(() => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const formattedPrice = parseFloat(totalPrice.toFixed(2)); // Format to 2 decimal places
    return formattedPrice;
  }, [cartItems]);

  // Load cart items from localStorage when the component mounts
  React.useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

const incrementItemQuantity = (plant_id) => {
console.log("Incrementing item quantity for plant_id:", plant_id);
const updatedCart = cartItems.map((cartItem) =>
    cartItem.plant_id === plant_id
    ? { ...cartItem, quantity: cartItem.quantity + 1 }
    : cartItem
);
setCartItems(updatedCart);
localStorage.setItem("cartItems", JSON.stringify(updatedCart));
};

const decrementItemQuantity = (plant_id) => {
    console.log("Decrementing item quantity for plant_id:", plant_id);
    const updatedCart = cartItems
        .map((cartItem) =>
            cartItem.plant_id === plant_id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0); // Remove items with quantity <= 0
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
};

const [saveForLaterItems, setSaveForLaterItems] = useState(() => {
    const storedSaveForLater = localStorage.getItem("saveForLater");
    return storedSaveForLater ? JSON.parse(storedSaveForLater) : [];
});

const saveForLater = (item) => {
    const updatedCart = cartItems.filter(
        (cartItem) => cartItem.plant_id !== item.plant_id
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    const updatedSaveForLater = [...saveForLaterItems, item];
    setSaveForLaterItems(updatedSaveForLater);
    localStorage.setItem("saveForLater", JSON.stringify(updatedSaveForLater));
};

const getTotalSaveForLaterItems = React.useCallback(() => {
    const totalSaveForLaterItems = saveForLaterItems.reduce(
        (total, item) => total + item.quantity,
        0
    );
    return totalSaveForLaterItems;
}, [saveForLaterItems]);

const moveToCart = (item) => {
    const updatedSaveForLater = saveForLaterItems.filter(
        (saveItem) => saveItem.plant_id !== item.plant_id
    );
    setSaveForLaterItems(updatedSaveForLater);
    localStorage.setItem("saveForLater", JSON.stringify(updatedSaveForLater));

    const existingItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.plant_id === item.plant_id
    );

    if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity
        const updatedCart = cartItems.map((cartItem, index) =>
            index === existingItemIndex
                ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                : cartItem
        );
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    } else {
        // If the item does not exist in the cart, add it
        const updatedCart = [...cartItems, item];
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }
};
  return (
    <CartContext.Provider
      value = {{
        cartItems,
        setCartItems,
        addToCart,
        clearCart,
        cartQuantity,
        getTotalPrice,
        removeFromCart,
        incrementItemQuantity,
        decrementItemQuantity,
        saveForLaterItems,
        setSaveForLaterItems, 
        saveForLater,
        getTotalSaveForLaterItems,
        moveToCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
