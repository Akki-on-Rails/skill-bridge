import React from 'react';
import styles from "../styles/components/bullet-list.module.scss";

const BulletList = () => {
  return (
    <div className={styles.component_wrapper}>
      <h2>Job Search Features</h2>
      <div className={styles.list_wrapper}>
        <ul >
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <ul>
          <li>Feature 4</li>
          <li>Feature 5</li>
          <li>feature 6</li>
        </ul>
      </div>
    </div>
  );
};

export default BulletList;
