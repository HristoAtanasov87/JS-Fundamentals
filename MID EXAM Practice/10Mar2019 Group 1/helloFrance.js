function france(input) {
    let collection = input.shift().split("|");

    let budget = Number(input.shift());
    let itemsBought = [];

    for (let i = 0; i < collection.length; i++) {
        let [item, price] = collection[i].split("->");
        price = Number(price);

        if (item == "Clothes" && price <= 50) {

            if (budget >= price) {
                itemsBought.push(price);
                budget -= price;
            }
        } else if (item == "Shoes" && price <= 35) {

            if (budget >= price) {
                itemsBought.push(price);
                budget -= price;
            }
        } else if (item == "Accessories" && price <= 20.5) {

            if (budget >= price) {
                itemsBought.push(price);
                budget -= price;
            }
        }
    }

    let profit = 0;
    let total = 0;
    for (let i = 0; i < itemsBought.length; i++) {
        total += itemsBought[i];
        itemsBought[i] *= 1.4;
        profit += itemsBought[i];
    }
    budget += profit;
    profit -= total;

    itemsBought = itemsBought.map(x => x.toFixed(2));

    console.log(`${itemsBought.join(" ")}`);
    console.log(`Profit: ${profit.toFixed(2)}`);
    // for (let i of itemsBought) {
    //     profit += i;
    //     profit -= total; 
    // }

    if (budget >= 150) {
        console.log("Hello, France!");
    } else {
        console.log(`Time to go.`);
    }

}

france([
    'Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
    '120'
])

france([
    'Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60',
    '90'
])