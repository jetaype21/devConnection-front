import { useEffect } from "react";
import { sharingInformationService } from "../../services/shring-information.service";
import styles from "./notFound.module.css";
import { Link } from "react-router-dom";
import Burbujas from "../../components/smallComponents/burbujas/Burbujas";

const NotFound = () => {
  useEffect(() => {
    console.log("enviando desde not");
    sharingInformationService.setSubject(true);
  }, []);

  return (
    <article className={styles.container}>
      <img src="./images/notFoundImage.svg" alt="Dev connection not found" />
      <Link to={"/"}>Ir al inicio</Link>
      <Burbujas />
    </article>
  );
};
export default NotFound;
