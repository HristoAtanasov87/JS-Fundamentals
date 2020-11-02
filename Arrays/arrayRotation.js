function solve(input, rotations) {
    for (let i = 1; i <= rotations; i++) {
        let firstElement = input.shift();
        input.push(firstElement);
    }

    console.log(input.join(" "));
}

solve([51, 47, 32, 61, 21], 2)