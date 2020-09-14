import React, { useState, useEffect } from 'react';

const ContextMenu = ({xPos, yPos, data, clickedTicketData}) => {
  
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const newColumns = [];
  
    for (let key in data.columns) {
      newColumns.push(data.columns[key]);
    };
    
    setColumns(newColumns);

  }, [clickedTicketData])
  
  // make copy of the data state object
  const dataCopy = {...data};
  
  const getTicketData = () => {
    let index = '';
    
    // loop through the state object
    for (let key in dataCopy.columns) {
      // find the index of the clicked ticket using its ID
      const ticketToRemoveIdx = dataCopy.columns[key].ticketIds.findIndex(ticketIds => ticketIds === clickedTicketData.ticketId);
      // loop returns -1 if not found, need to return value only if found
      if (ticketToRemoveIdx !== -1) {
        index =  ticketToRemoveIdx;
      }
    }

    return index;
  }

  const retainTicket = (columnId, ticketIdx) => {
    let ticketArr = [];

    for (let key in dataCopy.columns) {
      if (dataCopy.columns[key].id === columnId) {
        ticketArr = dataCopy.columns[key].ticketIds.splice(ticketIdx, 1);
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
    const ticketIdx = getTicketData();

    const ticketArr = retainTicket(clickedTicketData.colId, ticketIdx);

    pushTicketToArr(columnId, ticketArr);
  }

  const ulStyles = {
    position: 'absolute',
    top: yPos,
    left: xPos,
    zIndex: 10,
  }

  const columnsCopy = [...columns];
  const filteredColumns = columnsCopy.filter(column => column.id !== clickedTicketData.colId)

  return (
    <ul className='contextMenu' style={ulStyles}>
      {
        filteredColumns.map(column => {
          return <li key={column.id}><button onClick={() => handleClick(column.id)}>Move Card to "{column.title}" Column</button></li>
        })
      }
    </ul>
  )
}

export default ContextMenu;