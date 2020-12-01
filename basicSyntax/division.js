function solve(input) {
    let number = input;
    let isDivisibleBy2 = false;
    let isDivisibleBy3 = false;
    let isDivisibleBy6 = false;
    let isDivisibleBy7 = false;
    let isDivisibleBy10 = false;
 
    if (number % 2 === 0) {
        isDivisibleBy2 = true;
    } 
    
    if (number % 3 === 0) {
        isDivisibleBy3 = true;
    }

    if (number % 6 === 0) {
        isDivisibleBy6 = true;
    }

    if (number % 7 === 0) {
        isDivisibleBy7 = true;
    }

    if (number % 10 === 0) {
        isDivisibleBy10 = true;
    }

    if (isDivisibleBy10) {
        console.log("The number is divisible by 10"); 
    } else if (isDivisibleBy7) {
        console.log("The number is divisible by 7");
    } else if (isDivisibleBy6) {
        console.log("The number is divisible by 6");
    } else if (isDivisibleBy3) {
        console.log("The number is divisible by 3"); 
    } else if (isDivisibleBy2) {
        console.log("The number is divisible by 2"); 
    } else { 
        console.log("Not divisible");
    }
}

solve(12);