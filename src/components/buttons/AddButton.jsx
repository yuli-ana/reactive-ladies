import React from "react";
import {
    FaPlusCircle
  } from "react-icons/fa";


const AddButton = ({click}) => {

    return (
        <button onClick={click} style={{margin: 5}}><FaPlusCircle/></button>
    );
}

export default AddButton;