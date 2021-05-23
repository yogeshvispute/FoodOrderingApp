import React, { useContext } from "react";

import classes from "../Cart/Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "../Cart/CartItem";
import CartContext from "../../contexts/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartaddItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((cartitem) => {
        return (
          <CartItem
            key={cartitem.id}
            name={cartitem.name}
            amount={cartitem.amount}
            price={cartitem.price}
            onRemove={cartItemRemoveHandler.bind(null, cartitem.id)}
            onAdd={cartaddItemHandler.bind(null, cartitem)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
