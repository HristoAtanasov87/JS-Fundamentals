function lastStop(input) {
    let paintings = input
        .shift()
        .split(" ")
        .map(Number);

    let command = input
        .shift()
        .split(" ")

    while (command != "END") {
        let [action, numOne, numTwo] = command;
        numOne = Number(numOne);
        numTwo = Number(numTwo);

        switch (action) {
            case "Change": {
                let indexOne = paintings.indexOf(numOne);

                if (indexOne != -1) {
                    paintings.splice(indexOne, 1, numTwo);
                }
                break;
            }
            case "Hide": {
                let indexOne = paintings.indexOf(numOne);

                if (indexOne != -1) {
                    paintings.splice(indexOne, 1);
                }
                break;
            }
            case "Switch": {
                let indexOne = paintings.indexOf(numOne);
                let indexTwo = paintings.indexOf(numTwo);

                if (indexOne != -1 && indexTwo != -1) {
                    paintings.splice(indexOne, 1, numTwo);
                    paintings.splice(indexTwo, 1, numOne);
                }
                break;
            }
            case "Insert": {
                if (numOne >= 0 && numOne < paintings.length) {
                    paintings.splice(numOne + 1, 0, numTwo);
                }

                break;
            }
            case "Reverse":
                paintings.reverse();
                break;
        }

        command = input
            .shift()
            .split(" ");
    }

    console.log(`${paintings.join(" ")}`);
}

lastStop([
    '115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse ',
    'Change 73 70',
    'Insert 10 85',
    'END'
]);

lastStop([
    '77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END'
]);