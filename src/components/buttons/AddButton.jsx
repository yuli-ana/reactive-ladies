import React from "react";
import {
    FaPlusCircle
  } from "react-icons/fa";
  import ReactTooltip from 'react-tooltip';



const AddButton = ({click}) => {

    return (
        <>
        <button onClick={click} style={{margin: 5}}data-tip data-for='addColumn'><FaPlusCircle/></button>
        <ReactTooltip id='addColumn'>
            <span>Add a column</span>
        </ReactTooltip>
        </>
    );
}

export default AddButton;