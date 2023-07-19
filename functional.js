// learning map, filter, reduce

let initialString = ["Fuck Off", "Stepped in Shit", "McFuckBalls", "Shiza Fista", "Beans"];

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// MAP //

// old school
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(element => {
        urls.push(urlify(element));
    })
    return urls;
}

console.log(imperativeUrls(initialString));

// map
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}

console.log(functionalUrls(initialString));

function fullUrls(elements) {
    return elements.map(element => "https://balls.org/" + urlify(element));
}

console.log(fullUrls(initialString));


// FILTER //

// old school
function imperataveSingles(elements) {
    let singles = [];
    elements.forEach(element => {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}

console.log(imperataveSingles(initialString));

// filter
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}

console.log(functionalSingles(initialString));

function filterFuck(elements) {
    return elements.filter(element => element.toLowerCase().includes("fuck"));
}

console.log(filterFuck(initialString));

// REDUCE //

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// old school
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(n => {
        total += n;
    });
    return total;
}

console.log(imperativeSum(numbers));

// reduce
function functionalSum(elements) {
    return elements.reduce((total, number) => {
        return total += number;
    });
}

console.log(functionalSum(numbers));

// REDUCE 2 //

// old school
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(element => {
        lengths[element] = element.length;
    });
    return lengths;
}

console.log(imperativeLengths(initialString));

// reduce
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths;
    }, {});
}

console.log(functionalLengths(initialString));

function functionalMultiply(elements) {
    return elements.reduce((total, element) => {
        total *= element;
        return total;
    });
}

console.log(functionalMultiply(numbers));