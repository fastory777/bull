const DIGITS = 4;
const MAX_DIGIT = 9;
let Secret = "";

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeSecret(len = DIGITS) {
    let arr = [];

    while (arr.length < len) {
        const digit = String(randInt(0, MAX_DIGIT));
        if (!arr.includes(digit)) {
            arr.push(digit);
        }
    }

    return arr.join("");

}

Secret = makeSecret();