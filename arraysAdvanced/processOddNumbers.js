// function oddNumbersDoubledAndReversed(input) {
//     let result = [];
//     for (let i = 0; i < input.length; i++) {
//         if (i % 2 != 0) {
//             result.unshift(input[i] * 2);
//         }
//     }

//     console.log(result.join(" "));
// }

// function oddNumbersDoubledAndReversed(inputArray) {
//     function ifOdd(array) {
//         return array.filter((num, index) => index % 2 != 0);
//     }
//     let oddIndexedElements = ifOdd(inputArray);
//     let oddIndexedElementsDoubled = oddIndexedElements.map(x => x * 2);
//     oddIndexedElementsDoubled.reverse();

//     return oddIndexedElementsDoubled.join(" ");
// }


function oddNumbersDoubledAndReversed(inputArray) {
    let result = inputArray
        .filter((num, index) => index % 2 != 0)
        .map(x => x * 2)
        .reverse();

    return result.join(" ");
}

console.log(oddNumbersDoubledAndReversed([3, 0, 10, 4, 7, 3]));