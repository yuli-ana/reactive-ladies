import React from 'react';
import {
    FaTrashAlt
  } from 'react-icons/fa';
  import ReactTooltip from 'react-tooltip';


const CloseButton = ({click, column, tickets }) => {

    return (
        <>
        <button onClick={click} className="danger" data-tip data-for='deleteItem'><FaTrashAlt /></button>
        <ReactTooltip id='deleteItem'>
            <span>Click here to delete</span>
        </ReactTooltip>
        </>
    );
}

export default CloseButton;