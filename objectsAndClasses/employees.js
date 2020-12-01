function employees(array) {
    let result = [];

    for (const iterator of array) {
        let employee = {};
        employee.name = iterator;
        employee.number = iterator.length;
        result.push(employee);
    }

    result.forEach(obj => console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`));
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);