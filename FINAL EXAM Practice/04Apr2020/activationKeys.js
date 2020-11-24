function solve(input) {
    let rawKey = input.shift();
    let command = input.shift().split(">>>");
    let activationKey = rawKey;
    let actions = {
        Contains: (array) => {
            let [action, substring] = array;
            if (activationKey.includes(substring)) {
                return `${activationKey} contains ${substring}`;
            } else {
                return "Substring not found!";
            }
        },
        Flip: (array) => {
            let [action, caseToConvert, startIndex, endIndex] = command;
            let temp = activationKey.substring(startIndex, endIndex);
            let firstPart = activationKey.substring(0, startIndex);
            let secondPart = activationKey.substring(endIndex);

            if (caseToConvert === "Upper") {
                temp = temp.toUpperCase();
            } else {
                temp = temp.toLowerCase();
            }
            activationKey = firstPart + temp + secondPart;
            return activationKey;
        },
        Slice: (array) => {
            let [action, startIndex, endIndex] = command;

            let firstPart = activationKey.substring(0, startIndex);
            let secondPart = activationKey.substring(endIndex);
            activationKey = firstPart + secondPart;
            return activationKey;
        }
    };

    while (command[0] !== "Generate") {
        let [action] = command;

        console.log(actions[action](command));

        command = input.shift().split(">>>");
    }

    console.log(`Your activation key is: ${activationKey}`);
}


// solve([
//     'abcdefghijklmnopqrstuvwxyz',
//     'Slice>>>2>>>6',
//     'Flip>>>Upper>>>3>>>14',
//     'Flip>>>Lower>>>5>>>7',
//     'Contains>>>def',
//     'Contains>>>deF',
//     'Generate'
// ]);

solve([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
]);