function airPollution(map, wheatherCondidtions) {
    let mapToUse = map.slice();
    let wheatherCondidtionsToUse = wheatherCondidtions.slice();

    let sofiaMap = [];
    sofiaMap = makingMap(mapToUse, sofiaMap);

    let finalCondition = commandsExecution(wheatherCondidtionsToUse, sofiaMap);

    let result = findPollutedBlocks(finalCondition);

    if (Array.isArray(result)) {
        console.log(`Polluted areas: ${result.join(", ")}`);
    } else {
        console.log(result);
    }

    function makingMap(array, emptyMatrix) {

        for (const iterator of array) {
            let rows = iterator.
                split(" ").
                map(Number);
            emptyMatrix.push(rows);
        }

        return emptyMatrix;
    }

    function commandsExecution(commandsArray, array) {
        for (let i = 0; i < commandsArray.length; i++) {
            let commandArray = commandsArray[i].split(" ");

            let [command, change] = commandArray;
            change = Number(change);

            switch (command) {
                case "breeze":
                    for (let i = 0; i < array[change].length; i++) {
                        let zone = array[change][i];
                        zone -= 15;
                        array[change][i] = zone;

                        if (array[change][i] < 0) {
                            array[change][i] = 0;
                        }
                    }
                    break;
                case "gale":
                    for (let i = 0; i < array.length; i++) {
                        let zone = array[i][change];
                        zone -= 20;
                        array[i][change] = zone;

                        if (array[i][change] < 0) {
                            array[i][change] = 0;
                        }
                    }
                    break;
                case "smog":
                    for (let i = 0; i < array.length; i++) {
                        for (let j = 0; j < array[i].length; j++) {
                            array[i][j] += change;
                        }
                    }
                    break;
            }

        }
        return array;
    }

    function findPollutedBlocks(array) {
        let isFound = false;
        let pollutedBlocks = [];

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                let block = array[i][j];
                let blockCoordinates = "";

                if (block >= 50) {
                    isFound = true;
                    blockCoordinates = `[${i}-${j}]`;
                    pollutedBlocks.push(blockCoordinates);
                }
            }
        }

        if (isFound) {
            return pollutedBlocks;
        } else {
            return "No polluted areas";
        }
    }
}

airPollution(["5 7 2 14 4",
    "21 14 2 5 3",
    "3 16 7 42 12",
    "2 20 8 39 14",
    "7 34 1 10 24"],
    ["breeze 1", "gale 2", "smog 35"]

);