import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

// Import icons
import { BiMenu } from "react-icons/bi";
import useScreenSize from "../../../hooks/useScreenSize";
import Menu from "../menu/Menu";
import MenuList from "../menu/MenuList";
import { DataAuth } from "../../../context/authContext";
import LogoutGoogle from "../../smallComponents/boton/LogoutGoogle";

const Navbar = () => {
  const { user } = DataAuth();
  const [dimensions] = useScreenSize();
  const [isMobile, setIsMobile] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = (value) => {
    setShowMenu(value);
  };

  useEffect(() => {
    if (dimensions.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setShowMenu(false);
    }
  }, [dimensions.width]);

  return (
    <nav className={styles.container}>
      {!user?.user_name ? (
        <Link to={"/"}>
          <img
            src="./images/logoDevConnect.png"
            alt="logo DevConnection"
            className={styles.logo_img}
          />
        </Link>
      ) : (
        <article className={styles.container_user}>
          <Link to={"/"}>
            <h3 className={styles.text_user}>{user.user_name}</h3>
          </Link>
          <LogoutGoogle />
        </article>
      )}

      {isMobile && (
        <BiMenu className={styles.icon} onClick={() => toogleMenu(true)} />
      )}
      {showMenu && (
        <Menu toogleMenu={toogleMenu} showMenu={showMenu} isMobile={isMobile} />
      )}

      {!isMobile && <MenuList isMobile={isMobile} />}
    </nav>
  );
};

export default Navbar;
