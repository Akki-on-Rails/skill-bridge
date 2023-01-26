import React from "react";
import { useState } from "react";

import styles from './navbar.module.scss';
import avatars from '../styles/avatars.module.scss';
import buttons from '../styles/buttons.module.scss';
import BurgerButton from './atoms/burgerButton'

import "../assets/css/fontawesome.css"
import "../assets/css/brands.css"
import "../assets/css/solid.css"

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className={styles.nav_wrapper}>
      <div className={styles.navigation}>
      <a href="/" className={styles.brand_name}>
        MacroSoft
      </a>
      <button className={styles.hamburger} onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={isNavExpanded ? styles.navigation_menu.expanded : styles.navigation_menu}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>


      <div className={styles.login}>
        {/* here we need a switch/toggle */}
        <div className={styles.user_switch}>
          <a href='#'>Student&emsp;</a> | <a href='#'>&emsp;Company</a>
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

    </nav>
  );
}

export default Navbar
