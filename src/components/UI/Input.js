import React, { forwardRef } from "react";

import classes from "../UI/Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div classes={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
