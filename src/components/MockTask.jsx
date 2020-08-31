import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import CloseButton from './buttons/CloseButton';
import AddDetailsButton from './buttons/AddDetailsButton';
import { v4 as uuid } from "uuid";

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

const Input = styled.input `
border: none;
padding: 0.8rem;
background: transparent;
`;

const Textarea = styled.textarea `
background: transparent;
border: none;
`;
  
function MockTask(props) {

  const [isOpen, setIsOpen] = useState(false)  
    
    const {handleDeleteTask, ticket, columnId, state, setState} = props;
// After the state is updated component will re-render and ticket.title whatever it's set to
    const [title, setTitle] = useState(ticket.title || '');
    const [details, setDetails] = useState(ticket.details || ''); 

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
    props.setClickedTicketData({ticketId: e.currentTarget.attributes[1].nodeValue, colId: e.currentTarget.parentElement.attributes[0].nodeValue});
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


  // TO DO //
  const openTicketDetails = (e) => {
    if (e.target.classList[2] === 'ticket') {
      !isOpen
      ? setIsOpen(true)
      : setIsOpen(false);
    }
  }

  

  

  function handleTaskTitle(e){
    setTitle(e.target.value); 
  }

  function handleTaskDetails(e){
    setDetails(e.target.value);  
  }

  function handleAddTaskDescription(e){
    e.preventDefault();

    const dataWithUpdatedTasks = {
      ...state,

      tickets: {
        ...state.tickets, 
        [ticket.id]: {
          ...state.tickets[ticket.id],

          title: title, 
          details: details, 
        },
      },
    };

    setState(dataWithUpdatedTasks);
  }
  
  return (
    <Draggable draggableId={props.ticket.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
        className='ticket'
        onClick={(e) => openTicketDetails(e)}
        >
          <CloseButton click={() => handleDeleteTask(ticket.id, columnId.id)}/>
          <form onSubmit={handleAddTaskDescription}>
            <label htmlFor="task">
              <Input type="text" value={title} name="task" placeholder="Title" onChange={handleTaskTitle} />
            </label>
            <AddDetailsButton />
            <div className={!isOpen ? "ticketDetailsStyles" : "openTicketDetailsStyles"}>
              <label>
                  <Textarea value={details} onChange={handleTaskDetails} />
              </label>
            </div>
          </form>
        </Container>
      )}
    </Draggable>
  );
}

export default MockTask;