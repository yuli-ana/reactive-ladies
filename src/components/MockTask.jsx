import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  padding: 0.8rem;
  border: 0.1rem solid lightgrey;
  border-radius: 0.2rem;
  margin-bottom: 0.8rem;
  background-color: ${(props) => (props.isDragging ? "lightgrey" : "white")};
`;

function MockTask(props) {
  return (
    <Draggable draggableId={props.ticket.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {props.ticket.title}
        </Container>
      )}
    </Draggable>
  );
}

export default MockTask;