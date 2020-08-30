import React, { useState,  useContext, useEffect, useReducer  } from "react";
import Column from './Column';
import dataReducer from './dataReducer';
import AddButton from './buttons/AddButton';
import { v4 as uuid } from "uuid";

const ids = [uuid(), uuid(), uuid()];

const ticketsId = [uuid(), uuid(), uuid(), uuid()];

const defaultState = {
  tickets: {
    [ticketsId[0]]: { id: ticketsId[0], title: 'React', details: 'write code for board component' },
    [ticketsId[1]]:  { id: ticketsId[1], title: 'Mintbean', details: 'write code for board component' },
    [ticketsId[2]]: { id: ticketsId[2], title: 'JavaScript', details: 'write code for board component' },
    [ticketsId[3]]: { id: ticketsId[3], title: 'JavaScript', details: 'write code for board component' },
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
          ticketIds: ["Hello"]
      },
      [ids[2]]: {
          id: ids[2],
          title: 'Done',
          ticketIds: []
      },
  },
  // Facilitate reordering of the columns
  columnOrder: [...ids],
};


// Creates context, helps to pass data down to components tree
export const DataContext = React.createContext();

// let columnId = 3;


function Board() {
    // Initial state
    // Runs when components is mounted 
    // const [initialData, setInitialState] = useState(JSON.parse(localStorage.getItem("board")) || defaultState);


    const [initialData, setInitialState] = useState(JSON.parse(localStorage.getItem("board")) || defaultState); // added


    // Takes for arguments reducer function and initial Data (state)
    const [data, dispatch] = useReducer(dataReducer, initialData);
 
    // Sets initialData to our localStorage, each time I add ticket or column our state will update 
    // and call useEffect where I pass updated data
    useEffect(()=> {

      localStorage.setItem("board", JSON.stringify(data));

    }, [data]);


  
    function handleAddTicket(){
        dispatch({type: "ADD_COLUMN", payload: uuid()});
      }


  return (
    <>
      <DataContext.Provider value={{data, dispatch}}>
      <AddButton click={handleAddTicket}/>
      <ul style={{display: "flex"}}>
        {data.columns 
        ? Object.keys(data.columns).map((column, index) => <Column column={data.columns[column]} key={`${column}${index}`} />)
        : null
      }
      </ul>
      </DataContext.Provider>
    </>
  )
}

export default Board;