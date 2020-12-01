function city(input) {
    // let city = {
    //     name: name,
    //     area: area,
    //     population: population,
    //     country: country,
    //     postcode: postcode
    // }

    let cityKeyValuePairs = Object.entries(input);

    for (const iterator of cityKeyValuePairs) {
        let [property, value] = iterator;

        console.log(`${property} -> ${value}`);
    }
}

city({
    name: 'Sofia',
    area: '492',
    population: '1238438',
    country: 'Bulgaria',
    postCode: '1000'
});