// function wordCount(input) {
//     let count = {};

//     for (let i of input) {
//         if (!count.hasOwnProperty(i)) {
//             count[i] = 1;
//         } else {
//             count[i] = count[i] + 1;
//         }
//     }

//     let toSort = Object.entries(count);

//     toSort.sort(([wordA, timesA], [wordB, timesB]) => timesB - timesA);

//     for (let [word, times] of toSort) {
//         console.log(`${word} -> ${times} times`);
//     }
// }

function wordCount(input) {
    let map = new Map();

    for (let i of input) {
        if (!map.has(i)) {
            map.set(i, 1);
        } else {
            let current = map.get(i);
            current++;
            map.set(i, current);
        }
    }

    let toSort = Array.from(map.entries());
    toSort.sort(([wordA, timesA], [wordB, timesB]) => timesB - timesA);

    for (let [word, times] of toSort) {
        console.log(`${word} -> ${times} times`);
    }
}


wordCount(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);