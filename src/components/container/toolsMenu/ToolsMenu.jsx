import { NavLink } from "react-router-dom";
import styles from "./toolsMenu.module.css";
import { DataAuth } from "../../../context/authContext";

const ToolsMenu = () => {
  const { user } = DataAuth();

  // const toolsLinks = [
  //   {
  //     name: "Herramientas",
  //     link: "/tools",
  //   },
  //   {
  //     name: "favoritos",
  //     link: "/favoritos",
  //   },
  // ];

  return (
    <nav className={styles.toolsMenu}>
      <NavLink
        to={"/tools"}
        className={`${({ isActive, isPending }) =>
          isPending ? styles.linkPending : isActive ? styles.linkActive : ""} ${
          styles.link
        }`}
      >
        {"Herramientas"}
      </NavLink>

      {user && (
        <NavLink
          to={"/tools/favoritos"}
          className={`${({ isActive, isPending }) =>
            isPending
              ? styles.linkPending
              : isActive
              ? styles.linkActive
              : ""} ${styles.link}`}
        >
          {"Favoritos"}
        </NavLink>
      )}
    </nav>
  );
};
export default ToolsMenu;
