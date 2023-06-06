import React from "react";
import styles from "./boton.module.css";
import { DataAuth } from "../../../context/authContext";

const BotonGoogle = () => {
  const { googleSignIn } = DataAuth();
  const iniciar = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      // console.log(error);
    }
  };

  // useEffect(() => {
  //   if (user != null) {
  //     navigate("/");
  //   }
  // }, [user]);

  return (
    <button className={styles.google_btn} onClick={iniciar}>
      <img src="./images/google.png" alt="google icon" />
      <span>Iniciar sesion con Google</span>
    </button>
  );
};

export default BotonGoogle;
