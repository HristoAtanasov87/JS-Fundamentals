function shopping(input) {
    let listOfShops = input.shift().split(" ");
    let index = Number(input.shift());

    for (let i = 1; i <= index; i++) {
        let command = input.shift().split(" ");

        let [action, shop, numberOfShops] = command;

        switch (action) {
            case "Include":
                listOfShops.push(shop);
                break;
            case "Visit":
                numberOfShops = Number(numberOfShops);

                if (numberOfShops > listOfShops.length) {
                    break;
                }

                if (shop == "first") {
                    listOfShops.splice(0, numberOfShops);
                } else {
                    listOfShops.splice(listOfShops.length - numberOfShops, numberOfShops);
                }
                break;
            case "Prefer":
                let shopIndexOne = Number(shop);
                let shopIndexTwo = Number(numberOfShops);

                if (shopIndexOne >= 0 && shopIndexOne < listOfShops.length && shopIndexTwo >= 0 && shopIndexTwo < listOfShops.length) {
                    let temp = listOfShops[shopIndexOne];
                    listOfShops.splice(shopIndexOne, 1, listOfShops[shopIndexTwo])
                    listOfShops.splice(shopIndexTwo, 1, temp);
                }
                break;
            case "Place":
                numberOfShops = Number(numberOfShops);
                if (numberOfShops >= 0 && numberOfShops < listOfShops.length) {
                    listOfShops.splice(numberOfShops + 1, 0, shop);
                }
                break;
        }
    }

    console.log(`Shops left:\n${listOfShops.join(" ")}`);
}

shopping([
    'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2'
]);


shopping([
    'Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
    '6',
    'Visit first 9',
    'Visit last 4',
    'Prefer 3 8',
    'Prefer 0 1',
    'Place Store 7',
    'Place ShoeAquarium 2'
]);
