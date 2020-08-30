import React, { useState, useEffect, useRef } from "react";

function ContextMenuTest() {
  // const [xPos, setXPos] = useState('0px');
  // const [yPos, setYPos] = useState('0px');
  // const [showMenu, setShowMenu] = useState(false);

  // const customMenu = () => {
  //   const styles = {
  //     position: 'absolute',
  //     top: yPos,
  //     left: xPos,
  //     zIndex: 10,
  //     backgroundColor: '#F9E5E6'
  //   }

  //   return (
  //     <ul style={styles}>
  //       <li><button>Move Card to "To Do" Column</button></li>
  //       <li><button>Move Card to "In Progress" Column</button></li>
  //       <li><button>Move Card to "Done" Column</button></li>
  //     </ul>
  //   )
  // }
  
  const handleClick = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  }

  const handleContextMenu = (e) => {
    e.preventDefault();
    setXPos(`${e.pageX}px`);
    setYPos(`${e.pageY}px`)
    setShowMenu(true);
  }

  useEffect(() => {
    const tickets = document.getElementsByClassName('ticket');

    document.addEventListener("click", handleClick);
    Array.from(tickets).forEach(ticket => {
      ticket.addEventListener("contextmenu", handleContextMenu);
    });

    return () => {
      document.removeEventListener("click", handleClick);
      Array.from(tickets).forEach(ticket => {
        ticket.removeEventListener("contextmenu", handleContextMenu);
      });
    };
  });


  return (
    <>
      <h2>Context Menu Test</h2>
      <div className='ticket' style={{padding: '50px 100px', textAlign: 'center', backgroundColor: '#fff', border: '1px solid #777', width: '350px', margin: '0 auto'}}>
        <h3>Create Context Menu</h3>
      </div>
      <div className='ticket' style={{padding: '50px 100px', textAlign: 'center', backgroundColor: '#fff', border: '1px solid #777', width: '350px', margin: '0 auto'}}>
        <h3>Create Context Menu</h3>
      </div>
      { showMenu ? customMenu() : null }
    </>
  );
}

export default ContextMenuTest;

