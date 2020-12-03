function cupid(input) {
    let workInput = input.slice();

    let neighbourhood = workInput.
        shift()
        .split("@")
        .map(Number);

    let resultOfCupidMovements = cupidMovements(workInput, neighbourhood);

    return finalPrintOut(resultOfCupidMovements);

    function cupidMovements(commandsArray, workAreaArray) {
        let index = 0;
        let command = commandsArray[index];
        let currentPosition = 0;
        let workPosition = 0;

        while (command != "Love!") {
            command = command.split(" ");

            let [jump, jumpLength] = command;
            jumpLength = Number(jumpLength);

            workPosition = currentPosition + jumpLength;

            if (workPosition >= workAreaArray.length) {
                workPosition = 0;

                if (workAreaArray[workPosition] > 0) {
                    workAreaArray[workPosition] -= 2;

                    if (workAreaArray[workPosition] == 0) {
                        console.log(`Place ${workPosition} has Valentine's day.`);
                    }

                    currentPosition = workPosition;

                    index++;
                    command = commandsArray[index];
                    continue;

                } else if (workAreaArray[workPosition] == 0) {
                    console.log(`Place ${workPosition} already had Valentine's day.`);
                    currentPosition = workPosition;

                    index++;
                    command = commandsArray[index];
                    continue;
                }
            }

            if (workAreaArray[workPosition] > 0) {

                workAreaArray[workPosition] -= 2;

                if (workAreaArray[workPosition] == 0) {
                    console.log(`Place ${workPosition} has Valentine's day.`);
                }
                currentPosition = workPosition;

            } else if (workAreaArray[workPosition] == 0) {
                console.log(`Place ${workPosition} already had Valentine's day.`);
                currentPosition = workPosition;
            }

            index++;
            command = commandsArray[index];
        }

        return [workAreaArray, workPosition];
    }

    function finalPrintOut(array) {
        let [isSuccessfulOrNot, lastPositionIndex] = array;

        console.log(`Cupid's last position was ${lastPositionIndex}.`);

        let count = 0
        for (i of isSuccessfulOrNot) {

            if (i > 0) {
                count++;
            }
        }

        if (count != 0) {
            console.log(`Cupid has failed ${count} places.`);
        } else {
            console.log(`Mission was successful.`);
        }

    }

}

cupid(
    ['2@4@2',
        'Jump 2',
        'Jump 2',
        'Jump 8',
        'Jump 3',
        'Jump 1',
        'Love!'
    ]

);