import React from "react"
import styles from "../styles/App.scss"

// components
import IntroBlock from "../components/intro-block"
import BulletList from "../components/bullet-list"
import NumbersBlock from "../components/numbers-block"
// import RatingsPreview from "../components/ratings-preview"

function Home() {
  return (
    <body>
      <div className={styles.body_wrapper}>
        <IntroBlock />
        <BulletList />
        <NumbersBlock />
        {/* <RatingsPreview /> */}
      </div>
    </body>
  )
}

export default Home
