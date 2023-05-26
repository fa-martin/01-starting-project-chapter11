import React from "react";

import CartIcon from "../ItemContainer/CartIcon";
import classes from '../Layout/HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3.2</span>
    </button>
  );
};
export default HeaderCartButton;
