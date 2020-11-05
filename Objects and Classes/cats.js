function cats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let arrayOfCats = [];

    for (let i = 0; i < input.length; i++) {
        let iterator = input[i].split(" ");
        let [catName, catAge] = iterator;
        arrayOfCats.push(new Cat(catName, catAge))
    }

    for (const iterator of arrayOfCats) {
        iterator.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);

