function solve(input) {
    let fieldSize = input[0];
    let ladyBugsPositions = input[1];
    let ladyBugsPositionsArray = ladyBugsPositions.split(" ");

    let ladyBugField = [];

    for (let i = 0; i < fieldSize; i++) {
        ladyBugField.push(0);
    }

    for (let i = 0; i < ladyBugsPositionsArray.length; i++) {
        let check = Number(ladyBugsPositionsArray[i]);
        if (check > fieldSize - 1) {
            continue;
        } else if (check < 0) {
            continue;
        }
        ladyBugField[check] = 1;
    }

    let command = "";
    let fieldToModify = ladyBugField.slice();

    for (let j = 2; j < input.length; j++) {
        command = input[j];

        let commandAsArray = command.split(" ");

        let ladyBugIndex = Number(commandAsArray[0]);

        if (fieldToModify[ladyBugIndex] != 1) {
            continue;
        }

        let ladyBugDirectionOfMovement = commandAsArray[1];
        let ladyBugFlyLength = Number(commandAsArray[2]);

        if (ladyBugFlyLength === 0) {
            continue;
        }

        if (ladyBugDirectionOfMovement === "right" && ladyBugFlyLength > 0) {
            ladyBugDirectionOfMovement = "right";
        } else if (ladyBugDirectionOfMovement === "right" && ladyBugFlyLength < 0) {
            ladyBugDirectionOfMovement = "left";
            ladyBugFlyLength = Math.abs(ladyBugFlyLength);
        } else if (ladyBugDirectionOfMovement === "left" && ladyBugFlyLength > 0) {
            ladyBugDirectionOfMovement = "left";
        } else if (ladyBugDirectionOfMovement === "left" && ladyBugFlyLength < 0) {
            ladyBugDirectionOfMovement = "right";
            ladyBugFlyLength = Math.abs(ladyBugFlyLength);
        }


        let nextPsn = 0;

        switch (ladyBugDirectionOfMovement) {
            case "right":
                nextPsn = ladyBugFlyLength + ladyBugIndex;
                if (fieldToModify[nextPsn] === 0) {
                    fieldToModify[nextPsn] = 1;
                    fieldToModify[ladyBugIndex] = 0;
                } else if (nextPsn + ladyBugFlyLength < fieldSize) {

                    for (let k = nextPsn + ladyBugFlyLength; k <= fieldSize; k += ladyBugFlyLength) {
                        if (fieldToModify[k] === 1) {
                            continue;
                        } else if (k >= fieldToModify.length) {
                            fieldToModify[ladyBugIndex] = 0
                            continue;
                        } else {
                            fieldToModify[k] = 1;
                            fieldToModify[ladyBugIndex] = 0;
                            break;
                        }
                    }
                } else {
                    fieldToModify[ladyBugIndex] = 0;
                    break;
                }
                break;
            case "left":
                nextPsn = ladyBugIndex - ladyBugFlyLength;
                if (fieldToModify[nextPsn] === 0) {
                    fieldToModify[nextPsn] = 1;
                    fieldToModify[ladyBugIndex] = 0;
                } else if (nextPsn - ladyBugFlyLength >= 0) {
                    for (let k = nextPsn - ladyBugFlyLength; k >= 0; k -= ladyBugFlyLength) {

                        if ((fieldToModify[k] === 1) || (k < 0)) {
                            fieldToModify[ladyBugIndex] = 0;
                            continue;
                        } else {
                            fieldToModify[k] = 1;
                            fieldToModify[ladyBugIndex] = 0;
                            break;
                        }
                    }
                } else {
                    fieldToModify[ladyBugIndex] = 0;
                    break;
                }
                break;
        }
    }

    console.log(fieldToModify.join(" "));
}

solve([3, '0 1 2',
    '2 right 0',]
    // '1 right -1',
    // '0 right -1']

);