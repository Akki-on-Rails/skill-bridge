import React from 'react';
import "../styles/components/bullet-list.css";


function BulletList () {
  return (
    <div className='componentLevel'>
      <h2>Job Search Features</h2>
      <div className='parentStyle'>
      <ul >
        <li className='elementStyle'>Feature 1</li>
        <li className='elementStyle'>Feature 2</li>
        <li className='elementStyle'>Feature 3</li>
      </ul>
      <ul>
        <li className='elementStyle'>Feature 4</li>
        <li className='elementStyle'>Feature 5</li>
        <li className='elementStyle'>feature 6</li>
      </ul>
      </div>
    </div>
  );
};

export default BulletList;
