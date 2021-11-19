import performOperations from "../performOperation";

const defaultState = {
    userInput: "0",
    displayInput: "",
    operatorInactive: true
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INPUT":
        if(state.userInput.includes(".") && action.userInput === ".") {return state}
            return {
                userInput: (state.userInput === "0" || !state.operatorInactive ? action.userInput : state.userInput + action.userInput),
                displayInput: state.displayInput + action.userInput,
                operatorInactive: true
            };

        case "OPERATION":
                return {
                    userInput: action.userInput,
                    displayInput: (state.userInput + action.userInput),
                    operatorInactive: false
                };
        case "equals":
            let result = performOperations(state.displayInput);
            let output = state.displayInput + "=" + result;

            return {
                operatorInactive: false,
                displayInput: (state.userInput === "0" ? "NAN" : output),
                userInput: (state.userInput === "0" ? "NAN" : result),
            }
            
        case "clear":
            return {
                displayInput: "",
                userInput: "0",
                operatorInactive: true
            };
        default:
            return state;
    }

}

export default reducer;