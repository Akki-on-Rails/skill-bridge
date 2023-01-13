import React from "react";
import { Link } from "react-router-dom";

import './login-card.module.css';

const LoginCard = () => {
  return (
    <div className='card'>
      <div className="login">
        {/* <div class="avatar">
          <img src="avatar.png" />
        </div> */}
        <h2>Login</h2>
        <h3>Welcome back Kelly</h3>

        <form className="login-form">
          <div className="textbox">
            <input type="email" placeholder="Username" />
            {/* <span className="material-symbols-outlined"> account_circle </span> */}
          </div>
          <div className="textbox">
            <input type="password" placeholder="Password" />
            {/* <span className="material-symbols-outlined"> lock </span> */}
          </div>
          <button type="submit">LOGIN</button>
          <a href="https://website.com">Forgot your password?</a>
        </form>
      </div>
    </div>
  )
}


export default LoginCard
