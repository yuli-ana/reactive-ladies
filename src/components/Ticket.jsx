import React from 'react';

function Ticket(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.details}</p>
    </>
  )
}

export default Ticket;