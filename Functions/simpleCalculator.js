function solve(numOne, numTwo, operator) {
    
    switch (operator) {
        case "multiply":
            let multiply = (a, b) => a * b;
            console.log(multiply(numOne, numTwo));
            break;
        case "divide":
            let divide = (a, b) => a / b;
            console.log(divide(numOne, numTwo));
            break;
        case "add":
            let add = (a, b) => a + b;
            console.log(add(numOne, numTwo));
            break;
        case "subtract":
            let subtract = (a, b) => a - b;
            console.log(subtract(numOne, numTwo));
            break;
    }
}

solve(5, 5, "multiply")