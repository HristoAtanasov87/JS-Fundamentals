function factorialDivision(firstNumber, secondNumber) {
    let firstFactorial = factorial(firstNumber);
    let secondFactorial = factorial(secondNumber);

    return (firstFactorial / secondFactorial).toFixed(2);

    function factorial(number) {
        let result = 1;
        for (let i = number; i > 0; i--) {
            result *= i;
        }

        return result;
    }
}

console.log(factorialDivision(5, 2));