import React from "react";

import styles from './header.module.scss';
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

    </header>
  )
}

export default Header
