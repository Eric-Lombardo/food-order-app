import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const dummyData = [{ id: "c21", name: "Sushi", amount: 1, price: 21.42 }];
  const cartItems = dummyData.map((item) => <li key={item.id}>{item.name}</li>);

  return (
    <Modal onCartDisplay={props.onCartDisplay}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>21.42</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onCartDisplay}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
