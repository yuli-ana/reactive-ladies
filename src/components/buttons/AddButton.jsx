import React from "react";
import {
    FaPlusCircle
  } from "react-icons/fa";


const AddButton = ({click}) => {

    return (
        <button style={{margin: 5}} onClick={click}><FaPlusCircle/></button>
    );
}

export default AddButton;