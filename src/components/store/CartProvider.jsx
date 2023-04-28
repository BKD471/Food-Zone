import CartContext from "./cart-context";

const CartProvider = ({ children }) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHanlder = (id) => {};

  const storeContext = {
    items: [],
    totAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHanlder,
  };
  return (
    <CartContext.Provider value={storeContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
