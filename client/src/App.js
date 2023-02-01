import React from "react";

import LoginCard from "./components/login-card";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import styles from "./App.scss";

function App() {
  return (
    <div className={styles.App}>
      <body>
        <div className={styles.body_wrapper}>
          <Navbar />
          {/* <LoginCard /> */}
          <Footer />
        </div>
      </body>
    </div>
  )
}

export default App
