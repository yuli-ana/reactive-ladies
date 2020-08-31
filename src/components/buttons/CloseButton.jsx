import React from "react";
import {
    FaTrashAlt
  } from "react-icons/fa";


const CloseButton = ({click, column, tickets }) => {

    return (
        <button onClick={click} className="danger"><FaTrashAlt/></button>
    );
}

export default CloseButton;