import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Item/Meals";
import Cart from "./components/ItemContainer/Cart";
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setShowCart]= useState(false);



  const showCartHandler =()=>{
    setShowCart(!showCart);
  }

  return (
    <CartProvider>
      {showCart && <Cart onShowCart={showCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
