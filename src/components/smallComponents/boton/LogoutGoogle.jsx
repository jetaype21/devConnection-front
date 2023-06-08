import { DataAuth } from "../../../context/authContext";
import styles from "./boton.module.css";

const LogoutGoogle = () => {
  const { googleLogOut } = DataAuth();

  const cerrar = async () => {
    try {
      localStorage.clear();
      await googleLogOut();
    } catch (error) {}
  };

  return (
    <button onClick={cerrar} className={styles.btn_logout}>
      Cerrar session
    </button>
  );
};
export default LogoutGoogle;
