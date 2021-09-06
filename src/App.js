import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const cartHandler = () => {
    setIsVisible((previousValue) => !previousValue);
  };

  return (
    <>
      {isVisible && <Cart onCartDisplay={cartHandler} />}
      <Header onCartDisplay={cartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
