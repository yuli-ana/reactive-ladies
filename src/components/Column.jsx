import React, { useContext } from 'react';
import Ticket from './Ticket';
import CloseButton from './buttons/CloseButton';
import { DataContext } from './Board';
import AddButton from './buttons/AddButton';
import { v4 as uuid } from "uuid";


const box = {
    padding: 20,
    margin: 20,
    border: "1px solid black",
    height: "50vh",
    width: "10%",
}

const Column = ({column, ticketsData}) => {
    const {title, id, ticketIds} = column;

    const { data, dispatch } = useContext(DataContext);

    function handleDeleteColumn(){
        dispatch({type: "DELETE_COLUMN", payload: id });
    }

    function handleAddTask(){
        dispatch({type: "ADD_TASK", payload:{ taskId: uuid(), columnId: id} });
    }

    
    return (
        <li style={box}>
            <CloseButton click={handleDeleteColumn}/>
            <AddButton click={handleAddTask} style={{margin: 0}}/>
            <h2>{title}</h2>
            <ul>
              {
               ticketIds
               ? ticketIds.map((ticket, index) => <Ticket key={`${title}${index}`}/>) 
               : null
              }
            </ul>
        </li>
    )
}

export default Column;