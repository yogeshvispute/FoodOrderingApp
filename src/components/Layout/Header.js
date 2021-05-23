import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "../Layout/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShow={props.onShow} onHide={props.onHide} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Cuisine restaurant" />
      </div>
    </Fragment>
  );
};

export default Header;
