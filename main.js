let Phrase = require("bud-palindrome");

let input = prompt("Enter a string of characters to see if they form a palindrome:");
let phrase = new Phrase(input);

if (phrase.palindrome()) {
    alert("Yup, that's a palindrome!");
} else {
    alert("Hell nah, ya fucker.");
}
