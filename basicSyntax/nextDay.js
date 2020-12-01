function solve(year, month, day) {
    let totalDays = 0;
    let newMonth = month;
    let newYear = year;
    let newDay = 0;

    if (year < 1900) {
        newYear = 1900 + year;
    }
    
    switch (month) {
        case 1:
            totalDays = 31;
            break;
        case 2:
            totalDays = 28;
            break;
        case 3:
            totalDays = 31;
            break;
        case 4:
            totalDays = 30;
            break;
        case 5:
            totalDays = 31;
            break;
        case 6:
            totalDays = 30;
            break;
        case 7:
            totalDays = 31;
            break;
        case 8:
            totalDays = 31;
            break;
        case 9:
            totalDays = 30;
            break;
        case 10:
            totalDays = 31;
            break;
        case 11:
            totalDays = 30;
            break;
        case 12:
            totalDays = 31;
            break;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        if (month === 2) {
            totalDays = 29;
        }
    }

    if (day + 1 > totalDays) {
        newDay = 1
        newMonth = month + 1;
        if (newMonth > 12) {
            newYear = year + 1;
            newMonth = 1;
        }
    } else {
        newDay = day + 1;
    }

    return (`${newYear}-${newMonth}-${newDay}`)
}

console.log(solve(1, 1, 1));