import React from "react";
import styles from "./boton.module.css";
import { Link } from "react-router-dom";

const Boton = ({ to, text }) => {
  return (
    <Link to={to} className={styles.btn}>
      {text}
    </Link>
  );
};

export default Boton;
