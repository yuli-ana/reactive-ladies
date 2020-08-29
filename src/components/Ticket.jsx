import React from 'react';
import CloseButton from './buttons/CloseButton';


const styleTicket ={
  margin: 10,
  background: "yellow",
  width: "100%",
  border: "1px solid black"
}


function Ticket({ticket}){

 const {title, details} = ticket;

  return (
    <li style={styleTicket}>
      <div>
        <CloseButton/>
      </div>
      {/* <div>
      <h3>{title}</h3>
      <p>{details}</p>
      </div> */}
    </li>
  )
}

export default Ticket;