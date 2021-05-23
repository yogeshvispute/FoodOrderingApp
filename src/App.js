import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import React, { useState } from "react";
import CartProvider from "./contexts/CartProvider";

function App() {
  const [IsCartShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {IsCartShown && <Cart onClose={hideCartHandler} />}
      <Header onShow={showCartHandler} onHide={hideCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
