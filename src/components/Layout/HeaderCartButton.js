import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isBtnBump, setIsBtnBump] = useState(false);

  useEffect(() => {
    if (cartCtx.amount <= 0) return;
    setIsBtnBump(true);
    const timer = setTimeout(() => setIsBtnBump(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.amount]);

  const numOfCartItems = cartCtx.items.reduce((counter, item) => {
    return counter + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${isBtnBump ? classes.bump : ""}`;

  return (
    <button className={btnClasses} onClick={props.onCartDisplay}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
