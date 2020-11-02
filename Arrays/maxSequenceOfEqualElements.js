function solve(input) {
    let longestSequence = [];
    let challengingSequence = [];

    for (let i = 0; i < input.length; i++) {
        let numberToCheck = input[i];
        let start = i;
        let end = 0;

        for (let j = i + 1; j < input.length; j++) {
            let secondNum = input[j];
            if (numberToCheck !== secondNum) {
                end = j;
                break;
            }
        }

        challengingSequence = input.slice(start, end);

        if (challengingSequence.length > longestSequence.length) {
            longestSequence = challengingSequence;
        }
    }
    console.log(longestSequence.join(" "));
}

solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);