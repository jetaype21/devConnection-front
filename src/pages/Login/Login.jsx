import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import React from "react";

function Login() {
  const googleAuth = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Inicia sesion</h1>
      <form className={styles.form_container}>
        <div className={styles.left}>
          <img
            src="./images/login.jpg"
            alt="login devConnect"
            className={styles.img}
          />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Selec aqu</h2>
          <input type="email" className={styles.input} placeholder="Email" />
          <input
            type="password"
            className={styles.input}
            placeholder="Password"
          />
          <button className={styles.google_btn} onClick={googleAuth}>
            <img src="./images/google.png" alt="google icon" />
            <span>conectar con google</span>
          </button>
          <p className={styles.text}>
            eres nuevo ? <Link to="/signup">Registrearse</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
