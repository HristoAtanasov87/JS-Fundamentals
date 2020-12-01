function solve(input) {
    let iterator = input.shift();
    let word = [];
    while (iterator !== "end") {

        let firstLetterArray = iterator.split(":");
        let firstLetter = firstLetterArray.shift();
        let [firstLetterIndexes] = firstLetterArray;
        firstLetterIndexes = firstLetterIndexes.split("/");



        for (let i = 0; i < firstLetterIndexes.length; i++) {
            word[firstLetterIndexes[i]] = firstLetter;
        }

        iterator = input.shift();
    }

    console.log(word.join(""));
}

solve(
    [
        'a:0/3/5/11', 'v:1/4',
        'j:2', 'm:6/9/15',
        's:7/13', 'd:8/14',
        'c:10', 'l:12',
        'end'
    ]
)