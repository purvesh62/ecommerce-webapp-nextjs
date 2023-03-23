import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Increase product quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Decrease product quantity
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity - 1 < 1) return 1;
      return prevQuantity - 1;
    });
  };

  // Add product to card
  const onAdd = (product, quantity) => {
    // Check if product already exists
    const exists = cartItems.find((item) => item.slug === product.slug);
    if (exists) {
      // update the quantity
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exists, quantity: exists.quantity + quantity }
            : item
        )
      );
    } else {
      // Update the cartItems
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  return (
    //   Pass quantity as the globalstate
    <ShopContext.Provider
      value={{
        quantity,
        increaseQuantity,
        decreaseQuantity,
        cartItems,
        showCart,
        setShowCart,
        onAdd,
      }}>
      {children}
    </ShopContext.Provider>
  );
};

const useStateContext = () => {
  return useContext(ShopContext);
};

export default useStateContext;
