import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
import styles from "../styles/components/navbar.module.scss"
import avatars from "../styles/avatars.module.scss"
import buttons from "../styles/buttons.module.scss"
// import BurgerButton from "./atoms/burgerButton"

import "../assets/css/fontawesome.css"
import "../assets/css/brands.css"
import "../assets/css/solid.css"
import logo from "../images/logo2.png"

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  //handeling login and logout
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => {
    logout()
  }

  return (
    <nav className={styles.nav_wrapper}>
      {/* here we need a switch/toggle */}
      <div className={styles.user_switch}>
        <a href="#">Student&emsp;</a> | <a href="#">&emsp;Company</a>
      </div>
      <div className={styles.navigation}>
        <Link to="/">
          {" "}
          <div className={styles.brand_name}>
            <img src={logo} alt="The SkillBridge logo"></img>
            <h1>SkillBridge</h1>{" "}
          </div>
        </Link>
        <div
          className={
            isNavExpanded ? styles.navigation_expanded : styles.navigation_menu
          }
        >
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              {/* conditional: for if student or company is logged in */}
              {/* either show 'Jobs' or 'Candidates' */}
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
        <div className={styles.login}>
          {/* here we need to insert user images dynamicly from DB */}
          {/* also we have to create a conditional: */}
          {/* if logged in show avatar and 'log out' */}
          {/* else show 'log in' and 'sign up' */}

          <div className={styles.user_comp}>
            {user && (
              <div>
                <span> Hello {user.fName}</span>
                <img
                  className={avatars.avatar_small}
                  src="https://picsum.photos/id/64/200/300"
                  alt="user avatar"
                ></img>
                <button className={buttons.btn_flat} onClick={handleClick}>
                  Log out
                </button>
              </div>
            )}
            {!user && (
              <div>
                <Link to="/signup" className={buttons.btn_flat}> Sign up</Link>
                <Link to="/login" className={styles.login_link}> Log in</Link>
              </div>
            )}
          </div>
        </div>
        <button
          className={styles.hamburger}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="#5E5E5E"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

    </nav>
  )
}

export default Navbar
