import React from "react";

import mealImage from "../../assests/meals.jpg";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="A teble of full delicious food! " />
      </div>
    </React.Fragment>
  );
};

export default Header;
