import { featureds } from "../../../assets/featured";
import FeaturedItem from "./FeaturedItem";
import styles from "./featured.module.css";

const Featured = () => {
  const randomInit = Math.floor(Math.random() * (featureds.length - 2));
  const featuredSelect = featureds.splice(randomInit, 2);

  const text = {
    tool_name: "Descubrir más herramientas",
    tool_description:
      "Vea todas las categorias que te tenemos prepado para ayudarte.",
  };

  return (
    <article className={styles.container}>
      {featuredSelect &&
        featuredSelect.map((item, index) => (
          <FeaturedItem key={index} item={item} />
        ))}
      <FeaturedItem item={text} />
    </article>
  );
};
export default Featured;
