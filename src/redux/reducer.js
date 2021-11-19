import calculateResult from "../calculateResult";

const defaultState = {
    userInput: "0",
    displayInput: "",
    operatorIsActive: false
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INPUT":

            if (/[.]/.test(state.userInput) && action.userInput.match(/[.]/)) { return state }
            if (state.userInput[0] === "0" && action.userInput === "0" && !/[.]/.test(state.userInput)) { return state }

            if (state.userInput.length < 21 && !state.userInput.match(/[A-Z]/)) {
                return {
                    userInput: (((state.userInput === "0" && /[1-9]/.test(action.userInput)) || state.operatorIsActive) ? action.userInput : state.userInput + action.userInput),
                    displayInput: state.displayInput + action.userInput,
                    operatorIsActive: false
                };
            } else return {
                userInput: "DIGIT LIMIT MET",
                displayInput: state.displayInput,
                operatorIsActive: false
            };

        case "OPERATION":

            if (/[-|+|*|/]/.test(state.displayInput[state.displayInput.length - 1])) {
                console.log("two operators");
                if (/[-|+|*|/]/.test(state.displayInput[state.displayInput.length - 2])) {
                    return {
                        userInput: action.userInput,
                        displayInput: state.displayInput.substring(0, state.displayInput.length - 2) + action.userInput,
                        operatorIsActive: true
                    }
                } else {
                    if (/[+|*|/]/.test(action.userInput) && !/[-|+|*|/]/.test(state.displayInput[state.displayInput.length - 2])) {
                        return {
                            userInput: action.userInput,
                            displayInput: state.displayInput.substring(0, state.displayInput.length - 1) + action.userInput,
                            operatorIsActive: true
                        }
                    } else if (/[-]/.test(action.userInput) && !/[-|+|*|/]/.test(state.displayInput[state.displayInput.length - 2])) {
                        return {
                            userInput: action.userInput,
                            displayInput: state.displayInput + action.userInput,
                            operatorIsActive: true
                        }
                    } else { return state }
                }
            }
            return {
                userInput: action.userInput,
                displayInput: (state.operatorIsActive ? state.displayInput + action.userInput : state.userInput + action.userInput),
                operatorIsActive: true
            };

        case "equals":
            if (/[=]/.test(state.displayInput)) { return state }
            let result = calculateResult(state.displayInput);
            let output = state.displayInput + "=" + result;

            return {
                userInput: (state.userInput === "0" ? "NAN" : result),
                displayInput: (state.userInput === "0" ? "NAN" : output),
                operatorIsActive: false
            }

        case "clear":
            return {
                displayInput: "",
                userInput: "0",
                operatorIsActive: false
            };
        default:
            return state;
    }

}

export default reducer;