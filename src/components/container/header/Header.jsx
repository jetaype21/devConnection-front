import React from "react";
import styles from "./header.module.css";
import Burbujas from "../../smallComponents/burbujas/Burbujas";

const Header = () => {
  return (
    <header className={styles.container}>
      <h1>
        Programación en un solo lugar <br />
        <p className={styles.text_intro}>
          <br />
          Navega por nuestras recomendaciones y encuentra soluciones que se
          adapten a tus necesidades, tenemos todo cubierto. <br />
          <br />
          <i> ¡Bienvenido! </i>
        </p>
        <code className={styles.name__company}>DevConnection</code>
      </h1>

      <img src="./images/bg-header.svg" alt="" className={styles.img__header} />
      <Burbujas />
    </header>
  );
};

export default Header;
