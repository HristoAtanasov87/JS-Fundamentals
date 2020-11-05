class Storage {
    constructor(capacity) {
        this.capacity = capacity;
    }

    addProduct(input) {
        let storage = {
            name: input.name,
            price: input.price,
            quantity: input.quantity
        }

        this.storage = storage;
        this.capacity -= storage.quantity;

    }

    getProducts() {

    }

}


let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
console.log(storage.storage);
console.log(storage.capacity);
// storage.addProduct(productThree);
// storage.getProducts();
// console.log(storage.capacity);
// console.log(storage.totalCost);
