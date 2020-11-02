function solve(input) {
    let result = "";

    for (let i = 0; i < input.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        let isFound = false;

        for (let j = i - 1; j >= 0; j--) {
            sumLeft += input[j];
        }

        for (let k = i + 1; k < input.length; k++) {
            sumRight += input[k];
        }

        if (sumLeft === sumRight) {
            result = i;
            isFound = true;
        } else {
            result = "no";
        }

        if (isFound) {
            break;
        }
    }

    console.log(result);
}

solve([1, 2, 3, 3]);