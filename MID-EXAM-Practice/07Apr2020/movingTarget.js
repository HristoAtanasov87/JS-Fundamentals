function movingTarget(input) {
    let workArray = input.slice();

    let targets = workArray.
        shift().
        split(" ").
        map(Number);

    let commands = workArray;

    let result = processCommands(targets, commands);

    return console.log(result.join("|"));

    function processCommands(arrayTargets, arrayCommands) {
        let index = 0;
        let command = arrayCommands[index];

        while (command != "End") {
            command = command.split(" ");
            let [action, indexToShoot, damage] = command;
            indexToShoot = Number(indexToShoot);
            damage = Number(damage);

            switch (action) {
                case "Shoot":
                    if (indexToShoot < arrayTargets.length) {
                        arrayTargets[indexToShoot] -= damage;

                        if (arrayTargets[indexToShoot] <= 0) {
                            arrayTargets.splice(indexToShoot, 1);
                        }
                    }
                    break;
                case "Add":
                    if (indexToShoot >= 0 && indexToShoot < arrayTargets.length) {
                        arrayTargets.splice(indexToShoot, 0, damage);
                    } else {
                        console.log("Invalid placement!");
                    }
                    break;
                case "Strike":
                    if (indexToShoot < arrayTargets.length) {

                        if ((indexToShoot - damage >= 0) && (indexToShoot + damage < arrayTargets.length)) {
                            arrayTargets.splice(indexToShoot + 1, damage);
                            arrayTargets.splice(indexToShoot - damage, damage + 1);
                        } else {
                            console.log("Strike missed!");
                        }
                    }
                    break;
            }

            index++;
            command = arrayCommands[index];
        }
        return arrayTargets;
    }
}

movingTarget([
    '52 74 23 44 96 110 77 77 77 77',
    'Strike 5 3',
    'End'
])

// movingTarget([
//     '47 55 85 78 99 20',
//     'Shoot 1 55',
//     'Shoot 8 15',
//     'Strike 2 3',
//     'Add 0 22',
//     'Add 2 40',
//     'Add 2 50',
//     'End'
// ]
// )