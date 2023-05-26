import React from "react";
import styles from "./boton.module.css";

const BotonGoogle = () => {
  return (
    <button className={styles.google_btn}>
      <img src="./images/google.png" alt="google icon" />
      <span>Sing up with Google</span>
    </button>
  );
};

export default BotonGoogle;
