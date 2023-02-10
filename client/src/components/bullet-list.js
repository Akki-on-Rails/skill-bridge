import React from 'react';
import "../assets/css/bullet-list.css"
import Grid from '@mui/material/Grid';


function BulletListFeatures () {
  return (
    <Grid item container sx={{display:"flex", justifyContent:"center", marginBottom:"10vh"}} xs={12} >
      <Grid item xs={12} sx={{marginBottom:"5vh", marginTop:"10vh"}}><h2>What sets us apart</h2></Grid>
      <Grid item container xs={11} sx={{display:"flex", flexDirection:"row", justifyContent:"center"}}>

    
        <Grid item xs={2.5} sx={{boxShadow:"5px 5px 5px 5px rgba(0, 0, 0, 0.2)", borderRadius:"15px", backgroundColor:"white", padding:"10px 15px 5px 10px"}} ><h4>Skills-Based Application</h4> <p>
            Students can apply based on their skillset, rather than their CV,
            allowing for a more diverse and equitable hiring process.
          </p></Grid>
        <Grid xs={0.33}></Grid>
        <Grid item xs={2.5} sx={{boxShadow:"5px 5px 5px 5px rgba(0, 0, 0, 0.2)", borderRadius:"15px", backgroundColor:"white", padding:"10px 10px 5px 10px"}}><h4>Real-World Projects</h4> <p>
            Students can showcase their skills by working on real-world projects,
            giving them valuable experience and making them more competitive in
            the job market.
          </p></Grid>
        <Grid xs={0.33}></Grid>

        <Grid item xs={2.5} sx={{boxShadow:"5px 5px 5px 5px rgba(0, 0, 0, 0.2)", borderRadius:"15px", backgroundColor:"white", padding:"10px 10px 5px 10px"}}><h4>Mentorship and Career Support</h4>    <p>
            Students receive mentorship and career support from industry
            professionals, helping them develop the skills and connections
            needed to succeed.
          </p></Grid>
        
        <Grid xs={0.33}></Grid>

        <Grid item xs={2.5} sx={{boxShadow:"5px 5px 5px 5px rgba(0, 0, 0, 0.2)", borderRadius:"15px", backgroundColor:"white", padding:"10px 10px 5px 10px"}}><h4>Collaborative Community</h4>    <p>
        Students can collaborate and network with their peers and industry
//             professionals, building relationships and expanding their skillset.
          </p></Grid>
      
      </Grid>
    </Grid>
  );
};

export default BulletListFeatures;