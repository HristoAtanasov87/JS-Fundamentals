function bonus(inputArray) {
    let students = Number(inputArray.shift());
    let lectures = Number(inputArray.shift());
    let additionalBonus = Number(inputArray.shift());

    let totalBonus = 0;
    let topStudent = 0;
    for (let i = 0; i < students; i++) {
        let calc = Number(inputArray[i]) / lectures * (5 + additionalBonus);

        if (calc > totalBonus) {
            totalBonus = calc;
            topStudent = Number(inputArray[i]);
        }
    }

    console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
    console.log(`The student has attended ${topStudent} lectures.`);
}

bonus([
    '5',
    '25',
    '30',
    '12', '19', '24',
    '16', '20'
]
)