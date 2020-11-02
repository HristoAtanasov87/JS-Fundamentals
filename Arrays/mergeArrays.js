function solve(firstArray, secondArray) {
    let newArray = [];

    for (let i = 0; i < firstArray.length; i++) {

        if (i % 2 === 0) {
            // newArray[i] = Number(firstArray[i]) + Number(secondArray[i]);
            newArray.push(Number(firstArray[i]) + Number(secondArray[i]))
        } else {
            // newArray[i] = firstArray[i] + secondArray[i];
            newArray.push(firstArray[i] + secondArray[i])
        }
    }

    console.log(newArray.join(" - "));
}

solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)