const defaultState = {
    userInput: "",
    displayInput: ""
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INPUT":
            return state;
        case "OPERATION":
            return state;
        default:
            return state;
    }

}

export default reducer;