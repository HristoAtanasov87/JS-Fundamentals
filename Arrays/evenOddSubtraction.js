function solve(input) {
    let turnedArray = [];

    for(let i = 0; i < input.length; i++) {
        turnedArray.push(Number(input[i]));
    }

    let sumOdd = 0;
    let sumEven = 0;

    for (let number of turnedArray) {
        if (number % 2 === 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }

    console.log(sumEven - sumOdd);
}

solve([2,4,6,8,10])