import React from "react";

import styles from "./header.module.scss";
import "../assets/css/fontawesome.css";
import "../assets/css/brands.css";
import "../assets/css/solid.css";

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
      <div className={styles.login}></div>
    </header>
  );
};

export default Header;
