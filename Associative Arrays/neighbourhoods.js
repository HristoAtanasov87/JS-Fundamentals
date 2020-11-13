function neighbourhoods(input) {
    let neighbours = new Map();

    let list = input.shift().split(", ");
    for (let i of list) {
        neighbours.set(i, []);
    }

    for (let iterator of input) {
        let [hood, person] = iterator.split(" - ");

        if (neighbours.has(hood)) {
            let current = neighbours.get(hood);
            current.push(person);
            neighbours.set(hood, current);
        }
    }

    let toSort = Array.from(neighbours.entries());
    toSort.sort(([streetA, arrayPersonsA], [streetB, arrayPersonsB]) => arrayPersonsB.length - arrayPersonsA.length);

    for (let [street, arrayPersons] of toSort) {
        console.log(`${street}: ${arrayPersons.length}`);
        arrayPersons.forEach(x => {
            console.log(`--${x}`);
        })
    }
}

neighbourhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);