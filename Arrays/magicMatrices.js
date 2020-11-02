function solve(input) {
    let n = input.length;
    let stringify = input.join(", ");
    let joinedArray = stringify.split(",");
    let result = true;
    let sumRows = 0;
    let sumColumns = 0;
    let firstNum = 0;

    for (let i = 0; i < n; i++) {
        firstNum = Number(joinedArray[i]);
        for (let j = i + n; j < joinedArray.length; j += n) {
            let processedNum = Number(joinedArray[j])
            firstNum += processedNum;
        }
        sumColumns += firstNum;
    }

    if ((sumColumns / n) !== firstNum) {
        result = false;
    }

    for (let i = 0; i < joinedArray.length; i++) {
        sumRows += Number(joinedArray[i]);
    }

    if ((sumRows / n) !== firstNum) {
        result = false;
    }

    if (joinedArray.length !== Math.pow(n, 2)) {
        result = false;
    }

    console.log(result);
}

solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]



);