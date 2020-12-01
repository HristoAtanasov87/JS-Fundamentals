function sortByTwoCriteria(inputArray) {
    inputArray.sort(function (a, b) {
        if (a.length != b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });

    return inputArray.join("\n");
}

// function sortArray(input) {
//     input.sort(twoCriteriaSort);
//     input.forEach(el => console.log(el));

//     function twoCriteriaSort(cur, next) {
//         if (cur.length === next.length) {
//             return cur.localeCompare(next);
//         }
//         return cur.length - next.length;
//     }
// }

// console.log(sortByTwoCriteria(["alpha", "beta", "gamma", "Beta", "tri"]));
// console.log(sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]));
console.log(sortByTwoCriteria(["test", "Deny", "omen", "Default"]));

