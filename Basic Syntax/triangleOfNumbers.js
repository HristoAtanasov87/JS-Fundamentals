// function solve(input) {
//     let number = input;
//     let row = "";

//     for (let i = 1; i <= number; i++) {
//         row = i + " ";
//         console.log(row.repeat(i));
//     }
// }

// solve(5);

function solve(input) {
    for (let i = 1; i <= input; i++) {
        let result = "";

        for (let j = 1; j <= i; j++) {
            result += i + " "
        }
        console.log(result);
    }
}

solve(5);