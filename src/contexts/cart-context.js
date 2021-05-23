import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  IsCartShown: false,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
