import React from 'react';
import { useState} from 'react';
import "../assets/css/student-view.css"
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import SkillsChart from '../data/skills-graph';

import license from "../images/driver-license.png"
import mail from "../images/mail.png"
import cake from "../images/birthday-cake.png"
import location from "../images/location.png"
import telephone from "../images/telephone.png"
import circle_one from "../images/circle-one.png"
import skill_graph from "../images/skill-graph.png"
import timeline from "../images/timeline.png"
import cv from "../images/cv.png"
import digital_marketing from "../images/image_132.png"
import woman from "../images/undraw_creative_woman_re_u5tk.svg"
import calendar from "../images/calendar.png"
import work from "../images/work.png"
import university from "../images/university.png"


function StudentView () {

    
    const [skills, setSkills] = useState([
      {skillName: "Time Management", wertung: 85}, 
      {skillName: "Problem solving", wertung: 75},
      {skillName: "Communication", wertung: 80},
      {skillName: "Adabtability", wertung: 70},
      {skillName: "Teamwork", wertung: 80},
      {skillName: "Leadership", wertung: 60}
    ]);

    const [interests, setInterests] = useState([
      {skillName: "Marketing", wertung: 90}, 
      {skillName: "Social Media", wertung: 85},
      {skillName: "Entrepreneurship", wertung: 80},
      {skillName: "Graphic Design", wertung: 80},
      {skillName: "Event planning", wertung: 70},
      {skillName: "Photography", wertung: 60}
    ]);

  
  const [studentName, setStudentName] = useState("Name of Candidate")
  const [nameChange, setNameChange] = useState(false)

 

  function nameChangeActive() {
    setNameChange(!nameChange)
  }

  function sendApplication() {
    alert("Application send")
  }

  const editName = (event) => setStudentName(event.target.value)


  return (
    <Grid item container xs={12} sx={{display:"flex", justifyContent:"center"}}>
      
    <Grid item container xs={12} sx={{display:"flex", justifyContent:"center", marginTop:"10vh"}}>

      
    <Grid item xs={7}>
        <Grid item sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <h1>{studentName}</h1>
            {/* <button onClick={nameChangeActive} className='btn-style'>{nameChange ? "Stop editing" : "Edit" }</button>
             {nameChange ? <input type="text" aria-label="Field name" value={studentName} style={{marginLeft:"5px"}} onChange={editName} /> : ""}  */}
        </Grid>
 
        <Grid item container xs={12} sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
   
        <Grid item xs={6} sx={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"3vh"}}><img className="candidate-info-icons" src={cake}/><p style={{marginLeft:"10px",marginRight:"30px"}}>01.2023-03.2025</p></Grid>
        <Grid item xs={6} sx={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"3vh"}}><img className="candidate-info-icons" src={mail}/><p style={{marginLeft:"10px",marginRight:"30px"}}>jonas@gmail.de</p></Grid>
        </Grid>
        <Grid item container xs={12} sx={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"2vh"}}>
        <Grid item xs={6} sx={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"2vh"}}><img className="candidate-info-icons" src={location}/><p style={{marginLeft:"10px", marginRight:"30px"}}>Hamburg</p></Grid>
        <Grid item xs={6} sx={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"2vh"}}><img className="candidate-info-icons" src={telephone}/><p style={{marginLeft:"10px", marginRight:"30px"}}>0160 555 444 33</p></Grid>
        </Grid>

        {/* <Grid item sx={{display:"flex", flexDirection:"row", marginTop:"3vh"}}><button className='btn-style' onClick={sendApplication}>Apply now</button></Grid> */}

        
    </Grid>
    <Grid item xs={1}> </Grid>

    <Grid item xs={4} sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
        <img src={digital_marketing} style={{maxWidth:"100%"}}/>
    </Grid>
    </Grid>

  {/* Here comes "What am I looking for" part*/}

    <Grid item container xs={12} sx={{marginTop:"10vh",display:"flex"}}>

      <Grid item xs={9} sx={{backgroundColor:"#F4F5F6", borderRadius:"10px", maxHeight:"200px"}}>
             <Grid item container xs={12} sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
             <Grid item xs={4}  ><Typography variant="h4" sx={{marginTop:"3vh", marginLeft:"3vh"}}><strong>What I am looking for</strong></Typography></Grid>
             <Grid item xs={2}></Grid>
             <Grid item xs={5} sx={{marginTop:"3vh"}}>
             <Grid sx={{display:"flex", alignItems:"center",  marginTop:"15px"}}><img className="candidate-info-icons" src={university}/><Typography sx={{marginLeft:"15px",}}>Marketing Manager</Typography></Grid>
              <Grid sx={{display:"flex", alignItems:"center", marginTop:"10px"}}><img className="candidate-info-icons" src={calendar}/><Typography sx={{marginLeft:"15px"}}>03.2023 - 03.2026</Typography></Grid>
              <Grid sx={{display:"flex", alignItems:"center",  marginTop:"10px"}}><img className="candidate-info-icons" src={work}/><Typography sx={{marginLeft:"15px"}}>Hamburg, Schleswig Holstein</Typography></Grid>

              </Grid>



             </Grid>

      </Grid>

      <Grid item xs={3}><img src={woman} style={{transform: "scale(-1, 1)", maxWidth:"100%", marginTop:"150px", marginBottom:"-150px"}}/></Grid>
    </Grid>

    {/* Here comes the skills and interests part*/}

    <Grid item container xs={12} sx={{marginTop:"10vh",display:"flex",justifyContent:"center"}}>
      
      
    <Grid item container xs={12} sx={{display:"flex", marginTop:"3vh",alignItems:"center"}}>
    
    <Grid item container xs={5} sx={{display:"flex", flexDirection:"column"}}>
    <Typography variant='h5'><strong>Skills</strong></Typography>

    <Grid item xs={12} sx= {{backgroundColor:"#F4F5F6", padding:"15px", borderRadius:"10px"}}>
      
      <Grid item container xs={12} sx={{display:"flex",justifyContent:"space-between"}}>
      {/* {skills.map((i)=>{
        return(
          <Grid item xs={5} sx={{display:"flex", flexDirection:"column"}}>
                <Typography>{i.skillName}</Typography>
                <Grid sx={{backgroundColor:"#AFBDF8"}}>{i.wertung}%</Grid>
          </Grid>
        )
      })} */}
      <SkillsChart skills={skills} />


      </Grid>
{/* 
    <Grid sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
    <img className="candidate-skill-icons" src={circle_one}/>
    <img className="candidate-skill-icons" src={circle_one}/>
    <img className="candidate-skill-icons" src={circle_one}/>

    </Grid>
    <Grid sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
    <img className="candidate-skill-icons" src={circle_one}/>
    <img className="candidate-skill-icons" src={circle_one}/>
    <img className="candidate-skill-icons" src={circle_one}/>
    </Grid> */}
    </Grid>
  
      </Grid>

      <Grid item xs={2}> </Grid>
      <Grid item container xs={5} sx={{display:"flex", flexDirection:"column"}}>
      <Typography variant='h5'><strong>Interests</strong></Typography>

    <Grid item xs={12} sx= {{backgroundColor:"#F4F5F6", padding:"15px", borderRadius:"10px"}}>
      
      <Grid item container xs={12} sx={{display:"flex",justifyContent:"space-between"}}>
          {/* {skills.map((i)=>{
            return(
              <Grid item xs={12} sx={{display:"flex", flexDirection:"column"}}>
                    <Typography>{i.skillName}  {i.wertung}%</Typography>
                    <Grid sx={{backgroundColor:"#AFBDF8"}}><Typography sx={{color:"rgba(0,0,0,0)"}}>blabla</Typography></Grid>
              </Grid>
            )
          })} */}
              <SkillsChart skills={interests} />

          </Grid>
   
        </Grid>
  
      </Grid>

   

      </Grid>
      </Grid>


      <Grid item container xs={12} sx={{display:"flex", justifyContent:"center", marginTop:"10vh", alignItems:"center"}}>

        <Grid item xs={5}>

        <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <img className="candidate-timeline" src={timeline}/>
       

        </Grid>      
    
          </Grid>


          <Grid item xs={1}> </Grid>

          <Grid item xs={6} sx={{display:"flex", flexDirection:"column", justifyContent:"left"}}>
              <h1> My Motivations </h1>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
              <h1 style={{marginTop:"5vh"}}> About me </h1>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </Grid>
      </Grid>



{/* 
      <Grid item container xs={10} sx={{display:"flex", justifyContent:"center", marginTop:"10vh", alignItems:"center"}}>

          <Grid item xs={3} sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <h3>CV</h3>
            <img className="candidate-cv" src={cv}/>
          </Grid>


          <Grid item xs={1}> </Grid>

          <Grid item xs={3} sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <h3>CV</h3>
            <img className="candidate-cv" src={cv}/>
          </Grid>

          <Grid item xs={1}> </Grid>

          <Grid item xs={3} sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <h3>CV</h3>
            <img className="candidate-cv" src={cv}/>
          </Grid>


      </Grid> */}




        

    </Grid>




  );
};

export default StudentView;