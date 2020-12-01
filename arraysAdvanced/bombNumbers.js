function bombNumbers(numSequence, bomb) {
    let bombNumber = bomb[0];
    let bombPower = bomb[1];

    for (let i = 0; i < numSequence.length; i++) {

        if (numSequence[i] === bombNumber) {
            let start = i - bombPower;
            let toDelete = bombPower * 2 + 1

            if (start < 0) {
                toDelete += start;
                start = 0;
                i = -1;
            }

            numSequence.splice(start, toDelete);
            i = start - 1;
        }
    }

    let sum = 0;
    for (const iterator of numSequence) {
        sum += iterator;
    }

    return sum;
}

console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
));