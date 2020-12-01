function solve(number) {
    let isSpecial = false;
    let sum = 0;
    let test = number;
    
    for (let i = 1; i <= test; i++) {
        i = i.toString();
        
        for(let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }
        
        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = true;
            isSpecial = isSpecial.toString();
            isSpecial = isSpecial.charAt(0).toUpperCase() + isSpecial.slice(1);
            console.log(`${i} -> ${isSpecial}`);
        } else {
            isSpecial = isSpecial.toString();
            isSpecial = isSpecial.charAt(0).toUpperCase() + isSpecial.slice(1);
            console.log(`${i} -> ${isSpecial}`);
        }
        isSpecial = false;
        sum = 0;
        i = Number(i); 
    }
}

solve(15);

