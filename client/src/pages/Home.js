import React from "react"
import styles from "../styles/App.scss"

// components
import LoginCard from "../components/login-card"
import IntroBlock from "../components/intro-block"
import ImageSlider from "../components/image-slider"
import BulletList from "../components/bullet-list"
import NumbersBlock from "../components/numbers-block"
import RatingsPreview from "../components/ratings-preview"

function Home() {
  // const screenWidth = document.documentElement.clientWidth || window.innerWidth;
  // const doubleBlockStyles = () => {
  //   return (
  //     screenWidth <= 700 ? { display: 'flex' } : { display: 'block' }
  //   )
  // }
  return (
    <body>
      <div className={styles.body_wrapper}>
        <IntroBlock />
        <ImageSlider />
        <BulletList />
        <NumbersBlock />
        <RatingsPreview />
        {/* <LoginCard /> */}
      </div>
    </body>
  )
}

export default Home
