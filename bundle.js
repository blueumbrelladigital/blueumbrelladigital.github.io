(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"bud-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

String.prototype.reverse = function () {
    return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
    if (!this.match(/\S/g)) {
        return true;
    }
}

Array.prototype.last = function() {
    return this.slice(-1);
}

// defines Phrase object
function Phrase(content) {
    this.content = content;
    
    // returns true if palindrome, false if not
    this.palindrome = function palindrome() {
        if (this.processedContent() === "") {
            return false;
        } else {
            return this.processedContent() === this.processedContent().reverse();
        }
    }
    
    // pass this.content to lower()
    this.processedContent = function processedContent() {
        if (this.content === null) {
            return "";
        } else {
            return this.lower(this.letters()); 
        }
    }
    
    // returns all lowercase
    this.lower = function lower(string) {
        return string.toLowerCase();
    }
    
    // returns all caps
    this.louder = function louder() {
        return this.content.toUpperCase();
    }
    
    // returns only letters
    this.letters = function letters() {
        return (this.content.match(/[a-zA-z]/g) || []).join("");
    }
}

// defines TranslatedPhrase object
function TranslatedPhrase(content,translation) {
    this.content = content;
    this.translation = translation;
    
    // pass this.translation to lower()
    this.processedContent = function processedContent() {
        return this.lower(this.translation);
    }    
}

TranslatedPhrase.prototype = new Phrase();
},{}]},{},[1]);
