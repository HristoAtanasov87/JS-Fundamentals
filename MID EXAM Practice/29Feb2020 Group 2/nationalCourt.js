function reception(input) {
    let employeesPossibilities = input.slice(0, 3);
    let questions = Number(input[3]);

    let answeredQuestionsPerHour = answersPerHour(employeesPossibilities);

    let result = timeNeeded(questions, answeredQuestionsPerHour);

    function answersPerHour(array) {
        let answers = 0;
        for (let iterator of array) {
            answers += Number(iterator);
        }

        return answers;
    }

    function timeNeeded(numberOfStudents, time) {
        let hours = 0;
        let count = 0;
        let remainingStudents = numberOfStudents;

        if (numberOfStudents == 0) {
            return `Time needed: 0h.`
        }

        let iteration = Math.trunc(numberOfStudents / time)

        for (let i = 0; i <= iteration; i++) {
            remainingStudents -= time;

            if (remainingStudents > 0) {
                hours++;
                count++
                if (count % 3 == 0) {
                    count = 0;
                    hours++;
                }
            } else {
                hours++;
                break;
            }

        }
        return `Time needed: ${hours}h.`;
    }

    return result;
}

console.log(reception(['3', '2', '5', '40']));