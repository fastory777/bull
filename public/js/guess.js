document.getElementById("btn_guess").addEventListener("click", function() {
    Guesses++;
    alert(`Guess button clicked (${Guesses}).`);
    // alternativ: ("Guess button clicked (" + Guesses + ").");
});