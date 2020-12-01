function solve(input) {
    let startingYield = input;
    let count = 0;
    let profit = 0;

    for (let i = startingYield; i >= 100; i -= 10) {
        count++;
        profit += i;
        
        if (profit >= 26) {
            profit -= 26;
        } else {
            break;
        }
    }

    if (profit >= 26) {
        profit -= 26;
    }
    
    console.log(count);
    console.log(profit);
}

solve(100)