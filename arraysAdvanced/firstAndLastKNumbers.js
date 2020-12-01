function firstAndLast(input) {
    let arrayToOperate = input.slice();
    let kNumbers = arrayToOperate.shift();

    let resultFirst = arrayToOperate.slice(0, kNumbers);
    let resultLast = arrayToOperate.slice(arrayToOperate.length - kNumbers, arrayToOperate.length);

    console.log(resultFirst.join(" "));
    console.log(resultLast.join(" "));
}

firstAndLast([3,
    6, 7, 8, 9]

);