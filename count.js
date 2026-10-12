
document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("#wordCounter");
    form.addEventListener("submit",function(event) {
        wordCounter(event);
    });
});

function wordCounter(event) {
    event.preventDefault();
    
    let words = event.target.words.value.toLowerCase().match(/[\w'-]+/g);
    let uniques = new Map();
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (uniques.get(word)) {
            let newValue = uniques.get(word) + 1;
            uniques.set(word, newValue);
        } else {
            uniques.set(word, 1);
        }
    }
    
    let resultText = ""
    for (let unique of uniques) {
        resultText += unique[0] + " => " + unique[1] + "<br>";
    }
    
    
    let result = document.querySelector("#wordResult");
    result.innerHTML = resultText;
}