import React from "react"
import styles from "../styles/App.scss"

// components
import LoginCard from "../components/login-card"
import IntroBlock from "../components/intro-block"
import ImageSlider from "../components/image-slider"
import BulletList from "../components/bullet-list"

const Home = () => {
  return (
    <body>
      <div className={styles.double_block}>
        <IntroBlock />
        <IntroBlock />
        <div className={styles.left_item}></div>
        <div className={styles.right_item}></div>
      </div>
      <ImageSlider />
      <BulletList />
      {/* <LoginCard /> */}
    </body>
  )
}

export default Home
