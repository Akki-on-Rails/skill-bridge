import React from "react"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

import styles from "../styles/components/footer.module.scss"
import button from "../styles/buttons.module.scss"
import "../assets/css/fontawesome.css"
import "../assets/css/brands.css"
import "../assets/css/solid.css"
import logo from "../images/logo2.png"

const Footer = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  return (
    <footer className={styles.footer_wrapper}>
      {/* <Link to="/"> */}
        {" "}
        <div className={styles.brand_name}>
          <img src={logo} alt="The SkillBridge logo"></img>
          <h1>SkillBridge</h1>{" "}
        </div>
      {/* </Link> */}
      <div className={styles.link_wrapper}>
        <div className={styles.section_container}>
          <div className={styles.section_1}>
            <h3>Students</h3>
            <ul>
              <li>Student Profile</li>
              <li>Looking for Jobs</li>
              <li>My potential Jobs</li>
            </ul>
          </div>
          <div className={styles.section_2}>
            <h3>Company</h3>
            <ul>
              <li>Company Profile</li>
              <li>Looking for Candidates</li>
              <li>My Candidates</li>
            </ul>
          </div>
          <div className={styles.section_3}>
            <h3>Other</h3>
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
          SkillBridge GmbH&emsp;|&emsp;Musterstraße 34, 20034 Hamburg&emsp;|&emsp;Phone: 0123 456
          789&emsp;|&emsp;Email: info@skillbridge.de
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
