function sumFirstLast(input) {
    let arrayToOperate = input.slice();
    let firstElement = Number(arrayToOperate.pop());
    let lastElement = Number(arrayToOperate.shift());

    return firstElement + lastElement;
}

sumFirstLast(['20', '30', '40']);