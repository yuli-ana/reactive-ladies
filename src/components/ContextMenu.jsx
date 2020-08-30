import React, { useState, useEffect } from 'react';

const ContextMenu = ({xPos, yPos, data, clickedTicketId}) => {

  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const newColumns = [];
  
    for (let key in data.columns) {
      newColumns.push(data.columns[key]);
    };
  
    setColumns(newColumns);

  }, [])

  const dataCopy = {};
  Object.assign(dataCopy, data);

  const getTicketData = () => {
    let data = {};

    for (let key in dataCopy.columns) {
      const ticketToRemoveIdx = dataCopy.columns[key].ticketIds.findIndex(ticketIds => ticketIds === clickedTicketId);
      if (Math.sign(ticketToRemoveIdx) !== -1) {
        data.colId =  dataCopy.columns[key].id;
        data.ticketIdx =  ticketToRemoveIdx;
      }
    }

    return data;
  }

  const retainTicket = (columnId, ticketIdx) => {
    let ticketArr = [];

    for (let key in dataCopy.columns) {
      if (dataCopy.columns[key].id === columnId) {
        const ticket = dataCopy.columns[key].ticketIds.splice(ticketIdx, 1);
        ticketArr = ticket;
      }
    }

    return ticketArr;
  }

  const pushTicketToArr = (columnId, ticketArr) => {
    for (let key in dataCopy.columns) {
      if (dataCopy.columns[key].id === columnId) {
        dataCopy.columns[key].ticketIds.unshift(...ticketArr);
      }
    }
  }

  const handleClick = (columnId) => {
    const data = getTicketData();

    const ticketArr = retainTicket(data.colId, data.ticketIdx);

    pushTicketToArr(columnId, ticketArr);
  }

  const ulStyles = {
    position: 'absolute',
    top: yPos,
    left: xPos,
    zIndex: 10,
    backgroundColor: '#F9E5E6',
  }

  return (
    <ul style={ulStyles}>
      {
        columns.map(column => {
          return <li key={column.id}><button onClick={() => handleClick(column.id)}>Move Card to "{column.title}" Column</button></li>
        })
      }
    </ul>
  )
}

export default ContextMenu;