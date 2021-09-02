import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../UI/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css";
import CartContext from "../../contexts/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [IsStateChanged, setStateChanged] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setStateChanged(true);

    const timer = setTimeout(() => {
      setStateChanged(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `${classes.button} ${IsStateChanged ? classes.bump : ""}`;

  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart !</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
