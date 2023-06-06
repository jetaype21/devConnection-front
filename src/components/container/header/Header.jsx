import React from "react";
import styles from "./header.module.css";
import Burbujas from "../../smallComponents/burbujas/Burbujas";
import BotonGoogle from "../../smallComponents/boton/BotonGoogle";
import Boton from "../../smallComponents/boton/Boton";
import { DataAuth } from "../../../context/authContext";

const Header = () => {
  const { user } = DataAuth();
  // const [userInit, setUserInit] = useState(null);

  // useEffect(() => {
  //   setUserInit(user);
  // }, []);

  return (
    <header className={styles.container}>
      <h1>
        Programación en un solo lugar <br />
        <p className={styles.text_intro}>
          <br />
          Navega por nuestras recomendaciones y encuentra soluciones que se
          adapten a tus necesidades, tenemos todo cubierto. <br />
          <br />
          <i> ¡Bienvenido! </i>
        </p>
        <code className={styles.name__company} style={{ marginBottom: "8px" }}>
          DevConnection
        </code>
        {console.log("user", user)}
        {!user?.user_name ? (
          <BotonGoogle />
        ) : (
          <Boton to={"/tools"} text={"Explorar herramientas"} />
        )}
      </h1>

      <img src="./images/bg-header.svg" alt="" className={styles.img__header} />
      <Burbujas />
    </header>
  );
};

export default Header;
