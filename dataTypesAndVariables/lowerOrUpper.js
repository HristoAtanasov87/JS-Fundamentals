function solve(character) {
    let characterCode = character.charCodeAt(0);
    
    if (97 <= characterCode && characterCode <= 122) {
        console.log("lower-case"); 
    } else if (65 <= characterCode && characterCode <= 90){
        console.log("upper-case");
    }
}

solve("A")