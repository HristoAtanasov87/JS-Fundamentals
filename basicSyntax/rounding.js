function solve(number, rounding) {
    let roundedNumber = number;
    let toRound = rounding;

    if (toRound <= 15) {
        roundedNumber = roundedNumber.toFixed(toRound);
    } else {
        roundedNumber = roundedNumber.toFixed(15);
    }
    console.log(parseFloat(roundedNumber));
}

solve(10.5, 3);

