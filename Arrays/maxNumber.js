function solve(input) {
    let arrayOfTopIntegers = "";
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            let firstNum = input[i];
            let secondNum = input[j];

            if (firstNum <= secondNum) {
                break;
            } else {
                count++;
            }

            if (count === (input.length - 1) - i) {
                arrayOfTopIntegers += input[i] + " ";
                count = 0;
            }
        }
    }

    arrayOfTopIntegers += input[input.length - 1];
    console.log(arrayOfTopIntegers);
}

solve([27, 19, 42, 2, 13, 45, 48]);