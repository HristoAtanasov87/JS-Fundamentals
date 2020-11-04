function houseParty(inputArray) {
    let list = [];
    let arrayToEdit = inputArray.slice();

    for (let i = 0; i < inputArray.length; i++) {
        let command = arrayToEdit.
            shift().
            split(" ");
        let name = command[0];

        if (!command.includes("not")) { // demek is going

            if (!list.includes(name)) { // demek ne e v spisyka
                list.push(name);
            } else { // demek e v spisyka
                console.log(`${name} is already in the list!`);
            }
        } else { // demek is not going

            if (list.includes(name)) { // demek e v spisyka
                let toDelete = list.indexOf(name);
                list.splice(toDelete, 1);
            } else { // demek ne e v spisyka
                console.log(`${name} is not in the list!`);
            }
        }
    }

    return list.join("\n");

}

console.log(houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']

));