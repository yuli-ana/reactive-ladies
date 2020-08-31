import React from "react";
import {
    FaCheckCircle
  } from "react-icons/fa";


const AddDetailsButton = ({submit}) => {
    return (
        <button type="submit" style={{margin: 5}}><FaCheckCircle/></button>
    );
}

export default AddDetailsButton;