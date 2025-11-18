document.getElementById("btn_reset").addEventListener("click", () => {

    let result = document.getElementById("results");

    result.innerHTML = "";
    document.querySelectorAll(".result-item.win").forEach(el => el.classList.remove("win"));

    const msg = document.createElement("div");
    msg.classList.add("result-item");
    msg.textContent = "New code generated! Start guessing!";
    result.appendChild(msg);

    Guesses = 0;
    GameOver = false;

    const input = document.getElementById("guess");
    input.value = "";
    input.disabled = false;
    input.readOnly = false;
    input.focus();

    const btnGuess = document.getElementById("btn_guess");
    btnGuess.disabled = false;

    Secret = makeSecret(DIGITS);

    updateAttemptsLeft();
});
