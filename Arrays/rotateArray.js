function solve(input) {
    let rotations = Number(input.pop());
    let arrayToOperate = input.slice();
    let extractedElement = "";

    for (let i = 1; i <= rotations; i++) {
        extractedElement = arrayToOperate.pop();
        arrayToOperate.unshift(extractedElement);
    }

    console.log(arrayToOperate.join(" "));

}

solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);