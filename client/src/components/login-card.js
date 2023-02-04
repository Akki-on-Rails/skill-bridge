import React from "react";
import { Link } from "react-router-dom";

import styles from '../styles/components/login-card.module.scss';
import button from '../styles/buttons.module.scss';


const LoginCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.login}>
        {/* <div class="avatar">
          <img src="avatar.png" />
        </div> */}
        <h2>Login</h2>
        <h3>Welcome back Kelly</h3>

        <form className={styles.login_form}>
          <div className={styles.textbox}>
            <input type="email" placeholder="Username" />
            {/* <span className="material-symbols-outlined"> account_circle </span> */}
          </div>
          <div className={styles.textbox}>
            <input type="password" placeholder="Password" />
            {/* <span className="material-symbols-outlined"> lock </span> */}
          </div>
          <button className={button.btn_flat}type="submit">LOGIN</button>
          <a href="https://website.com">Forgot your password?</a>
        </form>
      </div>
    </div>
  )
}


export default LoginCard
