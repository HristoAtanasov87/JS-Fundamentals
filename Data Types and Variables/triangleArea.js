function solve(num1, num2, num3) {
    let firstSide = num1;
    let secondSide = num2;
    let thirdSide = num3;
    let semiPerimeter = (firstSide + secondSide + thirdSide) / 2;

    let area = Math.sqrt(semiPerimeter * (semiPerimeter - firstSide) * (semiPerimeter - secondSide) * (semiPerimeter - thirdSide));

    console.log(area);
}

solve(2, 3.5, 4);