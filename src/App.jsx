import { useState } from "react";
import Header from "./components/Layout/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHanlder = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onCloseCart={closeCartHanlder} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
