import { Link } from "react-router-dom";
import styles from "./footerHome.module.css";

const FooterItem = ({ item, link, color }) => {
  return (
    <Link
      to={link}
      className={styles.footer_item}
      style={{ color: `${color ? color : ""}` }}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      {item}
    </Link>
  );
};
export default FooterItem;
