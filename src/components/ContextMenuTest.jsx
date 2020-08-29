import React, { useState, useEffect, useRef } from "react";

function ContextMenuTest() {
  const [xPos, setXPos] = useState('0px');
  const [yPos, setYPos] = useState('0px');
  const [showMenu, setShowMenu] = useState(false);

  const ticket = useRef(null);

  const customMenu = () => {
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
  
  const handleClick = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  }

  const handleContextMenu = (e) => {
    e.preventDefault();
    setXPos(`${e.clientX}px`);
    setYPos(`${e.clientY}px`)
    setShowMenu(true);
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    ticket.current.addEventListener("contextmenu", handleContextMenu);

    return () => {
    document.removeEventListener("click", handleClick);
    ticket.current.removeEventListener("contextmenu", handleContextMenu);
    };
  });


  return (
    <>
      <div ref={ticket} className='ticket' style={{padding: '50px 100px', textAlign: 'center', backgroundColor: '#fff', border: '1px solid #777', width: '350px', margin: '0 auto'}}>
        <h3>Create Context Menu</h3>
      </div>
      { showMenu ? customMenu() : null }
    </>
  );
}

export default ContextMenuTest;

