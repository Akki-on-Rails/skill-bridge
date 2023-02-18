import React from "react";
import buttons from "../styles/buttons.module.scss";

import styles from '../styles/components/ratings-preview.module.scss';

import "../assets/css/fontawesome.css";
import "../assets/css/brands.css";
import "../assets/css/solid.css";
import { ratingsData } from "../data/ratingsData.js";

const RatingsPreview = () => {
  return (
    <div className={styles.ratings_component_wrapper}>
      <h2>Real People, Real Results. Have a look!</h2>
      <div className={styles.ratings_carousel}>
        {ratingsData.map((entry) => {
          let stars =[]

          for (let i = 0; i < entry.rating; i++) {
            stars.push(<i class="fa-solid fa-star"></i>)
          }
          while (stars.length < 5) {
            stars.push( <span className={styles.empty_stars}><i class="fa-solid fa-star"></i></span>)
          }
          return (
            <div key={entry.id} className={styles.review_card}>
              {/* {stars.map((star) => <span>{star}</span>)} */}
              {stars}
              <p>{entry.comment}</p>
              <h3>{entry.name}</h3>
              <h5>{entry.title}</h5>
            </div>
          )
        })}
      </div>
      <div className={styles.button_container}>
        <a href="#" className={buttons.btn_flat}>&emsp;&emsp;Sign up for free&emsp;&emsp;</a>
      </div>
    </div>
  )
}

// const ratingStars = (props) => {
//   const { size } = props;
//   return (
//     Array.apply(null, Array(size)).map(
//       <i class="fa-solid fa-star"></i>
//     )
//     // After that calculating and displaying the remaining empty stars */
//   )
// }

export default RatingsPreview
