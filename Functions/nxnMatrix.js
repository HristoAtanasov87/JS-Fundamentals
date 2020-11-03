// function matrix(size) {
//     for (let i = 0; i < size; i++) {
//         let row = "";
//         for (let j = 0; j < size; j++) {
//             row += size + " ";
//         }
//         console.log(row);
//     }
// }

// matrix(7);

function matrix(size) {
    let toPrint = [];
    for (let i = 0; i < size; i++) {
        toPrint[i] = pushingRow(size);
    }

    function pushingRow(number) {
        let row = [];
        for (let j = 0; j < number; j++) {
            row.push(number);
        }
        return row.join(" ");
    }

    return toPrint.join(" " + "\n");
}



console.log(matrix(3));

