import React from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';

const SanfonaTest = () => {
  const data = [
    {
      title: "Create Accordion Elements",
      details: "Install Sanfona library"
    },
    {
      title: "Create Context Menu",
      details: "Add event listener on right click"
    },
    {
      title: "Work on UX",
      details: "Install Sanfona library"
    }
  ]

  // const rawData = {
  //   tickets: {
  //      'ticket-1': { id: uuid(), title: 'React', details: 'write code for board component' },
  //      'ticket-2':  { id: uuid(), title: 'Mintbean', details: 'write code for board component' },
  //      'ticket-3': { id: uuid(), title: 'JavaScript', details: 'write code for board component' },
  //      'ticket-4': { id: uuid(), title: 'JavaScript', details: 'write code for board component' },
  //   },
  //   columns: {
  //       'column-1': {
  //           id: 'column-1',
  //           title: 'To Do',
  //           ticketIds: ['ticket-1', 'ticket-2', 'ticket-3', 'ticket-4']
  //       },
  //       'column-2': {
  //           id: 'column-2',
  //           title: 'In Progress',
  //           ticketIds: []
  //       },
  //       'column-3': {
  //           id: 'column-3',
  //           title: 'Done',
  //           ticketIds: []
  //       },
  //   },
  //   // Facilitate reordering of the columns
  //   columnOrder: ['column-1', 'column-2', 'column-3']
  // };

  const listItem = () => {
    const itemStyles = {
      padding: '20px 30px',
      fontSize: '1.3rem',
      backgroundColor: 'white',
      textAlign: 'center',
      border: '1px solid #777'
    }

    return data.map(item => {
      return( 
        <AccordionItem style={itemStyles} title={item.title}>
          <p style={{fontSize: '1rem', padding: '20px 0'}}>{item.details}</p>
        </AccordionItem>
      )
    })
  }

  return(
    <>
      <h2>Sanfona Test</h2>
      <Accordion>
        {
          listItem()
        }
      </Accordion>
    </>
  )

}

export default SanfonaTest;