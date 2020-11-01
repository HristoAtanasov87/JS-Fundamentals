function solve(numberOne, numberTwo, numberThree) {
    let sum = numberOne + numberTwo + numberThree;

    // if (sum % 1 === 0) {
    //     result = "Integer";
    // } else {
    //     result = "Float";
    // }
    // console.log(`${sum} - ${result}`);

    let result = Math.trunc(sum);

    if (sum === result) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

solve(9, 100, 1.1); 