function addSubstract(a, b, c) {
    let toPrint = subtract(sum(a, b), c)

    function sum(firstNum, secondNum) {
        let sum = firstNum + secondNum;
        return sum;
    }

    // let sum = (a, b) => a + b;

    function subtract(sumOfFirstTwo, thirdNum) {
        let result = sumOfFirstTwo - thirdNum;
        return result;
    }

    return toPrint
}

console.log(addSubstract(23, 6, 10));