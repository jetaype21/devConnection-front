import React from "react";
import styles from "./menu.module.css";
import Boton from "../../smallComponents/boton/Boton";
import BotonGoogle from "../../smallComponents/boton/BotonGoogle";
import NewLink from "../../smallComponents/newLink/NewLink";
import { rutas } from "../../../assets/menu";

const MenuList = ({ isMobile }) => {
  return (
    <section
      className={`${styles.body__container} ${
        isMobile ? styles.body__container_mobil : styles.body__container_pc
      }`}
    >
      <section
        className={`${styles.link__container}  ${
          isMobile ? styles.link__container_mobil : styles.link__container_pc
        }`}
      >
        {rutas.map((item, index) => (
          <NewLink key={index} {...item} />
        ))}
      </section>

      <Boton />
    </section>
  );
};

export default MenuList;
