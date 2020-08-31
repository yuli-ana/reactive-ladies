import React, { Component, useState } from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import MockTask from "./MockTask";
import AddDetailsButton from './buttons/AddDetailsButton';
import CloseButton from './buttons/CloseButton';
import AddButton from './buttons/AddButton';

const Container = styled.div`
  margin: 0.8rem;
  border: 0.1rem solid lightgrey;
  border-radius: 0.2rem;
  width: 22rem;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input `
border: none;
padding: 0.8rem;
background: transparent;
`;

// Change color when dragging here
const TaskList = styled.div`
  padding: 0.8rem;
  transition: background-color 0.2s ease;
  flex-grow: 1;
  background-color: ${(props) => (props.isDraggingOver ? "#E6FBF6" : "white")};
  min-height: 10rem;
`;

function MockColumn(props) {

  const { tickets, handleDeleteColumn } = props; // added


  // This is the global state
  const {state, column, setState} = props;

  const [title, setTitle] = useState('');
  
  class InnerList extends Component {
    shouldComponentUpdate(nextProps) {
      if (nextProps.tickets === this.props.tickets) {
        return false;
      }
      return true;
    }

    render() {
      const { handleDeleteTask, column } = props;

      return tickets.map((ticket, index) => (
          <MockTask 
            key={ticket.id} 
            ticket={ticket} 
            index={index} 
            setXPos={props.setXPos}
            setYPos={props.setYPos}
            setShowMenu={props.setShowMenu}
            showMenu={props.showMenu}
            setClickedTicketData={props.setClickedTicketData}
            handleDeleteTask={handleDeleteTask} 
            columnId={column} 
            state={state}
            setState={setState}
          />
      ));
    }
  }


  function handleChangeColumnTitle(e){
    setTitle(e.target.value);  
  }

  function handleAddColumnTitle(e){
    e.preventDefault();

    const dataWithUpdatedTitles = {
      ...state,

      columns: {
        ...state.columns,
      
      [column.id]: {
        ...state.columns[column.id],
        title: title,
        }
      }
    }

    setState(dataWithUpdatedTitles);
  }

  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <form action="" onSubmit={handleAddColumnTitle}>
            <label htmlFor="title">
              <Input type="text" value={title} name="title" placeholder={props.column.title} onChange={handleChangeColumnTitle} />
              <AddDetailsButton />
            </label>
          </form>
          <CloseButton click={() => handleDeleteColumn(column.id)} column={column} tickets={tickets} />
          <AddButton click={props.handleAddTask} style={{margin: 0}}/>
          <Droppable droppableId={props.column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <InnerList tickets={props.tickets} handleDeleteTask={props.handleDeleteTask} columnId={props.column.id} />
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}

export default MockColumn;