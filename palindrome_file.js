let fs = require("fs");
let Phrase = require("bud-palindrome");

let readFile = fs.readFileSync("phrases.txt", "utf-8");
let writeData = [];

readFile.split("\n").forEach(line => {
    let phrase = new Phrase(line);
    if (phrase.palindrome()) {
        console.log("palindrome detected: ", line);
        writeData.push(phrase.content);
    }
})

fs.writeFileSync("palindromes.txt", writeData.join("\n"), "utf-8");