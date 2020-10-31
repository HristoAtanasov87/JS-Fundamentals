// function solve(start, stop) {
//     let beginning = start;
//     let end = stop;
//     let toPrint = [];
//     let sum = 0;

//     for (let i = beginning; i <= end; i++) {
//         toPrint.push(i);
//         sum += i; 
//     }
//     console.log(toPrint.join(" "));
//     console.log(`Sum: ${sum}`);
// }

// solve(5, 10);

function solve(start, stop) {
    let sum = 0;
    let line = "";

    for (let i = start; i <= stop; i++) {
        line += i + " ";
        sum += i;
    }

    console.log(line);
    console.log(`Sum: ${sum}`);
}

solve(5, 10);