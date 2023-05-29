import styles from "./body.module.css";
import Featured from "../../smallComponents/featured/Featured";
import { useEffect, useState } from "react";
import featureds from "../../../assets/featured";

const BodyHome = () => {
  const [selects, setSelects] = useState([]);
  const limit = Math.floor(Math.random() * 7);
  let select = selects.splice(limit, 2);
  // console.log(select);

  useEffect(() => {
    setSelects(featureds);
  }, []);

  return (
    <main className={styles.container}>
      <section className={styles.container__content}>
        <article className={styles.container_textContent}>
          <h2 className={styles.title__seccion}>
            Ahorra tiempo a la hora de buscar recursos
          </h2>
          {console.log(select)}
          <p className={styles.container__p}>
            No pierdas más tiempo buscando herramientas por tu cuenta, En{" "}
            <span className={styles.devTitle}>Dev Connection</span> hemos hecho
            el trabajo por ti, para que puedas enfocarte en lo que realmente
            importa,{" "}
            <span className={styles.textResalt}>
              Desarrollar proyectos increíbles
            </span>{" "}
            de manera rápida y efectiva.
            <br />
            <br />
            <cite style={{ fontStyle: "italic" }}>
              Explora nuestras opciones y lleva tus habilidades de desarrollo al
              siguiente nivel. ¡Bienvenido!
            </cite>
          </p>
        </article>
        <article className={styles.container_featured}>
          <Featured items={select} />
        </article>
      </section>
    </main>
  );
};

export default BodyHome;
