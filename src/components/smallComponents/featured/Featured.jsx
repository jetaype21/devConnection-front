import FeaturedItem from "./FeaturedItem";
import styles from "./featured.module.css";

const Featured = ({ items }) => {
  const text = {
    tool_name: "Descubrir más herramientas",
    tool_description:
      "Vea todas las categorias que te tenemos prepado para ayudarte.",
  };

  const defaultFeatureds = [
    {
      tool_name: "inspiración de diseño",
      tool_description:
        "proceso creativo para encontrar ideas y conceptos para proyectos de diseño",
    },
    {
      tool_name: "diseño online",
      tool_description:
        "creación de contenido visual a través de herramientas digitales para su uso en internet.",
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
