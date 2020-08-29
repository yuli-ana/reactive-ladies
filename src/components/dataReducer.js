function dataReducer(state, action){
    console.log(state);
    switch(action.type) {
        case "ADD_COLUMN":
            return [...state, {title: "Hello", tickets: []}];
        case "CLOSE_COLUMN":
            return [...state.filter(item => item.title !== action.payload )];
            default:
                 return state;
    }

}

export default dataReducer;