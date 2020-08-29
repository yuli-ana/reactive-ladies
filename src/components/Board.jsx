import React, { useState,  useContext, useEffect, useReducer  } from "react";
import Column from './Column';
import dataReducer from './dataReducer';
import AddButton from './buttons/AddButton';



const defaultState = [
  {
    title: 'To Do',
    tickets: [
      {title: 'create component',
        details: 'write code for board component.'}]
  },
  {
    title: 'In Progress',
    tickets: [
      {title: 'create component',
        details: 'write code for board component.'}]
  },
  {
    title: 'Done',
    tickets: [
      {title: 'create component',
        details: 'write code for board component.'}]
  }
]


// Creates context, helps to pass data down to components tree
export const DataContext = React.createContext();


function Board() {
    // Initial state
    // Runs when components is mounted 
    const [initialData, setInitialState] = useState(JSON.parse(localStorage.getItem("board")) || defaultState);


    // Takes for arguments reducer function and initial Data (state)
    const [columns, dispatch] = useReducer(dataReducer, initialData);
 

    // Sets initialData to our localStorage, each time I add ticket or column our state will update 
    // and call useEffect where I pass updated data
    useEffect(()=> {

      localStorage.setItem("board", JSON.stringify(columns));

    }, [columns]);


    function handleAddTicket(){
      dispatch({type: "ADD_COLUMN"});
  }


  return (
    <>
      <DataContext.Provider value={{columns, dispatch}}>
      <AddButton click={handleAddTicket}/>
      <ul style={{display: "flex"}}>
        {columns 
        ? columns.map((column, index) => <Column column={column} key={`${column.title}${index}`} />)
        : null
      }
      </ul>
      </DataContext.Provider>
    </>
  )
}

export default Board;