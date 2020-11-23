class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
    }

    getProducts() {
        let result = [];
        for (let i of this.storage) {
            result.push(JSON.stringify(i));
        }
        return result.join("\n");
    }

    get totalCost() {
        let sum = 0;
        for (let i of this.storage) {
            sum += i.price * i.quantity;
        }

        return sum;
    }
}

let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);
