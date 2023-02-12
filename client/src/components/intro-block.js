import React from "react";

import styles from '../styles/components/intro-block.module.scss'
import buttons from "../styles/buttons.module.scss"

import "../assets/css/fontawesome.css"
import "../assets/css/brands.css"
import "../assets/css/solid.css"

const IntroBlock = () => {
  return (
    <div className={styles.block_wrapper}>
      <h2>Find the apprenticeship that fits your skillset, not just your grades.</h2>
      <a href="#" className={buttons.btn_flat}>&emsp;Sign up for free&emsp;</a>
    </div>
  )
}

export default IntroBlock
