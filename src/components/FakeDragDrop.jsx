// Fake Component to try drag and drop

import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";


const defaultState = {
  [uuid()]: {
    title: 'To Do',
    tickets: [
        { id: uuid(), title: 'React', details: 'write code for board component' },
        { id: uuid(), title: 'Mintbean', details: 'write code for board component' },
        { id: uuid(), title: 'JavaScript', details: 'write code for board component' },
        { id: uuid(), title: 'Material UI', details: 'write code for board component' },
        { id: uuid(), title: 'DragNDrop', details: 'write code for board component' }
    ]
  },
  [uuid()]: {
    title: 'In Progress',
    tickets: []
  },
  [uuid()]: {
    title: 'Done',
    tickets: []
  }
};



// It would be ideal if our default state can have this structure to enable dragging both columns and tickets
///////////////////////////////////////////////////////////////////////////////////////////////////////
const rawData = {
    tickets: {
       'ticket-1': { id: uuid(), title: 'React', details: 'write code for board component' },
       'ticket-2':  { id: uuid(), title: 'Mintbean', details: 'write code for board component' },
       'ticket-3': { id: uuid(), title: 'JavaScript', details: 'write code for board component' },
       'ticket-4': { id: uuid(), title: 'JavaScript', details: 'write code for board component' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            ticketIds: ['ticket-1', 'ticket-2', 'ticket-3', 'ticket-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            ticketIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            ticketIds: []
        },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3']
  };
  



const onDragEnd = (result, columns, setColumns, type) => {
  if (!result.destination) return;

  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.tickets];
    const destItems = [...destColumn.tickets];

    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        tickets: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        tickets: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.tickets];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        tickets: copiedItems
      }
    });
  }
};

function FakeDragDrop() {
  const [columns, setColumns] = useState(defaultState);

return (
    <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
    >
        <Droppable droppableId='all-columns' direction='horizontal' type='column'>
            {(provided, snapshot) => {
                return (
    <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        style={{ display: "flex", justifyContent: "center", height: "100%", backgroundColor: "white" }}
    >
        {Object.entries(columns).map(([columnId, column], index) => {
            console.log(columnId, column)
          return (
            <Draggable
            // key={item.id}
            draggableId={columnId}
            index={index}
          >
              {(provided) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                    }}
                    key={columnId}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
              <h2>{column.title}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId} type='task'>
                  {(provided, snapshot) => {
                      return (
                          <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                              background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                              padding: 4,
                              width: 250,
                              minHeight: 500
                            }}
                            >
                        {column.tickets.map((item, index) => {
                            return (
                                <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                                >
                              {(provided, snapshot) => {
                                  return (
                                      <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",
                                          backgroundColor: snapshot.isDragging
                                          ? "#273752"
                                          : "#456C86",
                                          color: "white",
                                          ...provided.draggableProps.style
                                        }}
                                        >
                                    {item.title}
                                    {/* <button>Delete</button> */}
                                  </div>
                                );
                            }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                }}
                </Droppable>
              </div>
            </div>
                )}
            </Draggable>
          );
        })}
            {provided.placeholder}
        </div>
        )
        }}
    </Droppable>
    </DragDropContext>
  );
}

export default FakeDragDrop;
