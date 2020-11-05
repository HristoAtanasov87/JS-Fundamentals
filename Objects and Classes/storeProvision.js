function store(stock, ordered) {
    let newStock = [];
    let result = [];

    for (let i = 0; i < ordered.length; i += 2) {
        let isFound = false;
        for (let j = 0; j < stock.length; j += 2) {
            let a = ordered[i];
            let b = stock[j];

            if (a === b) {
                isFound = true;
                stock[j + 1] = Number(stock[j + 1]);
                ordered[i + 1] = Number(ordered[i + 1])
                stock[j + 1] += ordered[i + 1];
            }
        }

        if (!isFound) {
            newStock.push(ordered[i], ordered[i + 1]);
        }
    }

    let processed = stock.concat(newStock)

    for (let i = 0; i < processed.length; i += 2) {
        let currentObject = {
            product: processed[i],
            quantity: processed[i + 1]
        }
        result.push(currentObject);
    }

    result.forEach(i => console.log(`${i.product} -> ${i.quantity}`));
}

store(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);