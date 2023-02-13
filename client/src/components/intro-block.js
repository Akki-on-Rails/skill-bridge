import React from "react";
import { useRef, useEffect, useState } from "react";

import styles from '../styles/components/intro-block.module.scss'
import buttons from "../styles/buttons.module.scss"

import "../assets/css/fontawesome.css"
import "../assets/css/brands.css"
import "../assets/css/solid.css"
import image from '../images/casual-life-3d-young-woman-imagining-things-while-reading-e-book.png'

const spanStyle = {
  color: '#3358EB',
}

const IntroBlock = () => {
  const myRef = useRef();
  const [infoElementIsVisible, setInfoElementIsVisible] = useState();
  console.log('infoElementIsVisible', infoElementIsVisible)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setInfoElementIsVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current)
  }, [])

  return (
    <div className={styles.intro_block_wrapper}>
      <div className={styles.block_wrapper}>
        <div className={styles.text_wrapper}>
          <h2>Find the <span style={spanStyle}>apprenticeship that fits your skillset</span>, not just your grades.</h2>
          <a href="#" className={buttons.btn_flat}>&emsp;Sign up for free&emsp;</a>
        </div>
        {/* Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a> */}
        {/* Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a> */}
        <img src={image}></img>
      </div>
      <ul>
        <li className={styles.intro_text1}>
          <h5>Hello and <span style={spanStyle}>welcome to SkillBridge</span>,
            a special website that helps you find the perfect job!
          </h5>
        </li>
        <li className={styles.intro_text2}>
          <h5>We <span style={spanStyle}>do things differently</span> here. Instead of looking at your grades
            and past experiences, we <span style={spanStyle}>match you with companies based on
            your skills</span> and what you're good at.
          </h5>
        </li>
        <li className={styles.intro_text3} ref={myRef}>
          <h5>So don't wait any longer! <span style={spanStyle}>Join SkillBridge today</span> and see
            all the job opportunities waiting for you.
          </h5>
          <a href="#" className={buttons.btn_flat}>Sign up for free</a>
        </li>
      </ul>
    </div>
  )
}

export default IntroBlock
