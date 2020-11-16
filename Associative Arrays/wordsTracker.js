function tracker(input) {
    let wordsToLookFor = input.shift().split(" ");
    let myObj = {};

    for (let word of wordsToLookFor) {
        myObj[word] = 0;
    }

    for (let word of input) {
        if (myObj.hasOwnProperty(word)) {
            myObj[word]++;
        }
    }

    let toSort = Object.entries(myObj);

    toSort.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    for (let [key, value] of toSort) {
        console.log(`${key} - ${value}`);
    }

}


tracker
    ([
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
        , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task', "this", "this"
    ])
