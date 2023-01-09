import React from "react";
import { Link } from "react-router-dom";

import * as loginCardStyles from './login-card.module.scss';

const LoginCard = () => {
  return (
    <div className={loginCardStyles.card}>
      {/* here we should insert the Logo: */}
      <div class={loginCardStyles.logo}>
        {/* <img src="avatar.png" /> */}
      </div>
      <h2>Login</h2>
      <h3>Welcome! Please enter your login data.</h3>
      {/* I guess we need to edit the form and make it 'REACTish' */}
      <form className={loginCardStyles.form}>
        <div className={loginCardStyles.textbox}>
          <input type="email" placeholder="Username" />
          {/* <span class={loginCardStyles.material-symbols-outlined}> account_circle </span> */}
        </div>
        <div className={loginCardStyles.textbox}>
          <input type="password" placeholder="Password" />
          {/* <span className={loginCardStyles.material-symbols-outlined}> lock </span> */}
        </div>
        <button type="submit">LOGIN</button>
        {/* Here we need a valid link for resetting the password: */}
        <Link to='/'>Forgot your password?</Link>
      </form>
    </div>
  )
}


export default LoginCard
