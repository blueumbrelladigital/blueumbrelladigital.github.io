let Phrase = require("bud-palindrome");

function palindromeTester() {
    let input = prompt("Enter a string of characters to see if they form a palindrome:");
    let phrase = new Phrase(input);

    if (phrase.palindrome()) {
        alert("Yup, that's a palindrome!");
    } else {
        alert("Hell nah, ya fucker.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("#palindromeTester");
    form.addEventListener("submit",function() {
        palindromeTester();
    });    
})
