// function solve(input) {
//     let sum = 0;
//     for (let i = 0; i < input.length; i++) {
//         let number = Number(input[i]);
//         if (number % 2 === 0) {
//             sum += number;
//         }
//     }

//     console.log(sum);
// }

function solve(input) {
    let turnedToNumbers = [];
    let sum = 0;
    
    for (let i = 0; i < input.length; i++) {
        turnedToNumbers.push(Number(input[i]));
    }

    for (let eachNumber of turnedToNumbers) {
        if (eachNumber % 2 === 0) {
            sum += eachNumber;
        }
    }

    console.log(sum);
}
solve(['1','2','3','4','5','6'])