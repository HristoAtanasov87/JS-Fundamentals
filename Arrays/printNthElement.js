function solve(input) {
    let arrayToOperate = input.slice();
    let step = Number(arrayToOperate.pop());
    let arrayToPrint = [];

    for (let i = 0; i < arrayToOperate.length; i += step) {
        arrayToPrint.push(arrayToOperate[i]);
    }

    console.log(arrayToPrint.join(" "));
}

solve(['5', '20', '31', '4', '20', '2']);