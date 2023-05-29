import { useEffect } from "react";
import BodyHome from "../../components/container/BodyHome/BodyHome";
import Header from "../../components/container/header/Header";
import styles from "./styles.module.css";
import { sharingInformationService } from "../../services/shring-information.service";

function Home() {
  // const logout = () => {
  //   window.open(`http://localhost:8080/auth/logout`, "_self");
  // };

  useEffect(() => {
    console.log("enviando desde hombe");
    sharingInformationService.setSubject(false);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <BodyHome />
    </div>
  );
}

// {
//   /* <button className={styles.btn} onClick={logout}>
//   Log Out
// </button> */
// }

export default Home;
