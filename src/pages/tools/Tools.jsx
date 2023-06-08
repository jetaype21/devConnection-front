import { Outlet } from "react-router-dom";
import ToolsMenu from "../../components/container/toolsMenu/ToolsMenu";
import styles from "./tools.module.css";
import { useEffect } from "react";
import { sharingInformationService } from "../../services/shring-information.service";

const Tools = () => {
  useEffect(() => {
    sharingInformationService.setSubject(false);
  }, []);

  return (
    <section className={styles.container}>
      <ToolsMenu />
      <Outlet />
    </section>
  );
};
export default Tools;
