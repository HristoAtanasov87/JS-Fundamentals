function solve(firstNumber, operator, secondNumber) {
    let firstOperand = firstNumber;
    let secondOperand = secondNumber;
    let operation = operator;
    let result = 0;

    switch (operation) {
        case "+":
            result = firstOperand + secondOperand;
            break;
        case "-":
            result = firstOperand - secondOperand;
            break;
        case "*":
            result = firstOperand * secondOperand;
            break;
        case "/":
            result = firstOperand / secondOperand;
            break;
    }

    console.log(result.toFixed(2));
}

solve(5,
    '+',
    10
    )