import React from "react";
import {
    FaSave
  } from "react-icons/fa";
  import ReactTooltip from 'react-tooltip';

const AddDetailsButton = ({submit}) => {
    return (
        <>
        <button type="submit" data-tip data-for='addDetails'><FaSave /></button>
        <ReactTooltip id='addDetails'>
            <span>Click here to save</span>
        </ReactTooltip>
        </>
    );
}

export default AddDetailsButton;