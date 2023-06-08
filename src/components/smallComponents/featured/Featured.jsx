import FeaturedItem from "./FeaturedItem";
import styles from "./featured.module.css";

const Featured = ({ items }) => {
  const text = {
    category_name: "Descubrir más herramientas",
    category_description:
      "Vea todas las categorias que te tenemos prepado para ayudarte.",
    category_slug: "",
  };

  const defaultFeatureds = [
    {
      category_name: "inspiración de diseño",
      category_description:
        "proceso creativo para encontrar ideas y conceptos para proyectos de diseño",
      category_slug: "inspiracion-de-diseno",
    },
    {
      category_name: "diseño online",
      category_description:
        "creación de contenido visual a través de herramientas digitales para su uso en internet.",
      category_slug: "category=diseno-online",
    },
  ];

  return (
    <article className={styles.container}>
      {items.length > 1
        ? items.map((item, index) => <FeaturedItem key={index} item={item} />)
        : defaultFeatureds.map((item, index) => (
            <FeaturedItem key={index} item={item} />
          ))}
      <FeaturedItem item={text} />
    </article>
  );
};
export default Featured;
