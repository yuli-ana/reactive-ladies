function dataReducer(state, action){

    switch(action.type) {
        case "ADD_COLUMN":
            // Add column to columnOrder and to columns
            return {...state, columnOrder: [...state.columnOrder, action.payload ], columns:{...state.columns, [action.payload] :{
                id: action.payload,
                title: '',
                ticketIds: []
            } 
          }
        };
        case "DELETE_COLUMN":
            const { [action.payload]: value, ...rest } = state.columns;
            return {...state, columnOrder: state.columnOrder.filter(item => item !== action.payload), columns: {...rest}
        };

        case "ADD_TASK": 
        return { 
            ...state,

            tickets: {
                ...state.tickets, 

                [action.payload.taskId]: {
                    id: action.payload, 
                    title: '', 
                    details: '', 
                },
            },

            columns: {
                ...state.columns,

                [action.payload.columnId]: {
                    ...state.columns[action.payload.columnId],
                    
                    ticketIds: [...state.columns[action.payload.columnId].ticketIds, action.payload.taskId]
                }
            }
        };
        // case "UPDATE_COLUMN_ORDER": 
        // return {
        //     ...state,
        //     columnOrder: action.payload
        // };
          
        default:
            return state;
    }

}

export default    dataReducer;









// "ADD_COLUMN"
// const addedColumns = {
//     ...state,
//     columnOrder: [...state.columnOrder, action.payload],
//     columns: {...state.columns,
//     [uuid()]: {id: action.payload, title: '', ticketIds: []} }
// }

// setState(addedColumns)



// "DELETE_COLUMN"
// const { [column.id]: value, ...rest } = state.columns;
// const columnsAfterDelete = {
//     ...state,
//     columnOrder: state.columnOrder.filter(item => item !== column.id),
//     columns: {...rest}
// }

// setState(columnsAfterDelete)




// "ADD_TASK"
// const randomTicketId = uuid();
// const addedTasks = {
//     ...state,

//     tickets: {
//         ...state.tickets, 
//         [randomTicketId]: {
//             id: randomTicketId, 
//             title: '', 
//             details: '', 
//         },
//     },
//     columns: {
//         ...state.columns,
//         [column.id]: {
//             ...state.columns[column.id],
//             ticketIds: [...state.columns[column.id].ticketIds, randomTicketId]
//         }
//     }
// }

// setState(addedTasks)