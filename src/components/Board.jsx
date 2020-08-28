import React, { useState } from "react";
import Ticket from './Ticket';

function Board() {
  const [columns, setColumns] = useState([
    {
      title: 'To Do',
      tickets: [
        {title: 'create component',
          details: 'write code for board component.'}]
    },
    {
      title: 'In Progress',
      tickets: [
        {title: 'create component',
          details: 'write code for board component.'}]
    },
    {
      title: 'Done',
      tickets: [
        {title: 'create component',
          details: 'write code for board component.'}]
    }
  ]);

  return (
    <>
    {
      columns.map((column, index) => {
        return (
          <div key={`${column.title}${index}`}>
            <h2>{column.title}</h2>
            <ul>
              {
                column.tickets.map((ticket, index) => {
                  return(
                    <li key={`${ticket.title}${index}`}>
                      <Ticket title={ticket.title} details={ticket.details}/>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        )
      })
    }
    </>
  )
}

export default Board;