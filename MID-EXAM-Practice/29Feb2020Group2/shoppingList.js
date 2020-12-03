function shoppingList(input) {
    let workInput = input.slice();

    let initialList = workInput.
        shift().
        split("!");

    let result = processCommands(workInput, initialList);

    function processCommands(array, listOfItems) {
        let index = 0;
        let command = array[index];

        while (command != "Go Shopping!") {
            command = command.split(" ");

            let [action, product, newProduct] = command;
            let indexToManipulate = 0;

            switch (action) {
                case "Urgent":
                    indexToManipulate = listOfItems.indexOf(product);

                    if (indexToManipulate == -1) {
                        listOfItems.unshift(product);
                    }
                    break;
                case "Unnecessary":
                    indexToManipulate = listOfItems.indexOf(product);

                    if (indexToManipulate != -1) {
                        listOfItems.splice(indexToManipulate, 1);
                    }
                    break;
                case "Correct":
                    indexToManipulate = listOfItems.indexOf(product);

                    if (indexToManipulate != -1) {
                        listOfItems.splice(indexToManipulate, 1, newProduct);
                    }
                    break;
                case "Rearrange":
                    indexToManipulate = listOfItems.indexOf(product);

                    if (indexToManipulate != -1) {
                        let toMove = listOfItems.splice(indexToManipulate, 1);
                        listOfItems.push(toMove);
                    }
                    break;
            }

            index++;
            command = array[index];
        }

        return listOfItems
    }

    return result.join(", ")
}

console.log(shoppingList(['Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!']
));