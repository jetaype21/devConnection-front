import { footer } from "../../../assets/menu";
import FooterItem from "./FooterItem";
import styles from "./footerHome.module.css";

const FooterEnd = () => {
  const date = new Date();

  return (
    <article className={styles.footer_end}>
      <article>
        <span>
          {date.getFullYear()} - DevConnection &copy; All right reserved
        </span>
      </article>
      <article
        className={`${styles.container_sublink} ${styles.footer_redes} `}
        style={{ borderBottom: "none" }}
      >
        <h3>Redes sociales</h3>
        {footer?.redes.map((item, index) => (
          <FooterItem key={index} {...item} color="#f0ce26" />
        ))}
      </article>
    </article>
  );
};
export default FooterEnd;
