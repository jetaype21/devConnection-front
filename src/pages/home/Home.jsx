import BodyHome from "../../components/container/BodyHome/BodyHome";
import Header from "../../components/container/header/Header";
import Featured from "../../components/smallComponents/featured/Featured";
import styles from "./styles.module.css";

function Home() {
  // const logout = () => {
  //   window.open(`http://localhost:8080/auth/logout`, "_self");
  // };

  return (
    <div className={styles.container}>
      <Header />
      <BodyHome>
        <Featured />
      </BodyHome>
    </div>
  );
}

// {
//   /* <button className={styles.btn} onClick={logout}>
//   Log Out
// </button> */
// }

export default Home;
