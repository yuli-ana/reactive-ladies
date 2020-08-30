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


  const styles = {
    position: 'absolute',
    top: yPos,
    left: xPos,
    zIndex: 10,
    backgroundColor: '#F9E5E6'
  }

  return (
    <ul style={styles}>
      <li><button>Move Card to "To Do" Column</button></li>
      <li><button>Move Card to "In Progress" Column</button></li>
      <li><button>Move Card to "Done" Column</button></li>
    </ul>
  )
}

export default ContextMenu;