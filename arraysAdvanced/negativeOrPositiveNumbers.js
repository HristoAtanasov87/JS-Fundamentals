function solve(input) {
    let arrayToOperate = input.slice();
    let result = [];

    // for (let i = 0; i < arrayToOperate.length; i++) {
    //     if (arrayToOperate[i] < 0) {
    //         result.unshift(arrayToOperate[i]);
    //     } else {
    //         result.push(arrayToOperate[i]);

    //     }
    // }

    // for (let i = 0; i < result.length; i++) {
    //     console.log(result[i]);
    // }

    for (let element of arrayToOperate) {
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }

    }

    for (let iterator of result) {
        console.log(iterator);
    }
}

solve([7, -2, 8, 9]);