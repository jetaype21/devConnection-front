import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./featured.module.css";
import { Link } from "react-router-dom";

const FeaturedItem = ({ item }) => {
  return (
    <section>
      <h3 className={styles.category_title}>{item.tool_name}</h3>
      <p>{item.tool_description}</p>
      <Link href="#">
        {" "}
        Explorar <AiOutlineArrowRight />{" "}
      </Link>
    </section>
  );
};
export default FeaturedItem;
