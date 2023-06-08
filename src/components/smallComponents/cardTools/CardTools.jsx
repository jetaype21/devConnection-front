import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./cardTools.module.css";
import { Link } from "react-router-dom";

const CardTools = ({ tools }) => {
  // const favoritos = [
  //   {
  //     tool_image:
  //       "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
  //     tool_name: "Canva 1",
  //     tool_description:
  //       "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
  //     tool_link: "https://www.canva.com/",
  //     tool_status: true,
  //   },
  //   {
  //     tool_image:
  //       "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
  //     tool_name: "Canva 1",
  //     tool_description:
  //       "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
  //     tool_link: "https://www.canva.com/",
  //     tool_status: true,
  //   },
  // ];

  // const nombresFavoritos = favoritos
  //   .filter((favorito) =>
  //     tools.some((tool) =>
  //       JSON.stringify(tool).includes(JSON.stringify(favorito))
  //     )
  //   )
  //   .map((favorito) => favorito.tool_name)
  //   .join(", ");

  // const favoriteSet = (name) => {
  //   if (nombresFavoritos.includes(name)) {
  //     console.log("eliminando de favoritos");
  //   } else {
  //     console.log("agregando a favoritos");
  //   }
  // };

  return (
    <article className={styles.container}>
      {tools.map(
        (tool, index) =>
          tool.tool_status && (
            <article key={index} className={styles.card}>
              <section className={styles.card_header}>
                <img
                  src={tool.tool_image}
                  alt={tool.tool_name}
                  loading="lazy"
                />
                <h5>{tool.tool_name}</h5>
                {/* <img src="./images/favorite.svg" alt="icon favorite" /> */}
                {/* <MdFavorite
                  color={
                    nombresFavoritos.includes(tool.tool_name)
                      ? "#f0ce26"
                      : "green"
                  }
                  cursor={"pointer"}
                  onClick={() => favoriteSet(tool.tool_name)}
                /> */}
              </section>
              <section className={styles.bodyCard}>
                <p>{tool.tool_description}</p>
                <Link
                  to={`${tool.tool_link}`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  {" "}
                  Explorar <AiOutlineArrowRight />{" "}
                </Link>
              </section>
            </article>
          )
      )}
    </article>
  );
};
export default CardTools;
