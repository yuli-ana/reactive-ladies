import React from "react";
import {
    FaCheckCircle
  } from "react-icons/fa";
  import ReactTooltip from 'react-tooltip';


const AddDetailsButton = ({submit}) => {
    return (
        <>
        <button type="submit" style={{margin: 5}} data-tip data-for='addDetails'><FaCheckCircle/></button>
        <ReactTooltip id='addDetails'>
            <span>Edit task details</span>
        </ReactTooltip>
        </>
    );
}

export default AddDetailsButton;