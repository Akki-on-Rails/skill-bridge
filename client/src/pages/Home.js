import React from "react"
import styles from "../styles/App.scss"

// components
import LoginCard from "../components/login-card"
import IntroBlock from "../components/intro-block"
import ImageSlider from "../components/image-slider"
import BulletList from "../components/bullet-list"

const screenWidth = document.documentElement.clientWidth || window.innerWidth;
const doubleBlockStyles = () => {
  return (
    screenWidth <= 700 ? { display: 'block' } : { display: 'flex' }
  )
}

function Home() {
  return (
    <body>
      <div style={doubleBlockStyles}>
        <IntroBlock />
        <IntroBlock />
      </div>
      <ImageSlider />
      <BulletList />
      {/* <LoginCard /> */}
    </body>
  )
}

export default Home
