import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./featured.module.css";
import { Link } from "react-router-dom";

const FeaturedItem = ({ item }) => {
  return (
    <section>
      <h3 className={styles.category_title}>{item.category_name}</h3>
      <p>{item.category_description}</p>
      <Link
        to={`${
          item.category_slug ? `tools?category=${item.category_slug}` : "/tools"
        }`}
      >
        {" "}
        Explorar <AiOutlineArrowRight />{" "}
      </Link>
    </section>
  );
};
export default FeaturedItem;
