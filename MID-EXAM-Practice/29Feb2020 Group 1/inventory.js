function inventory(input) {
    let arrayInput = input.slice();

    let itemsInInventory = arrayInput.shift().split(", ");

    let index = 0;
    let command = arrayInput[index];

    while (command !== "Craft!") {
        command = command.split(" - ");

        let [action, item] = command;
        let indexToRemove = 0;

        switch (action) {
            case "Collect":
                if (!itemsInInventory.includes(item)) {
                    itemsInInventory.push(item);
                }
                break;
            case "Drop":
                indexToRemove = itemsInInventory.indexOf(item);

                if (indexToRemove !== -1) {
                    itemsInInventory.splice(indexToRemove, 1);
                }
                break;
            case "Combine Items":
                item = item.split(":");

                let [oldItem, newItem] = item;
                indexToRemove = itemsInInventory.indexOf(oldItem);

                if (indexToRemove != -1) {
                    itemsInInventory.splice(indexToRemove + 1, 0, newItem);
                }
                break;
            case "Renew":
                indexToRemove = itemsInInventory.indexOf(item);

                if (indexToRemove != -1) {
                    let toMove = itemsInInventory.splice(indexToRemove, 1);
                    itemsInInventory.push(toMove);
                }
                break;
        }
        index++;
        command = arrayInput[index];
    }

    console.log(itemsInInventory.join(", "));
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]

);