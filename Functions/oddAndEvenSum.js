function oddEvenSum(numberInput) {
    let inputToString = String(numberInput);
    let oddSum = 0;
    let evenSum = 0;


    for (let i = 0; i < inputToString.length; i++) {
        if (inputToString[i] % 2 === 0) {
            evenSum += Number(inputToString[i]);
        } else {
            oddSum += Number(inputToString[i]);
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}

console.log(oddEvenSum(1000435));