
document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("#numberSquare");
    form.addEventListener("submit",function(event) {
        numberSquare(event);
    });
});

function numberSquare(event) {
    event.preventDefault();
    
    if (event.target.number.value) {
        document.querySelector("#squareResult").innerHTML = Math.sqrt(event.target.number.value);
    }
}