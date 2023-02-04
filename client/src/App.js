import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"
import React from "react"

//pages and components
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import Footer from "./components/footer"
import Navbar from "./components/navbar"
import styles from "./styles/App.scss"

function App() {
  const { user } = useAuthContext()
  return (
    <div className={styles.content_wrapper}>
      <BrowserRouter>
        <div className={styles.pages_wrapper}>
          <Navbar />
          <div className={styles.pages}>
            <Routes>
              <Route
                path="/"
                element={<Home />}
                // element={user ? <Home /> : <Navigate to="/login" />}
                />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
                />

              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
                />
            </Routes>
          </div>
          <Footer />

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
