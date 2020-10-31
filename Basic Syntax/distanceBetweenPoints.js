function solve(x1, y1, x2, y2) {
    let sideA = Math.abs(x1 - x2);
    let sideB = Math.abs(y1 - y2);
    
    let distance = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    return distance;
}

console.log(solve(2.34, 15.66, -13.55, -2.9985));