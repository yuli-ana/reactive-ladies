import React, { PureComponent, useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import '@atlaskit/css-reset';
import MockColumn from './MockColumn';
import styled from 'styled-components';
import AddButton from './buttons/AddButton';
import ContextMenu from './ContextMenu';
import ReactTooltip from 'react-tooltip';

const StyledAddCol = styled.button`
  flex: 0 0 240px;
  background: #fff;
  margin-top: 133px;
  margin-bottom: 10px;
  display: block;
  border: none;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08), 0 1px 3px 1px rgba(66, 66, 66, 0.16);
  span {
    display: block;
  }
`;


const ids = [uuid(), uuid(), uuid()];

const ticketsId = [uuid(), uuid(), uuid(), uuid()];

const defaultState = {
  tickets: {
    [ticketsId[0]]: { id: ticketsId[0], title: 'Hackathon', details: 'Happy hacking!' },
    [ticketsId[1]]:  { id: ticketsId[1], title: 'Snackathon', details: 'Snacks are important!' },
    [ticketsId[2]]: { id: ticketsId[2], title: 'Mintbean', details: 'Hello fellow hackers!' },
    [ticketsId[3]]: { id: ticketsId[3], title: 'React', details: 'Hire us!' },
  },
  columns: {
    [ids[0]]: {
        id: ids[0],
        title: 'To Do',
        ticketIds: [...ticketsId]
    },
    [ids[1]]: {
        id: ids[1],
        title: 'In Progress',
        ticketIds: []
    },
    [ids[2]]: {
        id: ids[2],
        title: 'Done',
        ticketIds: []
    },
  },
  columnOrder: [...ids],
  };

  
const Container = styled.div`
  display: flex;
`;

function RealDragDrop() {

  ////////// STATES FOR CONTEXT MENU //////////
  const [xPos, setXPos] = useState('0px');
  const [yPos, setYPos] = useState('0px');
  const [showMenu, setShowMenu] = useState(false);
  const [clickedTicketData, setClickedTicketData] = useState({});

  // GLOBAL STATE
  const [state, setState] = useState(JSON.parse(localStorage.getItem('globalState')) || defaultState);


  // Saving global state aka state (defaultState) to our localStorage, each time the state is being updated call useEffect to save the updated state to the local storage
  useEffect(()=> {

    localStorage.setItem('globalState', JSON.stringify(state));

  }, [state]);



  class InnerList extends PureComponent {
    render() {
      const { column, ticketMap, index } = this.props;
      const tickets = column.ticketIds.map(ticketId => ticketMap[ticketId]);
            
      return <MockColumn
        column={column}
        tickets={tickets}
        index={index} 
        handleAddTask={() => handleAddTask(column.id)}
        handleDeleteColumn={handleDeleteColumn}
        setXPos={setXPos}
        setYPos={setYPos}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        setClickedTicketData={setClickedTicketData}
        handleDeleteTask={handleDeleteTask}
        state={state}
        setState={setState}
        />;
    }
  }

  function handleDeleteColumn(idArgument){
    const { [idArgument]: value, ...rest } = state.columns;

    const columnsAfterDelete = {
        ...state,
        columnOrder: state.columnOrder.filter(item => item !== idArgument),
        columns: {...rest}
    }
  
    setState(columnsAfterDelete)
  }


  function handleAddTask(idArgument){
    const randomTicketId = uuid();
    const addedTasks = {
        ...state,

        tickets: {
            ...state.tickets, 
            [randomTicketId]: {
                id: randomTicketId, 
                title: '', 
                details: '', 
            },
        },
        columns: {
            ...state.columns,
            [idArgument]: {
                ...state.columns[idArgument],
                ticketIds: [...state.columns[idArgument].ticketIds, randomTicketId]
            }
        }
    }

    setState(addedTasks)
  }

  function handleDeleteTask(ticketId, columnId) {
    const deletedTasks = {
      ...state,

      columns: {
        ...state.columns,
        [columnId]: {
          ...state.columns[columnId],

          ticketIds: state.columns[columnId].ticketIds.filter(item => item !== ticketId)

        }
      }
    } 

    setState(deletedTasks);
  }

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

  function handleAddColumn(){
    const randomId = uuid();
    const addedColumns = {
      ...state,
      columnOrder: [...state.columnOrder, randomId],
      columns: {...state.columns,
      [randomId]: {id: randomId, title: '', ticketIds: []} }
  }
  
    setState(addedColumns)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board-horizontal-scroll">
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
              <StyledAddCol onClick={handleAddColumn} data-tip data-for='addColumn'><span>Add Column</span></StyledAddCol>
              <ReactTooltip id='addColumn'>
                <span>Add a column by clicking here</span>
              </ReactTooltip>
            </Container>
          )}
        </Droppable>
      </div>
      { 
        showMenu 
        ? <ContextMenu 
            xPos={xPos} 
            yPos={yPos} 
            data={state} 
            clickedTicketData={clickedTicketData}
          /> 
        : null 
      }
    </DragDropContext>
  );
}


export default RealDragDrop;