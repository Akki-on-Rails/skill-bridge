import React from "react"
import styles from "../styles/App.scss"

// components
import LoginCard from "../components/login-card"
import IntroBlock from "../components/intro-block"
import ImageSlider from "../components/image-slider"
import BulletList from "../components/bullet-list"
import NumbersBlock from "../components/numbers-block"


function Home() {
  // const screenWidth = document.documentElement.clientWidth || window.innerWidth;
  // const doubleBlockStyles = () => {
  //   return (
  //     screenWidth <= 700 ? { display: 'flex' } : { display: 'block' }
  //   )
  // }
  return (
    <body>
      <IntroBlock />
      <ImageSlider />
      <BulletList />
      <NumbersBlock />
      {/* <LoginCard /> */}
    </body>
  )
}

export default Home
