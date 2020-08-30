import React from "react";
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

  const {handleDeleteTask, ticket, columnId} = props;

  return (
    <Draggable draggableId={props.ticket.id} index={props.index}>
      {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
          <CloseButton click={() => handleDeleteTask(ticket.id, columnId)}/>
          {props.ticket.title}
        </Container>
      )}
    </Draggable>
  );
}

export default MockTask;