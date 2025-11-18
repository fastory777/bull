function countBullsAndCows(guess, secret) {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secret[i]) {
            bulls++;
        } else if (secret.includes(guess[i])) {
            cows++;
        }
    }
    return { bulls, cows };
}

document.getElementById("btn_guess").addEventListener("click", function () {

    if (GameOver) {
        return;
    }

    let guessInput = document.getElementById("guess");
    let guess = guessInput.value.trim();
    let results = document.getElementById("results");

    const item = document.createElement("div");
    item.classList.add("result-item");


    if (!/^\d{4}$/.test(guess)) {
        item.textContent = "Not four digits :-(";
        results.prepend(item);
        guessInput.select();
        return;
    } else if (new Set(guess).size !== 4) {
        item.textContent = "Not four unique digits :-(";
        results.prepend(item);
        guessInput.select();
        return;
    }


    Guesses++;

    let res = countBullsAndCows(guess, Secret);
    item.textContent = `${Guesses}. try: ${res.bulls} bulls and ${res.cows} cows.`;
    results.prepend(item);


    updateAttemptsLeft();


    if (res.bulls === DIGITS) {
        item.classList.add("win");
        item.textContent = `🎉 ${Guesses}. ${guess} → ${res.bulls} bulls / ${res.cows} cows. You win! Secret was ${Secret}. 🎉`;

        GameOver = true;
        guessInput.disabled = true;
        document.getElementById("btn_guess").disabled = true;
        stopTimer();
    }

    else if (Guesses >= MAX_ATTEMPTS) {
        const gameOverItem = document.createElement("div");
        gameOverItem.classList.add("result-item");
        gameOverItem.textContent = `No attempts left. Game over! Secret was ${Secret}.`;
        results.prepend(gameOverItem);

        GameOver = true;
        guessInput.disabled = true;
        document.getElementById("btn_guess").disabled = true;
        stopTimer();
    }

    guessInput.select();
});

document.getElementById("guess").addEventListener("keydown", e => {
    if (e.key === "Enter" && !GameOver) {
        document.getElementById("btn_guess").click();
    }
});

