function reverse(string) {
    return Array.from(string).reverse().join("");
}

function palindrome(string) {
    let lowerCaseString = string.toLowerCase();
    return lowerCaseString === reverse(lowerCaseString);
}