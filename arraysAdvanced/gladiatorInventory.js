function gladiatorInventory(inputArray) {
    let initialInventory = inputArray.shift().split(" ");
    let index = 0;
    let commandArray = inputArray[index].split(" ");
    let command = commandArray[0];

    while (command != undefined) {
        switch (command) {
            case "Buy":
                initialInventory = buy(commandArray[1], initialInventory);
                break;
            case "Trash":
                initialInventory = trash(commandArray[1], initialInventory);
                break;
            case "Repair":
                initialInventory = repair(commandArray[1], initialInventory);
                break;
            case "Upgrade":
                let splitUpgrade = commandArray[1].split("-");
                initialInventory = upgrade(splitUpgrade[0], splitUpgrade[1], initialInventory);
                break;
        }

        index++;
        if (index >= inputArray.length) {
            break;
        }
        commandArray = inputArray[index].split(" ");
        command = commandArray[0];
    }

    return initialInventory.join(" ");

    function buy(equipment, inventoryArray) {
        if (!inventoryArray.includes(equipment)) {
            inventoryArray.push(equipment);
        }

        return inventoryArray;
    }

    function trash(equipment, inventoryArray) {
        let indexToDelete = inventoryArray.indexOf(equipment);

        if (indexToDelete !== -1) {
            inventoryArray.splice(indexToDelete, 1);
        }

        return inventoryArray;
    }

    function repair(equipment, inventoryArray) {
        let indexToRepair = inventoryArray.indexOf(equipment);

        if (indexToRepair !== -1) {
            let equipmentToRepair = inventoryArray.splice(indexToRepair, 1);
            inventoryArray.push(equipmentToRepair[0]);
        }

        return inventoryArray;
    }

    function upgrade(equipment, upgrade, inventoryArray) {
        let indexToUpgrade = inventoryArray.indexOf(equipment);

        if (indexToUpgrade !== -1) {
            inventoryArray.splice(indexToUpgrade + 1, 0, `${equipment}:${upgrade}`);
        }

        return inventoryArray;
    }
}

console.log(gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
));