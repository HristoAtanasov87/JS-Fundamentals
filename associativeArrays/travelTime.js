function travelTime(input) {
    let list = {};

    for (let iterator of input) {
        let [country, town, cost] = iterator.split(" > ");
        cost = Number(cost);

        if (list.hasOwnProperty(country)) {

            if (list[country].hasOwnProperty(town)) {
                let toCheck = list[country][town];
                if (toCheck > cost) {

                    list[country][town] = cost;
                }

            } else {
                list[country][town] = cost;
            }

        } else {
            list[country] = {};
            list[country][town] = cost;
        }
    }

    let alphabeticalSort = Object.entries(list);

    alphabeticalSort.sort(([countryA, objectA], [countryB, objectB]) => countryA.localeCompare(countryB));

    for (let i = 0; i < alphabeticalSort.length; i++) {
        let [country, towns] = alphabeticalSort[i];
        let toSort = Object.entries(towns);
        toSort.sort(([townA, costA], [townB, costB]) => costA - costB);
        alphabeticalSort[i] = [country, toSort];
    }

    for (let [country, towns] of alphabeticalSort) {
        let toPrint = "";
        for (let [town, cost] of towns) {
            toPrint += ` ${town} -> ${cost}`
        }

        console.log(`${country} ->${toPrint}`);
    }



}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 100",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
);