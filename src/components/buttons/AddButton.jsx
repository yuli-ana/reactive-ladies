import React from "react";
import {
    FaPlusCircle
  } from "react-icons/fa";


const AddButton = ({click}) => {

    return (
        <button onClick={click}><FaPlusCircle/></button>
    );
}

export default AddButton;