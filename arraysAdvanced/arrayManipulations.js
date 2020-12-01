function arrayManipulations(inputArray) {
    let arrayToManipulate = inputArray
        .shift()
        .split(" ")
        .map(Number);

    // •	Then we loop through the commands array and obtain each element from the command and cast both numbers. This event is called destructuring:
    for (let i = 0; i < inputArray.length; i++) {
        let [command, firstNum, secondNum] = inputArray[i].split(" ");

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add":
                arrayToManipulate.push(firstNum);
                break;
            case "Remove":
                arrayToManipulate = arrayToManipulate.filter(element => element !== firstNum);
                break;
            case "RemoveAt":
                arrayToManipulate.splice(firstNum, 1);
                break;
            case "Insert":
                arrayToManipulate.splice(secondNum, 0, firstNum);
                break;
        }
    }

    return arrayToManipulate.join(" ");
}

console.log(arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']));