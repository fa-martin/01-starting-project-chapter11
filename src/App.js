import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Item/Meals";
import Cart from "./components/ItemContainer/Cart";

function App() {
  const [showCart, setShowCart]= useState(false);

  const showCartHandler =()=>{
    setShowCart(!showCart);
  }

  return (
    <React.Fragment>
      {showCart && <Cart onShowCart={showCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
