function cs(input) {
    let workingInput = input.slice();

    let startEnergy = Number(workingInput.shift());

    let index = 0;
    let command = workingInput[index];
    let wonBattles = 0;
    let isFinished = false;

    while (command != "End of battle") {
        command = Number(command);

        if (startEnergy - command >= 0) {
            startEnergy -= command;
            wonBattles++;

            if (wonBattles % 3 == 0) {
                startEnergy += wonBattles;
            }
        } else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${startEnergy} energy`);
            isFinished = true;
            break;
        }

        index++;
        command = workingInput[index];
    }

    if (!isFinished) {
        console.log(`Won battles: ${wonBattles}. Energy left: ${startEnergy}`);
    }
}

cs(
    [
        '200', '54', '14',
        '28', '13', 'End of battle'
    ]
);