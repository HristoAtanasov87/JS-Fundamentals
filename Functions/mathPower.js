function solve(number, power) {
    let initialNumber = number; 
    let numberToPower = number;
    let powerToUse = power;
    let result = 0;

    // result = Math.pow(numberToPower, powerToUse)

    for (let i = 1; i < powerToUse; i++) {
        result = numberToPower * initialNumber;
        numberToPower = result;
    }

    return result;
}

console.log(solve(3, 4));