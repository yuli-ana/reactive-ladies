import React from "react";
import {
    FaTimes
  } from "react-icons/fa";
  import ReactTooltip from 'react-tooltip';


const CloseButton = ({click, column, tickets }) => {

    return (
        <>
        <button onClick={click} style={{margin: "10px"}} data-tip data-for='deleteItem'><FaTimes/></button>
        <ReactTooltip id='deleteItem'>
            <span>Click here to delete</span>
        </ReactTooltip>
        </>
    );
}

export default CloseButton;