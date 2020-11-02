function solve(input) {
    let oldArray = input;
    let newArray = [];
    let evenNum = 0;
    let oddNum = 0;
    let sumNew = 0;
    let sumOld = 0;
    
    for (let i = 0; i < oldArray.length; i++) {
        sumOld += oldArray[i];

        if (oldArray[i] % 2 === 0) {
            evenNum = oldArray[i] + i;
            newArray[i] = evenNum;
            sumNew += evenNum;
        } else {
            oddNum = oldArray[i] - i;
            newArray[i] = oddNum;
            sumNew += oddNum
        }
    }

    console.log(newArray);
    console.log(sumOld);
    console.log(sumNew);
}

solve([5, 15, 23, 56, 35])