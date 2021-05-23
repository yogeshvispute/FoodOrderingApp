import React, { useContext } from "react";
import CartContext from "../../contexts/cart-context";
import classes from "../Meals/MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const ctx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    const meal = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    };
    ctx.addItem(meal);
  };

  return (
    <li>
      <div className={classes.meal}>
        <div className={classes.description}>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.price}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
