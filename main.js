let Phrase = require("bud-palindrome");

function palindromeTester(event) {
    event.preventDefault();
    
    let phrase = new Phrase(event.target.phrase.value);
    let result = document.querySelector("#palindromeResult");

    if (phrase.palindrome()) {
        result.innerHTML = `Yup, "<strong>${phrase.content}</strong>" is a palindrome!`;
    } else {
        result.innerHTML = `Hall nah, "<strong>${phrase.content}</strong>" ain't no palindrome, ya fucker.`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("#palindromeTester");
    form.addEventListener("submit",function(event) {
        palindromeTester(event);
    });
});
