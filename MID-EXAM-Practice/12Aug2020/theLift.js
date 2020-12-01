function lift(array) {
    let wagonsArray = array[1].split(" ").map(Number);
    let emptySeats = checkEmptySeats(wagonsArray);

    return fillWagons(array);

    function checkEmptySeats(array) {
        let takenSeats = 0;
        for (let i = 0; i < array.length; i++) {
            takenSeats += array[i];
        }
        return 4 * array.length - takenSeats;
    }

    function fillWagons(array) {
        let peopleInQueue = Number(array[0]);
        let wagonsArray = array[1].split(" ").map(Number);
        let isPeopleFinished = false;
        let isFull = false;
        for (let i = 0; i < wagonsArray.length; i++) {
            for (let j = 0; j < 4; j++) {
                if (wagonsArray[i] == 4) {
                    break;
                }

                wagonsArray[i]++;
                peopleInQueue--;
                emptySeats--;

                if (peopleInQueue == 0) {
                    isPeopleFinished = true;
                    break;
                }

                if (emptySeats == 0) {
                    isFull = true;
                    break;
                }

                if (wagonsArray[i] == 4) {
                    break;
                }
            }

            if (isPeopleFinished) {
                if (emptySeats > 0) {
                    console.log("The lift has empty spots!");
                    console.log(wagonsArray.join(" "));
                } else if (emptySeats == 0) {
                    console.log(wagonsArray.join(" "));
                }
                break;
            }

            if (isFull) {
                if (peopleInQueue > 0) {
                    console.log(`There isn't enough space! ${peopleInQueue} people in a queue!`);
                    console.log(wagonsArray.join(" "));
                }
                break;
            }
        }
    }
}

lift(["15", "0 0 0 0 0"]);