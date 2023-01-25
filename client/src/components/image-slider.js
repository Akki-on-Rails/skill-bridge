import React from 'react'
import "./image-slider.css";
import testbild1 from '../images/testbildx.jpg';
import testbild2 from '../images/testfeatures.jpg';
import testbild3 from '../images/testbildy.jpg';

const images = [testbild1,testbild2, testbild3]

function ImageComponent() {

  const [activeIndex, setActiveIndex] = React.useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{display:"flex", flexDirection:"row", justifyContent: "center", padding:"5vh"}}>
      <div class="slider">
          <div class="slides">
          <div id="slide-1"><img src={testbild1} style={{width:"100%"}}/></div>
          <div id="slide-2"><img src={testbild2} style={{width:"100%"}}/></div>
          <div id="slide-3"><img src={testbild3} style={{width:"100%"}}/></div>
        
        </div>
        <a href="#slide-1"><img src={testbild1} style={{width:"100%"}}/></a>
        <a href="#slide-2"><img src={testbild2} style={{width:"100%"}}/></a>
        <a href="#slide-3"><img src={testbild3} style={{width:"100%"}}/></a>
      </div>
   
    </div>
  )
}

export default ImageComponent