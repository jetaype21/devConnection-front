import Header from "../../components/container/header/Header";
import Navbar from "../../components/container/navbar/Navbar";
import styles from "./styles.module.css";

function Home() {
  // const logout = () => {
  //   window.open(`http://localhost:8080/auth/logout`, "_self");
  // };

  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
    </div>
  );
}

// {
//   /* <button className={styles.btn} onClick={logout}>
//   Log Out
// </button> */
// }

export default Home;
