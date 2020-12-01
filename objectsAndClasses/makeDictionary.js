function dictionary(array) {
    let output = [];

    for (let i = 0; i < array.length; i++) {
        let madeObject = JSON.parse(array[i]);
        let property = Object.keys(madeObject).join();
        let value = Object.values(madeObject).join();

        let myObj = {
            term: property,
            definition: value
        }

        output.push(myObj);

        if (i > 0) {
            for (let j = 0; j < output.length - 1; j++) {

                if (output[j].term === property) {
                    output[j].definition = value;
                    output.pop();
                    break;
                }
            }
        }
    }

    output.sort((a, b) => (a.term).localeCompare(b.term))

    output.forEach(o => {
        console.log(`Term: ${o.term} => Definition: ${o.definition}`);
    })
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Boiler":"A fuel"}',
    '{"Boiler":"A fuel-burni."}'
]
);