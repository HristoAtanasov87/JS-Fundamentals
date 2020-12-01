function janNotation(inputArray) {
    let arrayToOperate = inputArray.slice();

    let numbers = [];
    let operators = [];

    for (let i = 0; i < arrayToOperate.length; i++) {
        let currentElement = arrayToOperate[i];

        if (Number.isSafeInteger(currentElement)) {
            numbers.push(currentElement);

            if (numbers.length >= 2 && operators.length > 0) {
                //izpylnqvam operatora dokato svyrshat operatorite ili cifrata ostane samo edna

                let operator = operators.shift();
                let firstOperand = 0;
                let secondOperand = 0;
                let result = 0

                switch (operator) {
                    case "+":
                        secondOperand = numbers.pop();
                        firstOperand = numbers.pop();

                        result = firstOperand + secondOperand;

                        numbers.push(result);
                        break;
                    case "-":
                        secondOperand = numbers.pop();
                        firstOperand = numbers.pop();

                        result = firstOperand - secondOperand;

                        numbers.push(result);
                        break;
                    case "*":
                        secondOperand = numbers.pop();
                        firstOperand = numbers.pop();

                        result = firstOperand * secondOperand;

                        numbers.push(result);
                        break;
                    case "/":
                        secondOperand = numbers.pop();
                        firstOperand = numbers.pop();

                        result = firstOperand / secondOperand;

                        numbers.push(result);
                        break;
                }

            }

        } else {
            operators.push(currentElement);

            if (numbers.length <= 1) {
                continue;
            } else {
                let operator = operators.shift(); // ako ima 10 cifri i e doshyl operator za pyrvi pyt
                let firstOperand = 0;
                let secondOperand = 0;
                let result = 0;

                switch (operator) {
                    case "+":
                        secondOperand = numbers.pop();
                        firstOperand = numbers.pop();

                        result = firstOperand + secondOperand;

                        numbers.push(result);
                        break;
                    case "-":
                        secondOperand = numbers.pop();
                        firstOperand = numbers.pop();

                        result = firstOperand - secondOperand;

                        numbers.push(result);
                        break;
                    case "*":
                        secondOperand = numbers.pop();
                        firstOperand = numbers.pop();

                        result = firstOperand * secondOperand;

                        numbers.push(result);
                        break;
                    case "/":
                        secondOperand = numbers.pop();
                        firstOperand = numbers.pop();

                        result = firstOperand / secondOperand;

                        numbers.push(result);
                        break;
                }
            }
        }


    }

    if (numbers.length == 1 && operators.length == 0) {
        console.log(numbers.join());
    } else if (numbers.length <= 1 && operators.length > 0) {
        console.log("Error: not enough operands!");
    } else {
        console.log("Error: too many operands!");
    }
}

janNotation([-1,
    1,
    2,
    3,
    4,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']

);