function solve(input) {
    let arrayToOperate = input.slice();
    let max = Number.NEGATIVE_INFINITY;

    let arrayToPrint = arrayToOperate.filter(check);

    function check(numbers) {
        if (numbers >= max) {
            max = numbers;
            return true;
        } else {
            return false;
        }
    }

    console.log(arrayToPrint.join(" "));
}

// function solve(input) {
//     let arrayToOperate = input.slice();
//     let max = Number.MIN_SAFE_INTEGER;
//     let arrayToPrint = [];

//     for (let i = 0; i < arrayToOperate.length; i++) {
//         if (arrayToOperate[i] >= max) {
//             max = arrayToOperate[i];
//             arrayToPrint.push(arrayToOperate[i]);
//         }
//     }

//     console.log(arrayToPrint.join(" "));
// }

solve([1, 3, 8, 4, 10, 12, 3, 2, 24])