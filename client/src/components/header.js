import React from "react";

import styles from './header.module.scss';
import avatars from '../styles/avatars.module.scss';
import buttons from '../styles/buttons.module.scss';

import "../assets/css/fontawesome.css"
import "../assets/css/brands.css"
import "../assets/css/solid.css"

const Header = () => {
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.logo}>
        {/* Here we need a Logo and/or Slogan */}
        <h1>SkillBridge</h1>
      </div>
      <div className={styles.menu}>
        <a href="#">student profile</a>
        <a href="#">looking for jobs</a>
        <a href="#">potential jobs</a>
        <a href="#">resources</a>
        <a href="#">contact</a>
      </div>
      <div className={styles.login}>
        {/* here we need to insert user images dynamicly from DB */}
        {/* also we have to create a conditional: */}
        {/* if logged in show avatar and 'log out' */}
        {/* else show 'log in' and 'sign up' */}
        <div className={styles.user_comp}>
          <a className={buttons.btn_flat}>Log out</a>
          <img className={avatars.avatar_small} src='https://picsum.photos/id/64/200/300' alt='user avatar'></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
