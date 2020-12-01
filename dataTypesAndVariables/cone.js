function solve(radius, height) {
    let coneRadius = radius;
    let coneHeight = height;

    let volume = Math.PI * Math.pow(radius, 2) * height / 3;
    let slant = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let totalSurfaceArea = Math.PI * Math.pow(radius, 2) + Math.PI * radius * slant;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}

solve(3, 5);