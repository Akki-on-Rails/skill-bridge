import React from 'react';
import styles from "../styles/components/bullet-list.module.scss"
// import Grid from '@mui/material/Grid';


const BulletListFeatures = () => {
  return (
    <div className={styles.bullet_wrapper}>
      <h2>What sets us apart</h2>
      <div className={styles.bullet_one}>
        <ul className={styles.bullet_head}>
          <li>Skill Matching</li>
          <li>Matches based on you</li>
        </ul>
        <p>Our platform matches you with
          the right job based on your skills
          and interests. No more browsing
          through irrelevant job postings</p>
      </div>
      <div className={styles.bullet_two}>
        <ul className={styles.bullet_head}>
          <li>Career Growth</li>
          <li>Skill & Network</li>
        </ul>
        <p>Our platform is designed to help
          you build your skills and
          network, setting you up for
          success in your future career.
        </p>
      </div>
      <div className={styles.bullet_three}>
        <ul className={styles.bullet_head}>
          <li>Skill Assessment</li>
          <li>Identity strengths</li>
        </ul>
        <p>Take our assessment to discover
          your strengths and interests and
          see which careers may be a
          good fit for you.
        </p>
      </div>
      <div className={styles.bullet_four}>
        <ul className={styles.bullet_head}>
          <li>Bias-Free Hiring</li>
          <li>Skills over Grades</li>
        </ul>
        <p>Our focus on skills over grades
          means you're evaluated based
          on what you can do, not just
          what grades you got.
        </p>
      </div>
      <div className={styles.bullet_five}>
        <ul className={styles.bullet_head}>
          <li>Goal Oriented</li>
          <li>Motivation & Passions</li>
        </ul>
        <p>By understanding your
          motivations and passions,
          SkillBridge can help you find a
          job that aligns with your goals.
        </p>
      </div>
    </div>

//     <Grid item container sx={{display:"flex", justifyContent:"center", marginBottom:"10vh"}} xs={12} >
//       <Grid item xs={12} sx={{marginBottom:"5vh", marginTop:"10vh"}}><h2>What sets us apart</h2></Grid>
//       <Grid item container xs={11} sx={{display:"flex", flexDirection:"row", justifyContent:"center"}}>


//         <Grid item xs={2.5} sx={{boxShadow:"5px 5px 5px 5px rgba(0, 0, 0, 0.2)", borderRadius:"15px", backgroundColor:"white", padding:"10px 15px 5px 10px"}} ><h4>Skills-Based Application</h4> <p>
//             Students can apply based on their skillset, rather than their CV,
//             allowing for a more diverse and equitable hiring process.
//           </p></Grid>
//         <Grid xs={0.33}></Grid>
//         <Grid item xs={2.5} sx={{boxShadow:"5px 5px 5px 5px rgba(0, 0, 0, 0.2)", borderRadius:"15px", backgroundColor:"white", padding:"10px 10px 5px 10px"}}><h4>Real-World Projects</h4> <p>
//             Students can showcase their skills by working on real-world projects,
//             giving them valuable experience and making them more competitive in
//             the job market.
//           </p></Grid>
//         <Grid xs={0.33}></Grid>

//         <Grid item xs={2.5} sx={{boxShadow:"5px 5px 5px 5px rgba(0, 0, 0, 0.2)", borderRadius:"15px", backgroundColor:"white", padding:"10px 10px 5px 10px"}}><h4>Mentorship and Career Support</h4>    <p>
//             Students receive mentorship and career support from industry
//             professionals, helping them develop the skills and connections
//             needed to succeed.
//           </p></Grid>

//         <Grid xs={0.33}></Grid>

//         <Grid item xs={2.5} sx={{boxShadow:"5px 5px 5px 5px rgba(0, 0, 0, 0.2)", borderRadius:"15px", backgroundColor:"white", padding:"10px 10px 5px 10px"}}><h4>Collaborative Community</h4>    <p>
//         Students can collaborate and network with their peers and industry
// //             professionals, building relationships and expanding their skillset.
//           </p></Grid>

    //   </Grid>
    // </Grid>
  );
};

export default BulletListFeatures;
