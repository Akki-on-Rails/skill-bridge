import React from 'react';
import { useState} from 'react';
import "../assets/css/student-view.css"
import Grid from '@mui/material/Grid';


import license from "../images/driver-license.png"
import mail from "../images/mail.png"
import cake from "../images/birthday-cake.png"
import location from "../images/location.png"
import telephone from "../images/telephone.png"
import circle_one from "../images/circle-one.png"
import skill_graph from "../images/skill-graph.png"
import timeline from "../images/timeline.png"
import cv from "../images/cv.png"



function StudentView () {
  
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
            <button onClick={nameChangeActive} className='btn-style'>{nameChange ? "Stop editing" : "Edit" }</button>
             {nameChange ? <input type="text" aria-label="Field name" value={studentName} style={{marginLeft:"5px"}} onChange={editName} /> : ""} 
        </Grid>
 
        <Grid sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
        <Grid sx={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"3vh"}}><img className="candidate-info-icons" src={license}/><p style={{marginLeft:"10px", marginRight:"30px"}}>15-17</p></Grid>
        <Grid sx={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"3vh"}}><img className="candidate-info-icons" src={mail}/><p style={{marginLeft:"10px",marginRight:"30px"}}>jonas@gmail.de</p></Grid>
        <Grid sx={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"3vh"}}><img className="candidate-info-icons" src={cake}/><p style={{marginLeft:"10px",marginRight:"30px"}}>01.2023-03.2025</p></Grid>
        </Grid>
        <Grid sx={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"2vh"}}>
        <Grid sx={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"2vh"}}><img className="candidate-info-icons" src={location}/><p style={{marginLeft:"10px", marginRight:"30px"}}>15-17</p></Grid>
        <Grid sx={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"2vh"}}><img className="candidate-info-icons" src={telephone}/><p style={{marginLeft:"10px", marginRight:"30px"}}>15-17</p></Grid>
        </Grid>

        <Grid item sx={{display:"flex", flexDirection:"row", marginTop:"3vh"}}><button className='btn-style' onClick={sendApplication}>Apply now</button></Grid>

        
    </Grid>
    <Grid item xs={1}> </Grid>

    <Grid item xs={4} sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
        <img src="https://via.placeholder.com/300x200"/>
    </Grid>
    </Grid>



    <Grid item container xs={12} sx={{marginTop:"10vh",display:"flex", justifyContent:"center", backgroundColor:"#ebebeb"}}>

    <Grid item container xs={12} sx={{display:"flex", justifyContent:"center", marginTop:"10vh", alignItems:"center"}}>
    
    <Grid item xs={1}> </Grid>

    <Grid item xs={4}>

    <Grid sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
    <img className="candidate-skill-icons" src={circle_one}/>
    <img className="candidate-skill-icons" src={circle_one}/>
    <img className="candidate-skill-icons" src={circle_one}/>

    </Grid>
    <Grid sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
    <img className="candidate-skill-icons" src={circle_one}/>
    <img className="candidate-skill-icons" src={circle_one}/>
    <img className="candidate-skill-icons" src={circle_one}/>
    </Grid>

      </Grid>

      <Grid item xs={1}> </Grid>


      <Grid item xs={5} sx={{display:"flex", justifyContent:"right"}}>
          <img className="candidate-skill-graph" src={skill_graph}/>
      </Grid>
      <Grid item xs={1}> </Grid>

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




      <Grid item container xs={10} sx={{display:"flex", justifyContent:"center", marginTop:"10vh", alignItems:"center"}}>

          <Grid item xs={3} sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <h3>Lebenslauf</h3>
            <img className="candidate-cv" src={cv}/>
          </Grid>


          <Grid item xs={1}> </Grid>

          <Grid item xs={3} sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <h3>Lebenslauf</h3>
            <img className="candidate-cv" src={cv}/>
          </Grid>

          <Grid item xs={1}> </Grid>

          <Grid item xs={3} sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <h3>Lebenslauf</h3>
            <img className="candidate-cv" src={cv}/>
          </Grid>


      </Grid>




        

    </Grid>




  );
};

export default StudentView;