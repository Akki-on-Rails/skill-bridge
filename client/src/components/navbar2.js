import React from "react";
// import { NavLink } from 'react-router-dom'

import './navbar2.module.scss'

const Navbar2 = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>SkillBridge</h1>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar2
