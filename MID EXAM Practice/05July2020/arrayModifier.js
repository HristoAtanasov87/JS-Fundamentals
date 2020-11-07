function arrayModifier(arrayToModify) {
    let arrayToOperate = arrayToModifyExtraction(arrayToModify);
    let commands = arrayToModifyCommands(arrayToModify);

    let result = action(arrayToOperate, commands);

    return result;

    function arrayToModifyExtraction(array) {
        let initialArray = array.slice();
        initialArray = array.shift();
        initialArray = initialArray.split(" ")

        return initialArray;
    }

    function arrayToModifyCommands(array) {
        let commands = array.slice();
        commands = commands.join(" ");
        commands = commands.split(" ");

        return commands;
    }

    function action(arrayToAction, operations) {
        let index = 0;
        let command = operations[index];
        while (command != "end") {
            switch (command) {
                case "swap":
                    index++;
                    let firstIndex = operations[index];
                    index++;
                    let secondIndex = operations[index];

                    let toSwap = arrayToAction[firstIndex];
                    arrayToAction[firstIndex] = arrayToAction[secondIndex];
                    arrayToAction[secondIndex] = toSwap;

                    index++;
                    command = operations[index];
                    break;
                case "multiply":
                    index++;
                    let multiplyFirstIndex = operations[index];
                    index++;
                    let multiplySecondIndex = operations[index];

                    let multiplication = arrayToAction[multiplyFirstIndex] * arrayToAction[multiplySecondIndex];
                    arrayToAction[multiplyFirstIndex] = multiplication;

                    index++;
                    command = operations[index];
                    break;
                case "decrease":
                    for (let i = 0; i < arrayToAction.length; i++) {
                        let action = Number(arrayToAction[i]);
                        action--;
                        arrayToAction[i] = action;
                    }

                    index++;
                    command = operations[index];
                    break;
            }
        }

        return arrayToAction.join(", ");
    }


}

console.log(arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
));