function solve(input) {
    let text = input.shift();

    let command = input.shift();

    while (command !== "Done") {
        let [action, ...parameters] = command.split(" ");

        if (action === "Change") {
            let [char, replacement] = parameters;

            while (text.includes(char)) {
                text = text.replace(char, replacement);
            }

            console.log(text);

        } else if (action === "Includes") {
            let [stringToCheck] = parameters;
            let toCheck = text.includes(stringToCheck);

            if (toCheck) {
                console.log("True");
            } else {
                console.log("False");
            }

        } else if (action === "End") {
            let [stringToCheck] = parameters;
            let toCheck = text.endsWith(stringToCheck);

            if (toCheck) {
                console.log("True");
            } else {
                console.log("False");
            }

        } else if (action === "Uppercase") {
            text = text.toUpperCase();
            console.log(text);

        } else if (action === "FindIndex") {
            let [charToFind] = parameters;
            let found = text.indexOf(charToFind);
            console.log(found);

        } else if (action === "Cut") {
            let [startIndex, length] = parameters.map(Number);
            let toPrint = text.substring(startIndex, startIndex + length);
            console.log(toPrint);
        }

        command = input.shift();
    }
}

solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
]);