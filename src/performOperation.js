function performOperations(displayInput) {
    let tempValue = displayInput[0];
    let tempArray = [];
    let tempFinalValue;
// loop that organizes the displayInput into an array with alternating numbers(inclduing decimals) and operators
    for (let i = 1; i < displayInput.length; i++) {
        if (/[.0-9]/.test(displayInput[i])) {

            tempValue += displayInput[i];

        } else {

            tempArray.push(parseFloat(tempValue));
            tempArray.push(displayInput[i])
            tempValue = displayInput[i + 1]
            i++;

        }
    }
    // the tempArray has the organized split displayInput
    tempArray.push(parseFloat(tempValue));


    let j = 1;
    let m = 1;
// loop that goes through the split tempArray and does multiplication or division depending on the operator
    while (tempArray.indexOf('*') !== -1 || tempArray.indexOf('/') !== -1) {
        if (tempArray[j] === "*") {

            tempFinalValue = tempArray[j - 1] * tempArray[j + 1];
            tempArray.splice(j - 1, 3, tempFinalValue);

        } else if (tempArray[j] === "/") {

            tempFinalValue = tempArray[j - 1] / tempArray[j + 1];
            tempArray.splice(j - 1, 3, tempFinalValue);

        }
        j += 2;
        m++;
        if (m === 20) { console.log("failed *,/ loop and teh count of m is " + m); return; }
    }

    j = 1;
    m = 0;

    // loop that goes through the split tempArray and does addition or substraction depending on the operator
    while (tempArray.length > 1 && m < 20) {
        if (tempArray[j] === "+") {

            tempFinalValue = tempArray[j - 1] + tempArray[j + 1];
            tempArray.splice(j - 1, 3, tempFinalValue);

        } else if (tempArray[j] === "-") {

            tempFinalValue = tempArray[j - 1] - tempArray[j + 1];
            tempArray.splice(j - 1, 3, tempFinalValue);

        }

        m++;
    }

    tempArray[0] = tempArray[0].toFixed(8);
    tempArray[0] = parseFloat(tempArray[0]);
    tempArray[0] = tempArray[0].toString();

// returns the calculated result
    return tempArray[0];

}

export default performOperations;