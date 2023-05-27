import { Link } from "react-router-dom";
import styles from "./footerHome.module.css";
import { footer } from "../../../assets/menu";
import FooterItem from "./FooterItem";
import FooterEnd from "./FooterEnd";
import Burbujas from "../../smallComponents/burbujas/Burbujas";

const FooterHome = () => {
  return (
    <footer className={styles.container}>
      <section className={styles.footer_links}>
        <Link to="/" className={styles.link_logo}>
          <img
            src="./images/logoDevConnect.png"
            alt="Logo dev Connection"
            className={styles.img}
          />
        </Link>
        <article className={styles.container_sublink}>
          <h3>Acerca de nosotros</h3>
          {footer.about.map((item, index) => (
            <FooterItem key={index} {...item} />
          ))}
        </article>
        <article className={styles.container_sublink}>
          <h3>Trabajos</h3>
          {footer.works.map((item, index) => (
            <FooterItem key={index} {...item} />
          ))}
        </article>
        <article className={styles.container_sublink}>
          <h3>Blogs</h3>
          {footer.blogs.map((item, index) => (
            <FooterItem key={index} {...item} />
          ))}
        </article>
      </section>
      <FooterEnd />
      <Burbujas />
    </footer>
  );
};
export default FooterHome;
