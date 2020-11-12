function storage(input) {
    let storage = new Map();

    for (let iterator of input) {
        let [product, quantity] = iterator.split(" ");
        quantity = Number(quantity);

        if (!storage.has(product)) {
            storage.set(product, quantity);
        } else {
            let currentQuantity = storage.get(product);
            currentQuantity += quantity;
            storage.set(product, currentQuantity);
        }
    }

    for (let iterator of storage) {
        console.log(`${iterator[0]} -> ${iterator[1]}`);
    }
}

storage(
    ['tomatoes 10',
        'coffee 5',
        'olives 100',
        'coffee 40']
)