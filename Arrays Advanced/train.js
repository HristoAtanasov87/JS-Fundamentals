function train(input) {
    let initialWagons = input.
        shift().
        split(" ").
        map(Number);

    let maxPassengersAllowed = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command[0] === "A") {
            let additionalWagon = command.split(" ");
            initialWagons.push(Number(additionalWagon[1]));
        } else {
            command = Number(command);

            let check = freeSpace(command, initialWagons);

            initialWagons.splice(check, 1, (command + initialWagons[check]));

            function freeSpace(passengers, array) {
                for (let j = 0; j < array.length; j++) {
                    if (array[j] + passengers <= maxPassengersAllowed) {
                        return j;
                    }
                }
            }
        }
    }

    return initialWagons.join(" ");
}

console.log(train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']

));