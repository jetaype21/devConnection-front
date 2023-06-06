import { Route, Routes } from "react-router-dom";
import ToolsMenu from "../../components/container/toolsMenu/ToolsMenu";
import styles from "./tools.module.css";
import { useEffect } from "react";
import { sharingInformationService } from "../../services/shring-information.service";
import ToolsBody from "../../components/container/toolsBody/ToolsBody";

const Tools = () => {
  useEffect(() => {
    sharingInformationService.setSubject(false);
  }, []);

  return (
    <section className={styles.container}>
      <ToolsMenu />
      <ToolsBody />
    </section>
  );
};
export default Tools;
