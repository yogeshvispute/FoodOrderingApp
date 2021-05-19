import React from "react";
import CartIcon from "../UI/CartIcon";
import classes from "../Layout/Header.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart is Here</span>
      <span className={classes.badge}>
          3
      </span>
    </button>
  );
};

export default HeaderCartButton;
