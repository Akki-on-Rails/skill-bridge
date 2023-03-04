import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"
import React, { useEffect, useState } from "react"

//pages and components
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import Footer from "./components/footer"
import Navbar from "./components/navbar"
import styles from "./styles/App.scss"
import StudentProfile from "./pages/StudentProfile"
import { red } from "@mui/material/colors"

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

              <Route
                path="/student-profile"
                // element = {<StudentProfile/>}
                element={user? <StudentProfile /> : <Navigate to="/" />}
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
