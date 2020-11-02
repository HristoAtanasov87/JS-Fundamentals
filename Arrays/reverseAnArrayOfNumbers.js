function solve(number, array) {
    let start = number;
    let testArray = array;

    let result = "";
    let slicedArray = testArray.slice(0, start);
    for (let i = start - 1; i >= 0; i--) {
        result += slicedArray[i] + " "; 
    }

    console.log(result);
}

solve(3, [10, 20, 30, 40, 50])