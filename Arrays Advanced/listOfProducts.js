function productList(inputArray) {
    let sorted = inputArray.sort();

    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }
}

productList(["Potatoes", "Tomatoes", "Onions", "Apples"]);  