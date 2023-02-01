import React from 'react';
import "./bullet-list.css";


function BulletListFeatures () {
  return (
    <div className='componentLevel'>
      <h2>Job Search Features</h2>
      <div className='parentStyle'>
      <ul >
        <li className='elementStyle'><h3>Skills-Based Application</h3> <p>
            Students can apply based on their skillset, rather than their CV,
            allowing for a more diverse and equitable hiring process.
          </p></li>
        <li className='elementStyle'><h3>Real-World Projects</h3> <p>
            Students can showcase their skills by working on real-world projects,
            giving them valuable experience and making them more competitive in
            the job market.
          </p></li>
        <li className='elementStyle'><h3>Mentorship and Career Support</h3>    <p>
            Students receive mentorship and career support from industry
            professionals, helping them develop the skills and connections
            needed to succeed.
          </p></li>
      </ul>
      <ul>
        <li className='elementStyle'><h3>Flexible Learning</h3>      <p>
            The platform offers flexible learning options, allowing students to
            balance their studies with their personal and professional lives.
          </p></li>
        <li className='elementStyle'><h3>Collaborative Community</h3>  <p>
            Students can collaborate and network with their peers and industry
            professionals, building relationships and expanding their skillset.
          </p></li>
        <li className='elementStyle'><h3>Affordable Education</h3>  <p>
            The platform provides affordable education, giving students access to
            high-quality education without incurring debt.
          </p></li>
      </ul>
      </div>
    </div>
  );
};

export default BulletListFeatures;