import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const HeaderCartButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);
  const nofOfItemsInCart = cartCtx.items.reduce((currItem, item) => {
    return currItem + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{nofOfItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
