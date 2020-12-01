function arrayManipulator(array, commands) {
    let editedArray = array.slice();
    let index = 0;
    let command = commands[index];

    while (command != "print") {
        let commandInArray = command.split(" ");
        let action = commandInArray[0];

        switch (action) {
            case "add":
                editedArray = add(Number(commandInArray[1]), Number(commandInArray[2]), editedArray);
                break;
            case "addMany":
                editedArray = addMany(Number(commandInArray[1]), commandInArray, editedArray);
                break;
            case "contains":
                console.log(contains(Number(commandInArray[1]), editedArray));
                break;
            case "remove":
                editedArray = remove(Number(commandInArray[1]), editedArray);
                break;
            case "shift":
                editedArray = shift(Number(commandInArray[1]), editedArray);
                break;
            case "sumPairs":
                editedArray = sumPairs(editedArray);
        }

        index++;
        command = commands[index];
    }

    console.log(`[ ${editedArray.join(", ")} ]`);

    function add(index, element, arrayToManipulate) {
        arrayToManipulate.splice(index, 0, element);

        return arrayToManipulate;
    }

    function addMany(index, arrayOfElements, arrayToManipulate) {
        let obsolete = arrayOfElements.splice(0, 2);

        for (let i = 0; i < arrayOfElements.length; i++) {
            let elementToAdd = Number(arrayOfElements[i]);

            arrayToManipulate.splice(index + i, 0, elementToAdd);
        }
        return arrayToManipulate;
    }

    function contains(element, arrayToManipulate) {
        return arrayToManipulate.indexOf(element);
    }

    function remove(index, arrayToManipulate) {
        arrayToManipulate.splice(index, 1);

        return arrayToManipulate;
    }

    function shift(positions, arrayToManipulate) {
        for (let i = 1; i <= positions; i++) {
            let first = arrayToManipulate.shift();
            arrayToManipulate.push(first);
        }

        return arrayToManipulate;
    }


    function sumPairs(arrayToManipulate) {
        let result = [];

        if (arrayToManipulate.length % 2 != 0) {

            for (let i = 0; i < arrayToManipulate.length - 1; i += 2) {
                let a = arrayToManipulate[i];
                let b = arrayToManipulate[i + 1];
                result.push(a + b);
            }
            result.push(arrayToManipulate[arrayToManipulate.length - 1])

        } else {
            for (let i = 0; i < arrayToManipulate.length; i += 2) {
                a = arrayToManipulate[i];
                b = arrayToManipulate[i + 1];
                result.push(a + b);
            }
        }

        return result;
    }

}

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']

)