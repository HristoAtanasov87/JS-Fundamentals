// function solve(input) {
//     let firstNum = Number(input[0]);
//     let lastNum = Number(input[input.length - 1]);

//     let sum = firstNum + lastNum;
//     console.log(sum);
// }

function solve(input) {
    let first = Number(input.shift());
    let last = Number(input.pop());
    console.log(first + last);
}

solve(['10', '17', '22', '33']);