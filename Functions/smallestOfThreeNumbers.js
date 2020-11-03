// function smallestOfThree(numOne, numTwo, numThree) {
//     let a = numOne;
//     let b = numTwo;
//     let c = numThree;

//     if (a < b && a < c) {
//         return a;
//     } else if (b < a && b < c) {
//         return b;
//     } else {
//         return c;
//     }
// }


// function printSmallest(intOne, intTwo, intThree) {
//     if (intOne < intTwo && intOne < intThree) {
//         console.log(intOne);
//     } else if (intTwo < intThree && intTwo < intOne) {
//         console.log(intTwo);
//     } else {
//         console.log(intThree);
//     }
// }

// printSmallest(2, 5, 3);

function smallestOfThree(a, b, c) {
    let smallest = Number.MAX_SAFE_INTEGER;

    function smallerNumber(x, y) {
        if (x < y) {
            y = x;
        }

        return y;
    }

    smallest = smallerNumber(a, smallest);
    smallest = smallerNumber(b, smallest);
    smallest = smallerNumber(c, smallest);

    return smallest;
}
console.log(smallestOfThree(200, 500, 3));