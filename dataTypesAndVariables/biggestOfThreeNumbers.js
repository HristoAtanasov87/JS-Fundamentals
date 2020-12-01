function solve(firstNum, secondNum, thirdNum) {
    let result = 0;

    if (firstNum >= secondNum && firstNum >= thirdNum) {
        result = firstNum;
    } else if (secondNum >= firstNum && secondNum >= thirdNum) {
        result = secondNum;
    } else if (thirdNum >= firstNum && thirdNum >= secondNum) {
        result = thirdNum;
    }
    console.log(result);
}

solve(1, 1, -1)