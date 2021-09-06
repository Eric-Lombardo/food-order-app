import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const cartHandler = () => {
    setIsVisible((previousValue) => !previousValue);
  };

  return (
    <CartProvider>
      {isVisible && <Cart onCartDisplay={cartHandler} />}
      <Header onCartDisplay={cartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
