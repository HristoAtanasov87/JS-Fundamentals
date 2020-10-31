function solve(firstNumber, secondNumber, thirdNumber) {
    let firstToPrint = 0;
    let secondToPrint = 0;
    let thirdToPrint = 0;

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        firstToPrint = firstNumber;
        if (secondNumber > thirdNumber) {
            secondToPrint = secondNumber;
            thirdToPrint = thirdNumber;
        } else {
            secondToPrint = thirdNumber;
            thirdToPrint = secondNumber;
        }
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        firstToPrint = secondNumber;
        if (firstNumber > thirdNumber) {
            secondToPrint = firstNumber;
            thirdToPrint = thirdNumber;
        } else {
            secondToPrint = thirdNumber;
            thirdToPrint = firstNumber;
        }
    } else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        firstToPrint = thirdNumber;
        if (firstNumber > secondNumber) {
            secondToPrint = firstNumber;
            thirdToPrint = secondNumber;
        } else {
            secondToPrint = secondNumber;
            thirdToPrint = firstNumber;
        }
    }
    console.log(firstToPrint);
    console.log(secondToPrint);
    console.log(thirdToPrint);
}

solve(0, 0, 2);