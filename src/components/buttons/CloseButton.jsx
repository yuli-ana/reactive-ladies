import React from "react";
import {
    FaTimes
  } from "react-icons/fa";


const CloseButton = ({click}) => {
    return (
        <button onClick={click} style={{margin: "10px"}}><FaTimes/></button>
    );
}

export default CloseButton;