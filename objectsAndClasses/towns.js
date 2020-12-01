function towns(array) {
    let result = [];

    for (const iterator of array) {
        let currentElement = iterator.split(" | "); // wseki element na masivche
        let [town, latitude, longitude] = currentElement;
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        // let currentObject = {};
        // currentObject.town = town;
        // currentObject.latitude = latitude;
        // currentObject.longitude = longitude;

        let currentObject = {
            town,
            latitude,
            longitude
        }

        result.push(currentObject);
    }

    result.forEach(i => console.log(i))
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);