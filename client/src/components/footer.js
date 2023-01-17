import React from "react";

import './footer.module.scss';
import "../assets/css/fontawesome.css"
import "../assets/css/brands.css"
import "../assets/css/solid.css"

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='logo'>
        {/* Here we need a Logo and/or Slogan */}
        <p>SkillBridge</p>
      </div>
      <div className='section-1'>
        <h4>Students</h4>
        <ul>
          <li>Student Profile</li>
          <li>Looking for Jobs</li>
          <li>My potential Jobs</li>
        </ul>
      </div>
      <div className='section-2'>
        <h4>Company</h4>
        <ul>
          <li>Company Profile</li>
          <li>Looking for Candidates</li>
          <li>My Candidates</li>
        </ul>
      </div>
      <div className='section-3'>
        <h4>Other</h4>
        <ul>
          <li>Contact</li>
          <li>FAQ</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className='social'>
        <h4>Students</h4>
        <ul>
          <li><i className="fa-brands fa-square-instagram" /></li>
          <li><i className="fa-brands fa-square-snapchat" /></li>
          <li><i className="fa-brands fa-twitch" /></li>
          <li><i className="fa-brands fa-youtube" /></li>
        </ul>
      </div>
      <div className='adress'>
        <table>
          <tr>
            <td>SkillBridge GmbH</td>
            <td>Musterstraße 34, 20034 Hamburg</td>
            <td>Phone: 0123 456 789</td>
            <td>Email: info@skillbridge.de</td>
          </tr>
        </table>
      </div>
      <button>
        Sign up for free
        {/* Here a Link to our Sign up page */}
      </button>
      <div className='legal-section'>
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
        <a href="#">AGB & Nutzungsbedingungen</a>
        {/* For the copyright we need to insert the current year with js */}
        <p>© 2023 All Rights Reserved. Skillbridge</p>
      </div>
    </footer>
  )
}

export default Footer
