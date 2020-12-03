function finalQuest(input) {
    let collection = input
        .shift()
        .split(" ");

    let command = input.shift();

    while (command != "Stop") {
        let [action, wordOne, wordTwo] = command.split(" ");

        switch (action) {
            case "Delete": {
                wordOne = Number(wordOne);
                if (0 <= wordOne && wordOne < collection.length) {
                    collection.splice(wordOne + 1, 1);
                }
                break;
            }
            case "Swap": {
                let indexOne = collection.indexOf(wordOne);
                let indexTwo = collection.indexOf(wordTwo);

                if (indexOne != -1 && indexTwo != -1) {
                    let temp = collection[indexOne];
                    collection.splice(indexOne, 1, collection[indexTwo]);
                    collection.splice(indexTwo, 1, temp);
                }
                break;
            }
            case "Put": {
                wordTwo = Number(wordTwo);

                if (0 < wordTwo && wordTwo < collection.length + 2) {
                    collection.splice(wordTwo - 1, 0, wordOne);
                }
                break;
            }
            case "Sort": {
                collection.sort((a, b) => b.localeCompare(a));
                break;
            }
            case "Replace": {
                let indexTwo = collection.indexOf(wordTwo);

                if (indexTwo != -1) {
                    collection.splice(indexTwo, 1, wordOne);
                }
                break;
            }
        }

        command = input.shift();
    }

    console.log(collection.join(" "));
}

// finalQuest([
//     'Congratulations! You last also through the have challenge!',
//     'Swap have last',
//     'Replace made have',
//     'Delete 2',
//     'Put it 4',
//     'Stop'
// ])


finalQuest([
    'a b c',
    'Put d 1',
    "Stop"
]);
