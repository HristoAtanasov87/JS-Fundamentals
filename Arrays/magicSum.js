function solve(inputArray, magicNumber) {
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            let firstNum = inputArray[i];
            let secondNum = inputArray[j];

            if (firstNum + secondNum === magicNumber) {
                console.log(`${firstNum} ${secondNum}`);
            }
        }
    }
}

solve([6, 5, 3, 4, 3, 3],
    7
)