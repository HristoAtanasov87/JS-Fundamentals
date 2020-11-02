function solve(firstArray, secondArray) {
    let numbersFirstArray = [];
    let numbersSecondArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        numbersFirstArray.push(Number(firstArray[i]));
    }

    for (let j = 0; j < secondArray.length; j++) {
        numbersSecondArray.push(Number(secondArray[j]));
    }

    let isIdentical = false;
    let sum = 0;
    let error = 0;

    for (let k = 0; k < numbersFirstArray.length; k++) {
        if (numbersFirstArray[k] === numbersSecondArray[k]) {
            sum += numbersFirstArray[k];
            isIdentical = true;
        } else {
            isIdentical = false;
            error = k;
            break;
        }
    }

    if (isIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${error} index`);
    }
}

solve(['1'], ['10']);