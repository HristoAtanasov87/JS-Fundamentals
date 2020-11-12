function meetings(input) {
    let calendar = {};

    for (let iterator of input) {
        let [day, name] = iterator.split(" ");

        if (calendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            calendar[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let key in calendar) {
        console.log(`${key} -> ${calendar[key]}`);
    }

}

meetings(
    ['Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim']

)