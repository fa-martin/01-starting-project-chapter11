import React from "react";

import CartIcon from "../ItemContainer/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css";
import { useContext,useEffect, useState  } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [animated, setAnimated] = useState(false);
  const cartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const {items}= cartCtx;
  const btnClasess= `${classes.button} ${animated ? classes.bump: ''}`;
  useEffect(()=> {
    if (items.length === 0){
      return;
    }
     setAnimated(true);
    const timer =setTimeout(()=>{
      setAnimated(false);
    }, 300)
    return ()=>{
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasess} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
