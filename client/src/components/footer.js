import React from "react"
import { Link, useOutlet } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

import styles from "./footer.module.scss"
import button from "../styles/buttons.module.scss"
import "../assets/css/fontawesome.css"
import "../assets/css/brands.css"
import "../assets/css/solid.css"

const Footer = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.logo}>
        {/* Here we need a Logo and/or Slogan */}
        <h1>SkillBridge</h1>
      </div>
      <div className={styles.link_wrapper}>
        <div className={styles.section_container}>
          <div className={styles.section_1}>
            <h4>Students</h4>
            <ul>
              <li>Student Profile</li>
              <li>Looking for Jobs</li>
              <li>My potential Jobs</li>
            </ul>
          </div>
          <div className={styles.section_2}>
            <h4>Company</h4>
            <ul>
              <li>Company Profile</li>
              <li>Looking for Candidates</li>
              <li>My Candidates</li>
            </ul>
          </div>
          <div className={styles.section_3}>
            <h4>Other</h4>
            <ul>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Resources</li>
            </ul>
          </div>
        </div>
        <div className={styles.social}>
          <ul>
            <li>
              <i className="fa-brands fa-square-instagram" />
            </li>
            <li>
              <i className="fa-brands fa-square-snapchat" />
            </li>
            <li>
              <i className="fa-brands fa-twitch" />
            </li>
            <li>
              <i className="fa-brands fa-youtube" />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.address}>
        <p>
          SkillBridge GmbH | Musterstraße 34, 20034 Hamburg | Phone: 0123 456
          789 | Email: info@skillbridge.de
        </p>
        {/* conditional: only if user is not logged in  */}
        {!user && (
          <a className={button.btn_flat} href="/signup">
            Sign up for free
            {/* Here a Link to our Sign up page */}
          </a>
        )}
      </div>

      <div className={styles.legal_section}>
        <p>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
          <a href="#">AGB & Nutzungsbedingungen</a>
          {/* For the copyright we need to insert the current year with js */}©
          2023 All Rights Reserved. Skillbridge
        </p>
      </div>
    </footer>
  )
}

export default Footer
