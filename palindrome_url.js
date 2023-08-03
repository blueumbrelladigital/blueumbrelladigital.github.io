
//#!/home/ubuntu/.nvm/versions/node/v16.20.0/bin/node

const { request } = require('urllib');
let Phrase = require('bud-palindrome');

let website = "https://cdn.learnenough.com/phrases.txt";
fetchURL(website);

async function fetchURL(website) {
    let { data, response } = await request(website);
    let palindromes = data.toString().split("\n").filter(line => 
        new Phrase(line).palindrome()
    );
    palindromes.forEach(line => {
        console.log("palindrome detected: ", line);
    })
}
