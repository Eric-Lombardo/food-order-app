import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return ReactDom.createPortal(
    <>
      <div className={classes.backdrop} onClick={props.onCartDisplay}></div>
      <div className={classes.modal}>{props.children}</div>
    </>,
    document.getElementById("overlays")
  );
};

export default Modal;
