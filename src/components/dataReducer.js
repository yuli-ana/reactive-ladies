function dataReducer(state, action){
    switch(action.type) {
        case "ADD_COLUMN":
            return [...state, {title: "Hello", tickets: []}];
            default:
                 return state;
    }

}

export default dataReducer;