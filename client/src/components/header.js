import React from "react";

import styles from './header.module.scss';
import avatars from '../styles/avatars.module.scss';
import buttons from '../styles/buttons.module.scss';
import BurgerButton from './atoms/burgerButton'

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
      {/* for the menu I recommend a conditional based on screen size: */}
      {/* if > 100px show horizontal menu */}
      {/* else show burger menu */}
      <div className={styles.menu}>
        <BurgerButton />
        <ul>
          <li><a href="#">student profile</a></li>
          <li><a href="#">looking for jobs</a></li>
          <li><a href="#">potential jobs</a></li>
          <li><a href="#">resources</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </div>
      <div className={styles.login}>
        {/* here we need a switch/toggle */}
        <div className={styles.user_switch}>
          <a href='#'>Student</a>  |  <a href='#'>Company</a>
        </div>
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
  )
}

export default Header
