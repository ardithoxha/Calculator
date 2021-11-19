let userInput = "0";
let displayInput = "0";
let operatorInactive = true;
let result = "0";

function handleOperation(operator) {
    if (displayInput.length < 23) {
        if (result != "0") {

            operatorInactive = false;
            userInput = operator;
            document.getElementById("display").innerHTML = userInput;
            displayInput = result + operator;
            document.getElementById("output").innerHTML = displayInput;

        } else if (/[-]/.test(displayInput[displayInput.length - 1]) && /[*|/|-|+]/.test(displayInput[displayInput.length - 2]) && operator != "-") {
            userInput = operator;
            displayInput = displayInput.slice(0, -2);
            document.getElementById("display").innerHTML = userInput;
            displayInput += userInput;
            document.getElementById("output").innerHTML = displayInput;

        } else if (/[*|/|+|-]/.test(displayInput[displayInput.length - 1]) && operator == "-" && /[0-9]/.test(displayInput[displayInput.length - 2])) {

            userInput = operator;
            document.getElementById("display").innerHTML = userInput;
            displayInput += userInput;
            document.getElementById("output").innerHTML = displayInput;

        } else if (userInput != operator) {

            if (displayInput === "0") {

                userInput = operator;
                document.getElementById("display").innerHTML = userInput;
                operatorInactive = false;
                displayInput = operator;
                document.getElementById("output").innerHTML = displayInput;

            } else {
                if (userInput != operator && !/[0-9]/.test(userInput)) {

                    displayInput = displayInput.slice(0, -1);
                    operatorInactive = false;
                    userInput = operator;
                    document.getElementById("display").innerHTML = userInput;
                    displayInput += userInput;
                    document.getElementById("output").innerHTML = displayInput;

                } else {

                    operatorInactive = false;
                    userInput = operator;
                    document.getElementById("display").innerHTML = userInput;
                    displayInput += userInput;
                    document.getElementById("output").innerHTML = displayInput;

                }
            }
        }
    } else {
        document.getElementById("display").innerHTML = "DIGIT LIMIT MET";
        setTimeout(() => { document.getElementById("display").innerHTML = displayInput }, 1000);
    }
}

export default handleOperation;