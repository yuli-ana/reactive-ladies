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

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        columnOrder: newColumnOrder
      };
      setState(newState);
      return;
    }

    const home = state.columns[source.droppableId];
    const foreign = state.columns[destination.droppableId];

    if (home === foreign) {
      const newTaskIds = Array.from(home.ticketIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newHome = {
        ...home,
        taskIds: newTaskIds
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newHome.id]: newHome
        }
      };

      setState(newState);
      return;
    }

    // moving from one list to another
    const homeTaskIds = Array.from(home.ticketIds);
    homeTaskIds.splice(source.index, 1);
    const newHome = {
      ...home,
      ticketIds: homeTaskIds
    };

    const foreignTaskIds = Array.from(foreign.ticketIds);
    foreignTaskIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      ticketIds: foreignTaskIds
    };

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