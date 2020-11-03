function solve(grade) {
    let receivedGrade = grade;

    if (2 <= receivedGrade && receivedGrade <= 2.99) {
        console.log(`Fail (2)`);
    } else if (3 <= receivedGrade && receivedGrade <= 3.49) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (3.5 <= receivedGrade && receivedGrade <= 4.49) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (4.5 <= receivedGrade && receivedGrade <= 5.49) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else if (5.5 <= receivedGrade && receivedGrade <= 6) {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}

solve(2.99);