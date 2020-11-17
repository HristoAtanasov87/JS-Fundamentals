function catalogue(input) {
    let catalogueObject = {};

    for (let i of input) {
        let [product, price] = i.split(" : ");

        let group = product[0];

        if (!catalogueObject.hasOwnProperty(group)) {
            catalogueObject[group] = {};
        }

        catalogueObject[group][product] = Number(price);

    }

    let toSort = Object.entries(catalogueObject);
    toSort.sort(([groupA], [groupB]) => groupA.localeCompare(groupB));

    for (let i = 0; i < toSort.length; i++) {
        let [group, productObj] = toSort[i];
        let toSortProduct = Object.entries(productObj);
        toSortProduct.sort(([productA], [productB]) => productA.localeCompare(productB));
        toSort[i] = [group, toSortProduct];
    }

    toSort.forEach(x => {
        let [group, productsArr] = x;
        console.log(group);
        productsArr.forEach(y => {
            let [product, price] = y;
            console.log(`  ${product}: ${price}`);
        })
    })

}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)