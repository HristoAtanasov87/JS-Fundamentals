function parseJSON(input) {
    let person = JSON.parse(input);
    let toLoop = Object.entries(person);

    for (const iterator of toLoop) {
        let [property, value] = iterator;

        console.log(`${property}: ${value}`);
    }

}

parseJSON('{"name": "George", "age": 40, "town": "Sofia"}');