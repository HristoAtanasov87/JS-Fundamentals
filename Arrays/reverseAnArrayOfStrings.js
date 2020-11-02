// function solve(input) {
//     let reversed = ""
//     for (let i = input.length - 1; i >= 0; i--) {
//         let firstElement = input[i];
//         reversed += firstElement + " "
//     }
//     console.log(reversed);
// }

function solve(input) {
    let middle = input.length / 2;
    let lastIndex = input.length - 1;
    for (let i = 0; i < middle; i++) {
        let temp = input[i];
        input[i] = input[(lastIndex - i)];
        input[lastIndex - i] = temp;
    }

    console.log(input.join(" "));
}

solve(['a', 'b', 'c', 'd', 'e'])