import React from "react";

const addItemToCartHandler = (item) => {};
const removeItemFromCartHanlder = (id) => {};

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: addItemToCartHandler,
  removeItem: removeItemFromCartHanlder,
});

export default CartContext;
