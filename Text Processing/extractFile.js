function solve(string) {
    let index = string.lastIndexOf("\\");
    let fileName = string.substring(index + 1, string.lastIndexOf("."));
    let indexTwo = string.lastIndexOf(".");
    let extension = string.substring(indexTwo + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs');