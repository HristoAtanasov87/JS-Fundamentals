function solve(centuries) {
    let years = centuries * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    return `${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`;
}

console.log(solve(5));