import React from "react";
import styles from "./boton.module.css";
import { Link } from "react-router-dom";

const Boton = ({ to, text, other }) => {
  return (
    <Link
      to={to}
      className={styles.btn}
      target={other && "_blank"}
      referrerPolicy={other && "no-referrer"}
    >
      {text}
    </Link>
  );
};

export default Boton;
