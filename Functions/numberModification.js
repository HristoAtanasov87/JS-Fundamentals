function solve(input) {
    let number = input.toString();
    let initialAvgValue = 0;
    let sum = 0;
    let counter = 0;

    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
        counter++;
    }
    
    initialAvgValue = sum / counter;
    counter = 0;
    sum = 0;

    if (initialAvgValue > 5) {
        console.log(number);
    } else {
        let avgValue = 0;
        
        for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
            number += 9;
           
            for (let j = 0; j < number.length; j++) {
                sum += Number(number[j]);
                counter++;
            }

            avgValue = sum / counter;
            sum = 0;
            counter = 0;

            if (avgValue > 5) {
                break;
            }
        }

        console.log(number);
    }
}


solve(5835)