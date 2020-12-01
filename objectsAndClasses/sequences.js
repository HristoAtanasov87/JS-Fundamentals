function sequences(input) {
    let store = {};
    let seq = 0;

    for (let i of input) {
        let array = JSON.parse(i);
        store[seq] = array;
        seq++;
    }

    let toFilter = Object.values(store);
    let toPrint = [];

    for (let i = 0; i < toFilter.length - 1; i++) {
        let first = toFilter[i];
        first.sort((a, b) => b - a);

        for (let j = 0; j < toFilter.length; j++) {
            if (i == j) {
                j += 1;
            }
            let second = toFilter[j];
            second.sort((a, b) => b - a);
            let count = 0;

            for (let k = 0; k < first.length; k++) {
                if (first[k] === second[k]) {
                    count++;
                }

                if (count === first.length) {
                    toFilter.splice(j, 1);
                    j--;
                }
            }
        }
    }
    toFilter.sort((a, b) => a.length - b.length);
    toFilter.forEach(x => {
        console.log(`[${x.join(", ")}]`);
    })
}

sequences(
    ["[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"]

);