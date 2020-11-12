function addressbook(input) {
    let addressbook = {};

    for (let iterator of input) {
        let [name, street] = iterator.split(":");

        addressbook[name] = street;
    }

    let toSort = Object.entries(addressbook);
    toSort.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    });

    for (let iterator of toSort) {
        let [name, street] = iterator;

        console.log(`${name} -> ${street}`);
    }
}


addressbook(
    ['Tim:Doe Crossing',
        'Bill:Nelson Place',
        'Peter:Carlyle Ave',
        'Bill:Ornery Rd']
)