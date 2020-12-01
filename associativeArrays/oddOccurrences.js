function occurrences(input) {
    let sentence = input.toLowerCase().split(" ");
    let myMap = new Map();

    for (let i of sentence) {
        if (!myMap.has(i)) {
            myMap.set(i, 0);
        }

        let newValue = myMap.get(i);
        myMap.set(i, ++newValue);
    }

    let toPrint = [];

    for (let iterator of myMap) {
        let [key, value] = iterator;
        if (value % 2 !== 0) {
            toPrint.push(key);
        }
    }

    console.log(toPrint.join(" "));


}

occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');