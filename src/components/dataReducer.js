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
          
        default:
            return state;
    }

}

export default    dataReducer;