function phonebook(input) {
    let phonebook = {};

    for (let iterator of input) {
        let [name, phone] = iterator.split(" ");

        phonebook[name] = phone;
    }

    for (let tuple in phonebook) {
        console.log(`${tuple} -> ${phonebook[tuple]}`);
    }


}

phonebook(
    ['Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344']
);