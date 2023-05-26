import React from "react";
import styles from "./header.module.css";
import Burbujas from "../../smallComponents/burbujas/Burbujas";

const Header = () => {
  return (
    <header className={styles.container}>
      <h1>
        Programación en un solo lugar <br />
        <code className={styles.name__company}>DevConnection</code>
      </h1>

      <img src="./images/bg-header.svg" alt="" className={styles.img__header} />
      <Burbujas />
    </header>
  );
};

export default Header;
