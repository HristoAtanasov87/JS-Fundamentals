function convertToJSON(name, lastName, hairColor) {
    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    let personStringified = JSON.stringify(person);

    console.log(personStringified);
}

convertToJSON('George',
    'Jones',
    'Brown'
)