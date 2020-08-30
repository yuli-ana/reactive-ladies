import React, { PureComponent, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import "@atlaskit/css-reset";
import MockColumn from "./MockColumn";
import styled from "styled-components";

const defaultState = {
  tickets: {
    "ticket-1": {
      id: "ticket-1",
      title: "React",
      details: "write code for board component"
    },
    "ticket-2": {
      id: "ticket-2",
      title: "Mintbean",
      details: "write code for board component"
    },
    "ticket-3": {
      id: "ticket-3",
      title: "JavaScript",
      details: "write code for board component"
    },
    "ticket-4": {
      id: "ticket-4",
      title: "DragNDrop",
      details: "write code for board component"
    }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      ticketIds: ["ticket-1", "ticket-2", "ticket-3", "ticket-4"]
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      ticketIds: []
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      ticketIds: []
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"]
};

  
const Container = styled.div`
  display: flex;
`;

class InnerList extends PureComponent {
  render() {
    const { column, ticketMap, index } = this.props;
    const tickets = column.ticketIds.map((ticketId) => ticketMap[ticketId]);
    return <MockColumn column={column} tickets={tickets} index={index} />;
  }
}



function RealDragDrop() {
  const [state, setState] = useState(defaultState);

  // a function called on onDragEnd event (react-beautiful-dnd library)
  const onDragEnd = (result) => {
    // result is an in-built library object, we are destructuring its in-built properties
    const { destination, source, draggableId, type } = result;

    // if the user drags items outside of the designated area (droppables), exit the function 
    if (!destination) return;

    // if the source is the same as destination, exit the function 
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // handling dragging of columns
    if (type === "column") {
      // creating a copy of column order array
      const newColumnOrder = Array.from(state.columnOrder);
      // reordering columns within the column order array
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      // updating the state with the new column order array
      const newState = {
        ...state,
        columnOrder: newColumnOrder
      };
      setState(newState);
      return;
    }

    // the column from where we are dragging the ticket
    const home = state.columns[source.droppableId];

     // the destination column where we are dragging the ticket
    const foreign = state.columns[destination.droppableId];


    // if the tickets are dragged within the same column
    if (home === foreign) {
      const newTaskIds = Array.from(home.ticketIds);
      // reordering tickets within the same column
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

    
      // creating a new column with the reordered tickets 
      const newHome = {
        ...home,
        ticketIds: newTaskIds
      };

       // creating new global state with updated column where the tickets were reordered
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newHome.id]: newHome
        }
      };
      
      // updating state with new data (column with reordered tickets)
      setState(newState);
      return;
    }

    // moving from one list to another
    // creating a copy of the array of tickets in the home column  
    const homeTaskIds = Array.from(home.ticketIds);
    homeTaskIds.splice(source.index, 1);
    // updating the home column with new tickets  
    const newHome = {
      ...home,
      ticketIds: homeTaskIds
    };

    // creating a copy of the array of tickets in the destination column  
    const foreignTaskIds = Array.from(foreign.ticketIds);
    foreignTaskIds.splice(destination.index, 0, draggableId);
      // updating the destination column with new tickets  
    const newForeign = {
      ...foreign,
      ticketIds: foreignTaskIds
    };

    // creating new global state with updated home and destination columns where there was a transfer of tickets
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign
      }
    };
    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {state.columnOrder.map((columnId, index) => {
              const column = state.columns[columnId];
              return (
                <InnerList
                  key={column.id}
                  column={column}
                  ticketMap={state.tickets}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default RealDragDrop;