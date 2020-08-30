import React, { useEffect } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import CloseButton from './buttons/CloseButton';

const Container = styled.div`
  padding: 0.8rem;
  border: 0.1rem solid lightgrey;
  border-radius: 0.2rem;
  margin-bottom: 0.8rem;
  margin: 10;
  width: "100%";
  border: "1px solid black";
  background-color: ${(props) => (props.isDragging ? "lightgrey" : "yellow")};
`;
  
function MockTask(props) {

  // function to close ContextMenu
  const handleClick = () => {
    if (props.showMenu) {
      props.setShowMenu(false);
    }
  }

  // function setting the position and visibility of the ConTextMenu
  const handleContextMenu = (e) => {
    e.preventDefault();
    props.setXPos(`${e.pageX}px`);
    props.setYPos(`${e.pageY}px`)
    props.setShowMenu(true);
    props.setClickedTicketId(e.target.attributes[1].nodeValue);
  }
  
  useEffect(() => {
    // grab all the ticket elements
    const tickets = document.getElementsByClassName('ticket');
    
    document.addEventListener("click", handleClick);
    // turn HTMLCollection into an array
    Array.from(tickets).forEach(ticket => {
      // attach event listener to each ticket
      ticket.addEventListener("contextmenu", handleContextMenu);
    });
    
    return () => {
      document.removeEventListener("click", handleClick);
      Array.from(tickets).forEach(ticket => {
        ticket.removeEventListener("contextmenu", handleContextMenu);
      });
    };
  }, []);
  
  return (
    <Draggable draggableId={props.ticket.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
        className='ticket'
        >
          <CloseButton/>
          {props.ticket.title}
        </Container>
      )}
    </Draggable>
  );
}

export default MockTask;