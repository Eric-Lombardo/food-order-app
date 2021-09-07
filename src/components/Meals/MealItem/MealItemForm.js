import React, { useContext, useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    cartCtx.addItem({ ...props, amount: +inputRef.current.value });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label='Amount'
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
