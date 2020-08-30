import React, { useState, useEffect } from 'react';

const ContextMenu = ({xPos, yPos, data}) => {

  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const newColumns = [];
  
    for (let key in data.columns) {
      newColumns.push(data.columns[key]);
    };
  
    setColumns(newColumns);

  }, [])
  
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
          return <li key={column.id}><button>Move Card to "{column.title}" Column</button></li>
        })
      }
    </ul>
  )
}

export default ContextMenu;