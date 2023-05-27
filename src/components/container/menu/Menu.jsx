import React, { useRef } from "react";
import styles from "./menu.module.css";
import { IoCloseSharp } from "react-icons/io5";
import MenuList from "./MenuList";

const Menu = ({ toogleMenu, showMenu, isMobile }) => {
  const containerMenu = useRef();

  const closeMenu = () => {
    containerMenu.current.classList.add(styles.no__show__container);
    setTimeout(() => {
      console.log("cerrando");
      toogleMenu(false);
    }, 900);
  };

  return (
    <article
      ref={containerMenu}
      className={`
      ${styles.container}  
      ${showMenu ? styles.show__container : styles.no__show__container}`}
    >
      <section className={styles.top__container}>
        <img
          src="./images/logoDevConnect.png"
          alt="logo DevConnection"
          className={styles.logo_img}
        />
        <IoCloseSharp className={styles.icon} onClick={closeMenu} />
      </section>

      <MenuList isMobile={isMobile} />
    </article>
  );
};

export default Menu;
