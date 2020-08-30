import React, { Component } from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import MockTask from "./MockTask";
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

const Title = styled.h3`
  padding: 0.8rem;
`;


// Change color when dragging here
const TaskList = styled.div`
  padding: 0.8rem;
  transition: background-color 0.2s ease;
  flex-grow: 1;
  background-color: ${(props) => (props.isDraggingOver ? "#E6FBF6" : "white")};
  min-height: 10rem;
`;

class InnerList extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tickets === this.props.tickets) {
      return false;
    }
    return true;
  }
  render() {
    return this.props.tickets.map((ticket, index) => (
      <MockTask key={ticket.id} ticket={ticket} index={index} />
    ));
  }
}

function MockColumn(props) {


  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>{props.column.title}</Title>
          <CloseButton click={props.handleDeleteColumn}/>
          <AddButton click={props.handleAddTask} style={{margin: 0}}/>
          <Droppable droppableId={props.column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <InnerList tickets={props.tickets} />
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