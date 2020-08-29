import React, { useContext } from 'react';
import Ticket from './Ticket';
import CloseButton from './buttons/CloseButton';
import AddButton from './buttons/AddButton';
import { DataContext } from './Board';

const box = {
    padding: 20,
    margin: 20,
    border: "1px solid black",
    height: "50vh",
    width: "10%",
}

const Column = ({column}) => {
    const { title, tickets } = column;
    const { columns, dispatch } = useContext(DataContext);

    function handleAddTicket(){
        dispatch({type: "ADD_COLUMN"});
    }

    
    return (
        <li style={box}>
            <AddButton click={handleAddTicket}/>
            <CloseButton/>
            <h2>{title}</h2>
            <ul>
              {
               tickets 
               ? tickets.map((ticket, index) => <Ticket ticket={ticket} key={`${ticket.title}${index}`}/>) 
               : null
              }
            </ul>
        </li>
    )
}

export default Column;