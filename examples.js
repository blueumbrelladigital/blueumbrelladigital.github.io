// snippets reflecting map, filter, reduce //

let initialString = ["In JavaScript", "you convert a string", "to lowercase using", "methods"];

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// MAP //

// old
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(element => {
        urls.push(urlify(element));
    })
    return urls;
}

// modern
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(initialString));

function fullUrls(elements) {
    return elements.map(element => "https://js-tutorial.org/" + urlify(element));
}
console.log(fullUrls(initialString));

// FILTER //

// old
function imperataveSingles(elements) {
    let singles = [];
    elements.forEach(element => {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}

// modern
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log("elements with single word => '" + functionalSingles(initialString) + "'");

function filterConvert(elements) {
    return elements.filter(element => element.toLowerCase().includes("convert"));
}
console.log("elements that contain 'convert' => '" + filterConvert(initialString) + "'");

// REDUCE //

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// old
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(n => {
        total += n;
    });
    return total;
}

// modern
function functionalSum(elements) {
    return elements.reduce((total, number) => {
        return total += number;
    });
}
console.log("functional sum of digits 1..10 => " + functionalSum(numbers));

// REDUCE 2 //

// old
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(element => {
        lengths[element] = element.length;
    });
    return lengths;
}

// modern
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths;
    }, {});
}
console.log("element character lengths =>")
console.log(functionalLengths(initialString));

function functionalMultiply(elements) {
    return elements.reduce((total, element) => {
        total *= element;
        return total;
    });
}
console.log("functional multiplier of digits 1..10  => " + functionalMultiply(numbers));