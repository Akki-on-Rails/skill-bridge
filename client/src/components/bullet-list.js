import React from 'react';
import styles from "../styles/components/bullet-list.module.scss"
// import Grid from '@mui/material/Grid';


const BulletListFeatures = () => {
  return (
    <div className={styles.bullet_wrapper}>
      <h2>What sets us apart</h2>
      <div className={styles.bullet_container}>
        <div className={styles.bullet_element}>
          <ul className={styles.bullet_head}>
            <li>Skill Matching</li>
            <li><span>Matches based on you</span></li>
          </ul>
          <p>Our platform matches you with
            the right job based on your skills
            and interests. No more browsing
            through irrelevant job postings</p>
        </div>
        <div className={styles.bullet_element}>
          <ul className={styles.bullet_head}>
            <li>Career Growth</li>
            <li><span>Skill & Network</span></li>
          </ul>
          <p>Our platform is designed to help
            you build your skills and
            network, setting you up for
            success in your future career.
          </p>
        </div>
        <div className={styles.bullet_element}>
          <ul className={styles.bullet_head}>
            <li>Skill Assessment</li>
            <li><span>Identity strengths</span></li>
          </ul>
          <p>Take our assessment to discover
            your strengths and interests and
            see which careers may be a
            good fit for you.
          </p>
        </div>
      <div className={styles.bullet_element}>
        <ul className={styles.bullet_head}>
          <li>Bias-Free Hiring</li>
          <li><span>Skills over Grades</span></li>
        </ul>
        <p>Our focus on skills over grades
          means you're evaluated based
          on what you can do, not just
          what grades you got.
        </p>
      </div>
      <div className={styles.bullet_element}>
        <ul className={styles.bullet_head}>
          <li>Goal Oriented</li>
          <li><span>Motivation & Passions</span></li>
        </ul>
        <p>By understanding your
          motivations and passions,
          SkillBridge can help you find a
          job that aligns with your goals.
        </p>
      </div>
      </div>
    </div>
  );
};

export default BulletListFeatures;
