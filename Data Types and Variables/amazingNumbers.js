function solve(input) {
    let receivedNumber = input.toString();
    let sum = 0;
    
    for (let i = 0; i < receivedNumber.length; i++) {
        sum += Number(receivedNumber[i]);
    }

    let result = sum.toString().includes("9")

    if (result) {
        console.log(`${receivedNumber} Amazing? True`);
    } else {
        console.log(`${receivedNumber} Amazing? False`);
    }
}

solve(458);