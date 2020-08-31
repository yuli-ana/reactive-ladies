import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import CloseButton from './buttons/CloseButton';
import AddDetailsButton from './buttons/AddDetailsButton';
import { v4 as uuid } from "uuid";

const Container = styled.div`
  padding: 0.8rem;
  border-radius: 0.2rem;
  margin-bottom: 0.8rem;
  width: 100%;
  box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08), 0 1px 3px 1px rgba(66, 66, 66, 0.16);
  transition: all 300ms ease-in;
  background-color: ${(props) => (props.isDragging ? "#fafafa" : "white")};
  opacity: ${(props) => (props.isDragging ? "0.7" : "1")};

`;

const Input = styled.input `
  padding: 5px;  
  border: none;
  
  background: transparent;
  transition: all 0.2s ease-in;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    color: black;
    background: transparent;
  }
`;

const Textarea = styled.textarea `
  padding: 5px;
  background: transparent;
  border: none;
  resize: none;
  display: block;
  width: 100%;
  transition: all 0.2s ease-in;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    color: black;
    background: transparent;
  }
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
  const openTicketDetails = () => {
    !isOpen
    ? setIsOpen(true)
    : setIsOpen(false);
  }

  const openTicketDetailsStyles = {
    display: 'block',
    maxHeight: 'auto',
    overflow: 'initial',
  }

  const ticketDetailsStyles = {
    display: 'none',
    maxHeight: 0,
    overflow: 'hidden',
    transition: 'maxHeight 0.4s'
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
        className="task"
        onClick={openTicketDetails}
        >
          <form onSubmit={handleAddTaskDescription}>
            <div className="task-header">
              <div className="task-title">
              <label htmlFor="task">
                <Input autoFocus={title.length === 0 ? true : false} type="text" autoComplete="off" value={title} name="task" placeholder="Enter title" onChange={handleTaskTitle} />
              </label>
              </div>
              <div className="task-action">
                <AddDetailsButton />
                <CloseButton click={() => handleDeleteTask(ticket.id, columnId.id)}/>
              </div>
            </div>
            <label>
                <Textarea placeholder="Enter description" value={details} onChange={handleTaskDetails} />
             </label>
          </form>
        </Container>
      )}
    </Draggable>
  );
}

export default MockTask;