function garage(input) {
    let myMap = new Map();

    for (let iterator of input) {
        let [garageNum, car] = iterator.split(" - ");

        if (!myMap.has(garageNum)) {
            myMap.set(garageNum, []);
        }

        let carProperties = myMap.get(garageNum);
        carProperties.push(car);
    }

    let toSort = Array.from(myMap.entries());
    // toSort.sort(([a], [b]) => a - b);

    for (let i of toSort) {
        let [garageNum, carProperties] = i;
        console.log(`Garage № ${garageNum}`);

        carProperties.forEach(x => {
            let toCheck = x.indexOf(": ");
            while (toCheck !== -1) {
                x = x.replace(": ", " - ");
                toCheck = x.indexOf(": ")
            }
            console.log(`--- ${x}`);
        })
    }


}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);