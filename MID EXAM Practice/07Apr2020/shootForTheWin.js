function shootForTheWin(input) {
    let arrayToOperate = input.slice();

    let targets = arrayToOperate.
        shift().
        split(" ").
        map(Number);

    let indexesToShoot = arrayToOperate;

    let [shots, finalStateOfTargets] = processCommands(indexesToShoot, targets);

    return console.log(`Shot targets: ${shots} -> ${finalStateOfTargets.join(" ")}`)

    function processCommands(arrayCommands, arrayTargets) {
        let index = 0;
        let command = arrayCommands[index];
        let shotsTaken = 0;

        while (command != "End") {
            command = Number(command);

            if (command < arrayTargets.length) {
                if (arrayTargets[command] != -1) {
                    shotsTaken++;

                    let currentTarget = arrayTargets[command];

                    for (let i = 0; i < arrayTargets.length; i++) {

                        if (arrayTargets[i] != -1 && (i != command)) {

                            if (arrayTargets[i] > currentTarget) {
                                arrayTargets[i] -= currentTarget;

                            } else {
                                arrayTargets[i] += currentTarget;
                            }
                        }
                    }
                    arrayTargets[command] = -1;
                }
            }

            index++;
            command = arrayCommands[index];
        }
        return [shotsTaken, arrayTargets];
    }

}


shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End']);

shootForTheWin(['30 30 12 60 54 66', '5', '2', '4', '0', 'End']);