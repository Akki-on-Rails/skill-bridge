import React from "react";

import styles from '../styles/components/intro-block.module.scss'
import buttons from "../styles/buttons.module.scss"

import "../assets/css/fontawesome.css"
import "../assets/css/brands.css"
import "../assets/css/solid.css"
import image from '../images/casual-life-3d-young-woman-imagining-things-while-reading-e-book.png'

const IntroBlock = () => {
  return (
    <div className={styles.block_wrapper}>
      <div className={styles.text_wrapper}>
        <h2>Find the apprenticeship that fits your skillset, not just your grades.</h2>
        <a href="#" className={buttons.btn_flat}>&emsp;Sign up for free&emsp;</a>
      </div>
      {/* Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a> */}
      {/* Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a> */}
      <img src={image}></img>
    </div>
  )
}

export default IntroBlock
