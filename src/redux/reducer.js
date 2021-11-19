import calculateResult from "../calculateResult";

const defaultState = {
    userInput: "0",
    displayInput: "",
    operatorInactive: true
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INPUT":
            if (state.userInput.includes(".") && action.userInput === ".") { return state }
            if (state.userInput.length < 21 && !state.userInput.match(/[A-Z]/)) {
                return {
                    userInput: (state.userInput === "0" || !state.operatorInactive ? action.userInput : state.userInput + action.userInput),
                    displayInput: state.displayInput + action.userInput,
                    operatorInactive: true
                };
            } else return {
                userInput: "DIGIT LIMIT MET",
                displayInput: state.displayInput,
                operatorInactive: true
            };

        case "OPERATION":
            return {
                userInput: action.userInput,
                displayInput: (state.userInput + action.userInput),
                operatorInactive: false
            };
        case "equals":
            let result = calculateResult(state.displayInput);
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