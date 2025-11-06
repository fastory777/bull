document.getElementById("btn_guess").addEventListener("click", function() {
    Guesses++;
    alert(`Guess button clicked (${Guesses}).`);
    // alternativ: ("Guess button clicked (" + Guesses + ").");

    let guess = document.getElementById("guess").value;
    alert (guess);

    if (!/^\d{4}$/.test(guess)) {
        alert ("not four digits :-(");
    }
    else if (new Set(guess).size !== 4) {
        alert ("not four unique digits :-(");
    }
});