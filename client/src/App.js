import React from "react";

import LoginCard from "./components/login-card";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import styles from "./App.scss";
import IntroBlock from "./components/intro-block";
import ImageSlider from "./components/image-slider";
import BulletList from "./components/bullet-list";

function App() {
  return (
    <div className={styles.body_wrapper}>
      <Navbar />
      <body>
        <div className={styles.double_block}>
          <IntroBlock />
          <IntroBlock />
          <div className={styles.left_item}>
          </div>
          <div className={styles.right_item}>
          </div>
        </div>
        <ImageSlider />
        <BulletList />
        {/* <LoginCard /> */}
      </body>
      <Footer />
    </div>
  )
}

export default App
