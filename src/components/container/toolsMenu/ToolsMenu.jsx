import { NavLink } from "react-router-dom";
import styles from "./toolsMenu.module.css";

const ToolsMenu = () => {
  const toolsLinks = [
    {
      name: "Herramientas",
      link: "/tools",
    },
    {
      name: "favoritos",
      link: "/favoritos",
    },
  ];

  return (
    <nav className={styles.toolsMenu}>
      {toolsLinks.map((item, index) => (
        <NavLink
          to={item.link}
          key={index}
          className={`${({ isActive, isPending }) =>
            isPending
              ? styles.linkPending
              : isActive
              ? styles.linkActive
              : ""} ${styles.link}`}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};
export default ToolsMenu;
