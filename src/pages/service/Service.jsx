import { useEffect } from "react";
import { sharingInformationService } from "../../services/shring-information.service";
import Boton from "../../components/smallComponents/boton/Boton";
import styles from "./serivce.module.css";

const Service = () => {
  useEffect(() => {
    sharingInformationService.setSubject(false);
  }, []);

  return (
    <div className={styles.container}>
      <p>Pagina en construcción</p>
      <Boton to={"/tools"} text={"Explorar herramientas"} />
    </div>
  );
};
export default Service;
