import React from "react";
import Radium from "radium";
import IntroBlock from "../intro-block";

const DoubleBlock = () => {
  const divStyle = {
    "@media (max-width: 700px)": {
      display: "flex"
    }
  };
  return (
    <div style={divStyle}>
      <IntroBlock />
      <IntroBlock />
    </div>
  )
};

export default Radium(DoubleBlock);
