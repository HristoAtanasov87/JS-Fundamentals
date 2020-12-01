function solve(input) {
    let oddNumbers = 0;

    for (let i = 1; i < input * 2; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            oddNumbers += i
        }
    }
    console.log((`Sum: ${oddNumbers}`));
}

solve(5);