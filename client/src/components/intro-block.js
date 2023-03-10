import React from "react";
import { useInView } from 'react-intersection-observer';

import styles from '../styles/components/intro-block.module.scss'
import buttons from "../styles/buttons.module.scss"

import "../assets/css/fontawesome.css"
import "../assets/css/brands.css"
import "../assets/css/solid.css"
import image from '../images/undraw_job_hunt_re_q203.svg'

const spanStyle = {
  color: '#3358EB',
}

const IntroBlock = () => {
  const { ref: firstRef, inView: firstElementIsVisible } = useInView()
  const { ref: secondRef, inView: secondElementIsVisible } = useInView()
  const { ref: thirdRef, inView: thirdElementIsVisible } = useInView()

  return (
    <div className={styles.intro_block_wrapper}>
      <div className={styles.block_wrapper}>
        <div className={styles.image_wrapper}>
          <img src={image} alt='Job search illustration'></img>
        </div>
        {/* <div className={styles.intro_wrapper}> */}
          <div className={styles.text_wrapper}>
            <h2>Find the <span style={spanStyle}>apprenticeship that fits your skillset</span>, not just your grades.</h2>
            <a href="#" className={buttons.btn_flat}>&emsp;&emsp;Sign up for free&emsp;&emsp;</a>
          </div>
        {/* </div> */}
      </div>
      <ul>
        <li className={firstElementIsVisible && styles.slide_in_left} ref={firstRef}>
          <h5>Hello and <span style={spanStyle}>welcome to SkillBridge</span>,
            a special website that helps you find the perfect job!
          </h5>
        </li>
        <li className={secondElementIsVisible && styles.slide_in_right} ref={secondRef}>
          <h5>We <span style={spanStyle}>do things differently</span> here. Instead of looking at your grades
            and past experiences, we <span style={spanStyle}>match you with companies based on
            your skills</span> and what you're good at.
          </h5>
        </li>
        <li className={thirdElementIsVisible && styles.slide_in_left} ref={thirdRef}>
          <div className={styles.intro_text3}>
            <h5>So don't wait any longer! <span style={spanStyle}>Join SkillBridge today</span> and see
              all the job opportunities waiting for you.
            </h5>
            <a href="#" className={buttons.btn_flat}>Sign up for free</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default IntroBlock
