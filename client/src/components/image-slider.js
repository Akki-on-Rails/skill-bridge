import React from 'react'
import "./image-slider.css";
import testbild1 from '../images/testbildx.jpg';
import testbild2 from '../images/testfeatures.jpg';
import testbild3 from '../images/testbildy.jpg';
import Flickity from "react-flickity-component";
import "./image-slider.css";

const images = [testbild1,testbild2, testbild3]

function ImageComponent() {

  const [activeIndex, setActiveIndex] = React.useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='bulletDiv'>

    <Flickity>
      <img src={testbild1} />
      <img src={testbild2} />
      <img src={testbild3} />
    </Flickity>

   
    </div>
  )
}

export default ImageComponent