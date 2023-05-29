import React from "react";
import styles from "./boton.module.css";

const Boton = ({ text }) => {
  return <button className={styles.btn}>{text}</button>;
};

export default Boton;
