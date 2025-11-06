document.getElementById("btn_reset").addEventListener("click", () => {
    let secret = makeSecret(DIGITS);
    let result = document.getElementById("results");
    result.innerHTML = `New code generated (${secret}) - start guessing!`;
    Guesses = 0;

});
