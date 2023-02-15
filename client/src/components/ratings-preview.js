import React from "react";
import buttons from "../styles/buttons.module.scss"

import styles from '../styles/components/ratings-preview.module.scss'

import "../assets/css/fontawesome.css"
import "../assets/css/brands.css"
import "../assets/css/solid.css"

const RatingsPreview = () => {
  return (
    <div className={styles.ratings_component_wrapper}>
      <h2>Real People, Real Results. Have a look!</h2>
      <div className={styles.ratings_carousel}>

      </div>
      <div className={styles.button_container}>
        <a href="#" className={buttons.btn_flat}>&emsp;&emsp;Sign up for free&emsp;&emsp;</a>
      </div>
    </div>
  )
}

export default RatingsPreview
