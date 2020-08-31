import React from 'react';
import {
    FaPlusCircle
  } from 'react-icons/fa';
import styled from 'styled-components';
  import ReactTooltip from 'react-tooltip';


const StyledButton = styled.button`
    color: #172B4D;
    border: none;
    margin: 10px 0;
    padding: 5px 0;
    background: #fff;
    border-radius: 0.2rem;
    box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08), 0 1px 3px 1px rgba(66, 66, 66, 0.16);
`;

const AddButton = ({click}) => {
    return (
        <>
        <StyledButton onClick={click} className="column-add-ticket" data-tip data-for='addColumn'><FaPlusCircle /></StyledButton>
        <ReactTooltip id='addColumn'>
            <span>Add a column</span>
        </ReactTooltip>
        </>
    );
}

export default AddButton;