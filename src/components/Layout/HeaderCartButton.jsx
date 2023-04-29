import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";

const HeaderCartButton = ({ onShowCart }) => {
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const nofOfItemsInCart = items.reduce((currItem, item) => {
    return currItem + item.amount;
  }, 0);

  const btnClasses = `${classes.button}  ${
    isButtonHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) return;
    setIsButtonHighlighted(true);

    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{nofOfItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
