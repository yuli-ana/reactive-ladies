import React, { useContext } from 'react';
import Ticket from './Ticket';
import CloseButton from './buttons/CloseButton';
import { DataContext } from './Board';
import AddButton from './buttons/AddButton';


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

    console.log(column);

    function handleCloseTicket(e){
        dispatch({type: "CLOSE_COLUMN", payload: title });
    }

    
    return (
        <li style={box}>
            <AddButton style={{margin: 0}}/>
            <CloseButton click={handleCloseTicket}/>
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