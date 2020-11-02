// function solve(input) {
//     let index = 0;
//     let modifiedArray = input;
//     let sum = input[0];
//     let lengthOfIndexes = modifiedArray.length - 1;
//     let count = 0;

//     while (modifiedArray.length > 1) {
//         let firstNum = modifiedArray[index];
//         let secondNum = modifiedArray[++index];
//         count++;
//         sum = firstNum + secondNum;
//         modifiedArray.shift();
//         modifiedArray.push(sum);

//         if (lengthOfIndexes <= count) {
//             modifiedArray.shift();
//             count = 0;
//             lengthOfIndexes = modifiedArray.length - 1    
//         }

//         index = 0;
//     }


//     console.log(sum);
// }

function solve(input) {
    let nums = input;
    
    while (nums.length > 1) {
        let condensed = [];
        for (let i = 0; i < nums.length - 1; i++) {
            condensed[i] = nums[i] + nums[i + 1]
        }
        nums = condensed;
    }
    

    console.log(nums[0]);
}

solve([5, 0, 4, 1, 2])