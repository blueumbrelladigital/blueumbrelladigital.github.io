let Phrase = require("bud-palindrome");

function palindromeTester() {
    let input = prompt("Enter a string of characters to see if they form a palindrome:");
    let phrase = new Phrase(input);
    let result = document.querySelector("#palindromeResult");

    if (phrase.palindrome()) {
        result.innerHTML = `Yup, "<strong>${phrase.content}</strong>" is a palindrome!`;
    } else {
        result.innerHTML = `Hall nah, "${phrase.content}" ain't no palindrome, ya fucker.`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("#palindromeTester");
    form.addEventListener("submit",function() {
        palindromeTester();
    });
})
